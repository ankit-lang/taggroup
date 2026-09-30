'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Mail, Phone, Building2, Calendar, Download, MoreHorizontal, LayoutGrid, List as ListIcon, CheckCircle2, Archive, Trash2, ArrowRight } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { createClient } from '@/lib/supabase/client';
import { toast } from 'sonner';

import { updateInquiryStatus, deleteInquiry } from '@/actions/contact.actions';

export default function InquiriesClient({ initialData }: { initialData: any[] }) {
  const [inquiries, setInquiries] = useState(initialData);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [view, setView] = useState<'grid' | 'table'>('grid');
  
  const [selectedInquiry, setSelectedInquiry] = useState<any | null>(null);

  const filteredData = useMemo(() => {
    let data = [...inquiries];

    if (search) {
      const q = search.toLowerCase();
      data = data.filter(i => 
        (i.name && i.name.toLowerCase().includes(q)) || 
        (i.email && i.email.toLowerCase().includes(q)) || 
        (i.company && i.company.toLowerCase().includes(q))
      );
    }

    if (filter !== 'all') {
      if (filter === 'unread') data = data.filter(i => i.status === 'new' || i.status === 'pending' || !i.status);
      else if (filter === 'contact') data = data.filter(i => i.type === 'contact');
      else if (filter === 'newsletter') data = data.filter(i => i.type === 'newsletter');
      else if (filter === 'archived') data = data.filter(i => i.status === 'archived' || i.status === 'resolved');
    }

    if (sort === 'oldest') {
      data.reverse();
    }

    return data;
  }, [inquiries, search, filter, sort]);

  const handleStatusUpdate = async (id: string, sourceTable: string, newStatus: string) => {
    try {
      // Map 'contacted' -> 'read' and 'archived' -> 'read' for compatibility with `contacts` table constraint
      const safeStatus = (sourceTable === 'contacts' && (newStatus === 'contacted' || newStatus === 'archived')) 
        ? 'read' 
        : newStatus;

      const res = await updateInquiryStatus(id, sourceTable, safeStatus);
      if (!res.success) throw new Error(res.error);
      
      setInquiries(prev => prev.map(i => i.id === id && i.source_table === sourceTable ? { ...i, status: safeStatus } : i));
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status: safeStatus });
      }
      toast.success(`Marked as ${safeStatus}`);
    } catch (err: any) {
      toast.error('Failed to update status: ' + err.message);
      console.error(err);
    }
  };

  const handleDelete = async (id: string, sourceTable: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const res = await deleteInquiry(id, sourceTable);
      if (!res.success) throw new Error(res.error);
      setInquiries(prev => prev.filter(i => !(i.id === id && i.source_table === sourceTable)));
      toast.success('Inquiry deleted');
    } catch (err: any) {
      toast.error('Failed to delete: ' + err.message);
      console.error(err);
    }
  };

  const exportCSV = () => {
    const headers = ['Type', 'Name', 'Email', 'Phone', 'Company', 'Status', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredData.map(i => [
        i.type || 'lead',
        `"${i.name || ''}"`,
        i.email || '',
        i.phone || '',
        `"${i.company || ''}"`,
        i.status || 'new',
        new Date(i.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'inquiries_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: string) => {
    const s = (status || 'new').toLowerCase();
    if (s === 'new' || s === 'pending') return <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-0 shadow-none">New / Unread</Badge>;
    if (s === 'in progress' || s === 'contacted') return <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-0 shadow-none">In Progress</Badge>;
    return <Badge className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 shadow-none">Archived</Badge>;
  };

  const getTypeBadge = (type: string) => {
    if (type === 'newsletter') return <Badge className="bg-purple-50 text-purple-700 border-purple-200/60 shadow-none">Newsletter</Badge>;
    return <Badge className="bg-amber-50 text-amber-700 border-amber-200/60 shadow-none">Contact Form</Badge>;
  };

  return (
    <div className="w-full flex flex-col min-h-screen p-8 bg-slate-50 text-slate-900">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact Inquiries</h1>
          <p className="text-slate-500 mt-2">Manage and view all incoming leads, newsletters, and contact submissions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white" onClick={exportCSV}>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Button variant={filter === 'all' ? 'default' : 'ghost'} onClick={() => setFilter('all')} className={filter !== 'all' ? 'text-slate-600' : ''}>All ({inquiries.length})</Button>
          <Button variant={filter === 'unread' ? 'default' : 'ghost'} onClick={() => setFilter('unread')} className={filter !== 'unread' ? 'text-slate-600' : ''}>Unread</Button>
          <Button variant={filter === 'contact' ? 'default' : 'ghost'} onClick={() => setFilter('contact')} className={filter !== 'contact' ? 'text-slate-600' : ''}>Contact Forms</Button>
          <Button variant={filter === 'newsletter' ? 'default' : 'ghost'} onClick={() => setFilter('newsletter')} className={filter !== 'newsletter' ? 'text-slate-600' : ''}>Newsletters</Button>
          <Button variant={filter === 'archived' ? 'default' : 'ghost'} onClick={() => setFilter('archived')} className={filter !== 'archived' ? 'text-slate-600' : ''}>Archived</Button>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input 
              type="text" 
              placeholder="Search leads..." 
              className="pl-9 bg-slate-50 border-slate-200" 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" onClick={() => setSort(sort === 'newest' ? 'oldest' : 'newest')} title="Sort Date">
            <Calendar className="h-4 w-4 text-slate-600" />
          </Button>
          <div className="flex bg-slate-100 rounded-md p-1 border border-slate-200">
            <Button variant="ghost" size="sm" className={`px-2 py-1 h-8 ${view === 'grid' ? 'bg-white shadow-sm' : ''}`} onClick={() => setView('grid')}>
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className={`px-2 py-1 h-8 ${view === 'table' ? 'bg-white shadow-sm' : ''}`} onClick={() => setView('table')}>
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
          <Mail className="h-10 w-10 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900">No inquiries found</h3>
          <p className="text-slate-500">Try adjusting your search or filters.</p>
        </div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {filteredData.map((inquiry: any) => (
            <Card key={`${inquiry.source_table}-${inquiry.id}`} className="bg-white border border-slate-200 hover:border-amber-400/60 shadow-sm hover:shadow-md transition-all rounded-xl overflow-hidden cursor-pointer flex flex-col" onClick={() => setSelectedInquiry(inquiry)}>
              <CardHeader className="pb-3 border-b border-slate-100 flex flex-row items-start justify-between">
                <div className="flex gap-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-sm">
                    {inquiry.name?.substring(0, 2).toUpperCase() || 'UN'}
                  </div>
                  <div>
                    <CardTitle className="text-base text-slate-900">{inquiry.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {getTypeBadge(inquiry.type)}
                  {getStatusBadge(inquiry.status)}
                </div>
              </CardHeader>
              
              <CardContent className="pt-4 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-4">
                  {inquiry.email && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span className="truncate">{inquiry.email}</span>
                    </div>
                  )}
                  {inquiry.phone && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <span>{inquiry.phone}</span>
                    </div>
                  )}
                  {inquiry.company && (
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      <span className="truncate">{inquiry.company}</span>
                    </div>
                  )}
                </div>

                {inquiry.message && (
                  <div className="bg-slate-50 border-l-2 border-amber-500 rounded-r-lg p-3.5">
                    <p className="text-sm text-slate-700 leading-relaxed font-normal line-clamp-2">
                      {inquiry.message}
                    </p>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-3 pb-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50" onClick={e => e.stopPropagation()}>
                {(!inquiry.status || inquiry.status === 'new' || inquiry.status === 'pending') ? (
                  <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" onClick={() => handleStatusUpdate(inquiry.id, inquiry.source_table, 'contacted')}>
                    <CheckCircle2 className="h-4 w-4 mr-1.5" /> Mark as Read
                  </Button>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">Read</span>
                )}
                
                <div className="flex gap-1">
                  {inquiry.email && (
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:text-amber-600" asChild>
                      <a href={`mailto:${inquiry.email}?subject=Re: Your Inquiry with TAG Advisors`}><ArrowRight className="h-4 w-4 mr-1.5" /> Reply</a>
                    </Button>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 cursor-pointer">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" style={{ background: '#fff', border: '1px solid #e4e8ee', color: '#1a2332' }}>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(inquiry.id, inquiry.source_table, 'archived')}>
                        <Archive className="h-4 w-4 mr-2" /> Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:bg-destructive/10" onClick={() => handleDelete(inquiry.id, inquiry.source_table)}>
                        <Trash2 className="h-4 w-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Contact</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((inquiry: any) => (
                <tr key={`${inquiry.source_table}-${inquiry.id}`} className="hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedInquiry(inquiry)}>
                  <td className="px-4 py-3">{getStatusBadge(inquiry.status)}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{inquiry.name} <br/><span className="text-xs font-normal text-slate-500">{getTypeBadge(inquiry.type)}</span></td>
                  <td className="px-4 py-3 text-slate-600">{inquiry.email}<br/>{inquiry.phone}</td>
                  <td className="px-4 py-3 text-slate-600">{inquiry.company}</td>
                  <td className="px-4 py-3 text-slate-500">{new Date(inquiry.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 cursor-pointer">
                        <MoreHorizontal className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" style={{ background: '#fff', border: '1px solid #e4e8ee', color: '#1a2332' }}>
                        <DropdownMenuItem onClick={() => handleStatusUpdate(inquiry.id, inquiry.source_table, 'contacted')}>Mark as Read</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusUpdate(inquiry.id, inquiry.source_table, 'archived')}>Archive</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(inquiry.id, inquiry.source_table)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Slide-Over Sheet */}
      <Sheet open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
        <SheetContent className="sm:max-w-md w-full overflow-y-auto" style={{ background: '#fff', borderColor: '#e4e8ee', color: '#1a2332' }}>
          {selectedInquiry && (
            <>
              <SheetHeader className="mb-6 pb-4 border-b border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  {getTypeBadge(selectedInquiry.type)}
                  {getStatusBadge(selectedInquiry.status)}
                </div>
                <SheetTitle className="text-2xl text-slate-900">{selectedInquiry.name}</SheetTitle>
                <SheetDescription>
                  Submitted on {new Date(selectedInquiry.created_at).toLocaleString()}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                
                {/* Contact Details Grid */}
                <div className="grid grid-cols-1 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedInquiry.email && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Mail className="h-4 w-4" /> <span className="text-sm font-medium">Email</span>
                      </div>
                      <a href={`mailto:${selectedInquiry.email}`} className="text-sm text-blue-600 hover:underline">{selectedInquiry.email}</a>
                    </div>
                  )}
                  {selectedInquiry.phone && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="h-4 w-4" /> <span className="text-sm font-medium">Phone</span>
                      </div>
                      <a href={`tel:${selectedInquiry.phone}`} className="text-sm text-blue-600 hover:underline">{selectedInquiry.phone}</a>
                    </div>
                  )}
                  {selectedInquiry.company && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Building2 className="h-4 w-4" /> <span className="text-sm font-medium">Company</span>
                      </div>
                      <span className="text-sm font-medium text-slate-900">{selectedInquiry.company}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                {selectedInquiry.message && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Full Message</h4>
                    <div className="bg-slate-50 border-l-2 border-amber-500 rounded-r-lg p-4 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {selectedInquiry.message}
                    </div>
                  </div>
                )}

                {/* Newsletters */}
                {selectedInquiry.newsletters && selectedInquiry.newsletters.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">Requested Subscriptions</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInquiry.newsletters.map((n: string) => (
                        <Badge key={n} variant="outline" className="bg-slate-50 text-slate-600">{n}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-3">
                  <h4 className="text-sm font-semibold text-slate-900">Manage Lead</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleStatusUpdate(selectedInquiry.id, selectedInquiry.source_table, 'contacted')}>
                      <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" /> Mark Contacted
                    </Button>
                    <Button variant="outline" className="w-full justify-start" onClick={() => handleStatusUpdate(selectedInquiry.id, selectedInquiry.source_table, 'archived')}>
                      <Archive className="mr-2 h-4 w-4 text-slate-500" /> Archive Lead
                    </Button>
                  </div>
                  {selectedInquiry.email && (
                    <Button className="w-full" asChild>
                      <a href={`mailto:${selectedInquiry.email}?subject=Re: Your Inquiry with TAG Advisors`}>
                        <Mail className="mr-2 h-4 w-4" /> Send Email Reply
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

    </div>
  );
}
