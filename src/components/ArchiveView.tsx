export default function ArchiveView({view,title}:{view:string;title:string}){
 return <section className="archive-page"><header className="archive-heading"><span>GEORGIA RACHEL / FIELD NOTES</span><h1>{title}</h1></header><iframe className="archive-frame" key={view} src={import.meta.env.BASE_URL+'archive/index.html?view='+view} title={title+' — portfolio details'}/></section>
}
