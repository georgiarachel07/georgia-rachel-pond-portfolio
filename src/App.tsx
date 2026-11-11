import { Suspense, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Rail from '@/components/Rail'
import TabBar from '@/components/TabBar'
import QuickMenu from '@/components/QuickMenu'
import AccessMenu from '@/components/AccessMenu'
import { useIsPhone } from '@/hooks/useMediaQuery'
export default function App(){
 const phone=useIsPhone(),{pathname}=useLocation(),pond=useRef<HTMLIFrameElement>(null)
 const [paused,setPaused]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)
 useEffect(()=>{pond.current?.contentWindow?.postMessage({type:'pond-motion',enabled:!paused},location.origin)},[paused])
 return <><iframe ref={pond} className="pond-background" title="Decorative koi pond" aria-hidden="true" tabIndex={-1} src={import.meta.env.BASE_URL+'archive/index.html?view=pond'} onLoad={()=>pond.current?.contentWindow?.postMessage({type:'pond-motion',enabled:!paused},location.origin)}/><a href="#main-content" className="skip-link">Skip to content</a><div className="shell"><Rail/><main id="main-content" className={'shell__panel '+(pathname==='/'?'pond-home-panel':'pond-detail-panel')}><Suspense fallback={<p className="pond-loading">A moment of calm…</p>}><Outlet/></Suspense></main></div>{phone&&<><QuickMenu className="qmenu--float"/><TabBar/></>}<button className="pond-motion-control" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?'Resume pond':'Pause pond'}</button><AccessMenu/></>
}
