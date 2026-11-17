/**
 * "Selected clients" band — clients are described by sector (no names/logos).
 * Shown on the home page, About page and every service page.
 * Two scrolling rows; edit the lists below to change what appears.
 */
export type ClientSector = { title: string; desc: string }

export const CLIENT_SECTORS_ROW_1: ClientSector[] = [
  { title: 'Corporate travel', desc: 'Business travel management' },
  { title: 'Business services', desc: 'Credit & collections technology' },
  { title: 'Investment management', desc: 'Global alternative assets' },
  { title: 'Industrial technology', desc: 'RF & data connectivity' },
  { title: 'International shipping', desc: 'Dry bulk chartering' },
  // TODO(client): cards cut off in the screenshot — "…ss lending" and "Be… / Dig…"
]

export const CLIENT_SECTORS_ROW_2: ClientSector[] = [
  { title: 'Consumer products', desc: 'UAE free-zone business' },
  { title: 'Deal technology', desc: 'Virtual data rooms' },
  { title: 'Technology talent', desc: 'Global engineering recruitment' },
  { title: 'Robotics', desc: 'Warehouse automation' },
  { title: 'Finance transformation', desc: 'Shared services advisory' },
  // TODO(client): cards cut off in the screenshot — "…diagnostics / …testing" and "So… / Dig…"
]
