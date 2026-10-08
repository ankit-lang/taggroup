import os
import re

people_dir = "src/app/(public)/people"

def patch_file(name, filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    person_id = name.replace('-', '_')

    # Insert useI18n
    if 'useI18n' not in content:
        content = content.replace("import React from 'react';", "import React from 'react';\nimport { useI18n } from '@/lib/i18n';")
        content = content.replace("export default function Page() {", "export default function Page() {\n  const { t } = useI18n();")

    # Breadcrumb
    content = re.sub(r'<div className="breadcrumb"><a href="/index">.*?</a> / <a href="/leadership">.*?</a> / <span>.*?</span></div>',
                     f'''<div className="breadcrumb"><a href="/index">{{t('people_pages.{person_id}.breadcrumb.home')}}</a> / <a href="/leadership">{{t('people_pages.{person_id}.breadcrumb.leadership')}}</a> / <span>{{t('people_pages.{person_id}.name')}}</span></div>''', content)

    # Eyebrow, Name, Subtitle
    content = re.sub(r'<span className="eyebrow">.*?</span>', f'''<span className="eyebrow">{{t('people_pages.{person_id}.title')}}</span>''', content)
    content = re.sub(r'<h1>.*?</h1>', f'''<h1>{{t('people_pages.{person_id}.name')}}</h1>''', content)
    content = re.sub(r'<h1>.*?</h1>\s*<p>.*?</p>', f'''<h1>{{t('people_pages.{person_id}.name')}}</h1>\n        <p>{{t('people_pages.{person_id}.subtitle')}}</p>''', content)

    # Chips inside pill-row (if any)
    pill_row_m = re.search(r'<div className="pill-row"[^>]*>(.*?)</div>', content)
    if pill_row_m:
        chips = re.findall(r'<span className="chip">.*?</span>', pill_row_m.group(1))
        new_chips = ""
        for i in range(len(chips)):
            new_chips += f'''<span className="chip">{{t('people_pages.{person_id}.chips.c{i+1}')}}</span>'''
        content = content.replace(pill_row_m.group(0), f'<div className="pill-row" style={{ {{"marginTop":"14px"}} }}>{new_chips}</div>')

    # Sidebar
    content = re.sub(r'<h5>Profile</h5>', f'''<h5>{{t('people_pages.{person_id}.nav.profile')}}</h5>''', content)
    content = re.sub(r'<a href="#summary">Overview</a>', f'''<a href="#summary">{{t('people_pages.{person_id}.nav.overview')}}</a>''', content)
    content = re.sub(r'<a href="#expertise">Areas of expertise</a>', f'''<a href="#expertise">{{t('people_pages.{person_id}.nav.expertise')}}</a>''', content)
    content = re.sub(r'<a href="#experience">Experience</a>', f'''<a href="#experience">{{t('people_pages.{person_id}.nav.experience')}}</a>''', content)
    content = re.sub(r'<a href="#credentials">Credentials</a>', f'''<a href="#credentials">{{t('people_pages.{person_id}.nav.credentials')}}</a>''', content)
    
    content = re.sub(r'<h5>Get in touch</h5>', f'''<h5>{{t('people_pages.{person_id}.nav.get_in_touch')}}</h5>''', content)
    
    # We leave the email btn html alone except the text.
    content = re.sub(r'</svg> Email .*?</a>', f'''</svg> {{t('people_pages.{person_id}.nav.email')}}</a>''', content)
    content = re.sub(r'</svg> Download profile \(PDF\)</a>', f'''</svg> {{t('people_pages.{person_id}.nav.download')}}</a>''', content)

    # Jump chips
    jump_m = re.search(r'<nav className="jump-chips"[^>]*>(.*?)</nav>', content)
    if jump_m:
        content = content.replace(jump_m.group(1), f'''<a href="#summary">{{t('people_pages.{person_id}.nav.overview')}}</a><a href="#expertise">{{t('people_pages.{person_id}.nav.expertise')}}</a><a href="#experience">{{t('people_pages.{person_id}.nav.experience')}}</a><a href="#credentials">{{t('people_pages.{person_id}.nav.credentials')}}</a>''')

    # Overview
    content = re.sub(r'<section className="svc-block" id="summary">\s*<h2>.*?</h2>', f'''<section className="svc-block" id="summary">\n          <h2>{{t('people_pages.{person_id}.overview.title')}}</h2>''', content)
    content = re.sub(r'<p className="lead"[^>]*>.*?</p>', f'''<p className="lead" style={{ {{"color":"var(--charcoal-700)"}} }}>{{t('people_pages.{person_id}.overview.desc')}}</p>''', content)
    
    stats_m = re.search(r'<div className="stats"(.*?)</div></div></div></div>', content, re.DOTALL)
    if stats_m:
        lbls = re.findall(r'<div className="lbl">.*?</div>', stats_m.group(0))
        new_stats = stats_m.group(0)
        for i, _ in enumerate(lbls):
            new_stats = re.sub(r'<div className="lbl">.*?</div>', f'''<div className="lbl">{{t('people_pages.{person_id}.overview.s{i+1}')}}</div>''', new_stats, count=1)
        content = content.replace(stats_m.group(0), new_stats)

    # Expertise
    content = re.sub(r'<section className="svc-block" id="expertise">\s*<h2>.*?</h2>', f'''<section className="svc-block" id="expertise">\n          <h2>{{t('people_pages.{person_id}.expertise.title')}}</h2>''', content)
    
    xp_grid_m = re.search(r'<div className="xp-grid">(.*?)</div>\s*</section>', content, re.DOTALL)
    if xp_grid_m:
        grid_html = xp_grid_m.group(1)
        cols = grid_html.split('<div className="xp-col">')
        new_cols = []
        for i, col in enumerate(cols[1:]): # skip empty 0
            new_col = col
            new_col = re.sub(r'<h4>.*?</h4>', f'''<h4>{{t('people_pages.{person_id}.expertise.h{i+1}')}}</h4>''', new_col)
            
            lis = re.findall(r'<li>.*?</li>', new_col)
            for j, _ in enumerate(lis):
                new_col = re.sub(r'<li>.*?</li>', f'''<li>{{t('people_pages.{person_id}.expertise.h{i+1}_l{j+1}')}}</li>''', new_col, count=1)
                
            new_cols.append(new_col)
            
        new_grid = '<div className="xp-col">'.join([''] + new_cols)
        content = content.replace(grid_html, new_grid)

    # Experience
    content = re.sub(r'<section className="svc-block" id="experience">\s*<h2>.*?</h2>', f'''<section className="svc-block" id="experience">\n          <h2>{{t('people_pages.{person_id}.experience.title')}}</h2>''', content)
    timeline_m = re.search(r'<div className="timeline">(.*?)</div>\s*</section>', content, re.DOTALL)
    if timeline_m:
        timeline_html = timeline_m.group(1)
        items = timeline_html.split('<div className="tl-item">')
        new_items = []
        for i, item in enumerate(items[1:]):
            new_item = item
            new_item = re.sub(r'<div className="tl-period">.*?</div>', f'''<div className="tl-period">{{t('people_pages.{person_id}.experience.p{i+1}')}}</div>''', new_item)
            new_item = re.sub(r'<strong>.*?</strong>', f'''<strong>{{t('people_pages.{person_id}.experience.r{i+1}')}}</strong>''', new_item)
            new_item = re.sub(r'<p>.*?</p>', f'''<p>{{t('people_pages.{person_id}.experience.d{i+1}')}}</p>''', new_item)
            new_items.append(new_item)
        
        new_timeline = '<div className="tl-item">'.join([''] + new_items)
        content = content.replace(timeline_html, new_timeline)

    # Credentials
    content = re.sub(r'<section className="svc-block" id="credentials">\s*<h2>.*?</h2>', f'''<section className="svc-block" id="credentials">\n          <h2>{{t('people_pages.{person_id}.cred.title')}}</h2>''', content)
    
    cred_m = re.search(r'<section className="svc-block" id="credentials">(.*?)</section>', content, re.DOTALL)
    if cred_m:
        cred_html = cred_m.group(1)
        ul_m = re.search(r'<ul[^>]*>(.*?)</ul>', cred_html, re.DOTALL)
        if ul_m:
            lis = re.findall(r'<li>.*?</li>', ul_m.group(1))
            new_ul = ul_m.group(0)
            for i, _ in enumerate(lis):
                new_ul = re.sub(r'<li>.*?</li>', f'''<li>{{t('people_pages.{person_id}.cred.c{i+1}')}}</li>''', new_ul, count=1)
            content = content.replace(ul_m.group(0), new_ul)
            
        content = re.sub(r'<h4 style={{"margin":"26px 0 12px","color":"var\(--accent\)"}}>.*?</h4>', f'''<h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>{{t('people_pages.{person_id}.cred.sector')}}</h4>''', content)

        chips_block_m = re.search(r'<div className="chips">(.*?)</div>', cred_html, re.DOTALL)
        if chips_block_m:
            sectors = re.findall(r'<span className="chip">.*?</span>', chips_block_m.group(1))
            new_chips = chips_block_m.group(0)
            for i, _ in enumerate(sectors):
                new_chips = re.sub(r'<span className="chip">.*?</span>', f'''<span className="chip">{{t('people_pages.{person_id}.cred.s{i+1}')}}</span>''', new_chips, count=1)
            content = content.replace(chips_block_m.group(0), new_chips)

    # CTA
    content = re.sub(r'<div className="cta-band">\s*<h2>.*?</h2>', f'''<div className="cta-band">\n            <h2>{{t('people_pages.{person_id}.cta.title')}}</h2>''', content)
    content = re.sub(r'<div className="cta-band">\n            <h2>.*?</h2>\s*<p>.*?</p>', f'''<div className="cta-band">\n            <h2>{{t('people_pages.{person_id}.cta.title')}}</h2>\n            <p>{{t('people_pages.{person_id}.cta.desc')}}</p>''', content)
    content = re.sub(r'</svg> .*?@taggroup.in</a>', f'''</svg> {name.replace("-", ".")}@taggroup.in</a>''', content)
    content = re.sub(r'<a className="btn btn-light" href="/contact">.*?</a>', f'''<a className="btn btn-light" href="/contact">{{t('people_pages.{person_id}.cta.btn')}}</a>''', content)


    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Patched {name}")

for name in os.listdir(people_dir):
    if name in ["gaurav", "mr-pradip"]:
        continue
    path = os.path.join(people_dir, name, "page.tsx")
    if os.path.exists(path):
        patch_file(name, path)

print("Done patching.")
