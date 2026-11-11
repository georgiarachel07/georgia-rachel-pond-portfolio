import {cpSync,mkdirSync,readdirSync} from 'node:fs';
const selected=['archive','avatar.svg','favicon.svg','LICENSE.txt','homelab.webp','workstation.webp','honors.webp','project-pulse.webp','project-relay.webp','project-aegis.webp','funnels/pulse.html','funnels/relay.html','funnels/aegis.html','funnels/thumbs/pulse.jpeg','funnels/thumbs/relay.jpeg','funnels/thumbs/aegis.jpeg','icons/linkedin.svg'];
for(const name of readdirSync('public/icons').filter(n=>n.startsWith('gr-')))selected.push('icons/'+name);
for(const name of selected){const target='dist/'+name;mkdirSync(target.slice(0,target.lastIndexOf('/')),{recursive:true});cpSync('public/'+name,target,{recursive:true,filter:src=>!src.endsWith('.png')&&!src.endsWith('.pdf')});}
