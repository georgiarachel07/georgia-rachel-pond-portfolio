export type FunnelTag='Lead Capture'|'Booking'|'Checkout'|'Website'
export type Funnel={file:string;label:string;tag:FunnelTag;desc:string;dir?:'funnels'|'samples'}
export const gymFunnel:Funnel[]=[{file:'pulse.html',label:'Pulse',tag:'Website',desc:'A KPI dashboard with simulated metrics, custom browser-local workspaces and CSV export.'}]
export const bookingFunnel:Funnel[]=[{file:'relay.html',label:'Relay',tag:'Website',desc:'A team workflow sandbox with project stages, checklists and a mock publishing queue.'}]
export const websiteFunnel:Funnel[]=[{file:'aegis.html',label:'Aegis Shield',tag:'Website',desc:'An interactive browser security workspace and open-source extension.'}]
export const tagColors:Record<FunnelTag,string>={'Lead Capture':'#214a38',Booking:'#214a38',Checkout:'#214a38',Website:'#214a38'}
