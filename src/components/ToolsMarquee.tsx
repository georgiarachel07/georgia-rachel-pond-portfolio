import { georgiaTools } from '@/data/georgia-tools'
export const tools=georgiaTools
export default function ToolsMarquee(){return <section className="tools-marquee" aria-label="Programming languages and tools"><div className="tools-marquee__track" aria-hidden="true">{[...tools,...tools].map((t,i)=><span key={i} className="tools-marquee__item"><span className="tools-marquee__tile"><img className="tools-marquee__img" src={t.iconPath} alt=""/></span><span>{t.name}</span></span>)}</div><ul className="sr-only">{tools.map(t=><li key={t.name}>{t.name}</li>)}</ul></section>}
