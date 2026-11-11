import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'
import HomeBento from './HomeBento'
export function HomeProfile(){return <header className="hprofile"><img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56}/><div className="hprofile__who"><span className="hprofile__name">Georgia Rachel</span><span className="hprofile__handle">AI · Infrastructure · Fullstack</span></div><QuickMenu className="hprofile__menu"/></header>}
export function HomeStats(){return <ul className="hstats">{profile.stats.map(({value,label,Icon})=><li key={label}><Icon size={18}/><b className="hstats__value">{value}</b><span className="hstats__label">{label}</span></li>)}</ul>}
export function HomeExplore(){return <><HomeBento/><div className="mobile-extra-links"><Link to="/showcase">The Quiet Catch ↗</Link><Link to="/toolkit">Languages & GitHub ↗</Link></div></>}
