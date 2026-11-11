import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App'

import Home from '@/components/Home'

import NotFound from '@/components/NotFound'

import { restorePerfTier } from '@/lib/perf'

import { restorePrefs } from '@/lib/a11y'



import ArchiveView from '@/components/ArchiveView'
import WorkGallery from '@/components/WorkGallery'
import './styles/tokens.css'

import './styles/global.css'

import './styles/theme-glyph.css'

// The legacy section sheets first, then the shell. The redesign overrides them

// (the floating nav pill hiding behind the rail, the compact workflow), and

// equal-specificity rules are decided by source order.

import './styles/sections.css'

import './styles/extensions.css'

import './styles/ai-stack.css'

import './styles/shell.css'

import './styles/rail.css'

import './styles/home.css'

import './styles/bento.css'

import './styles/projects-grid.css'

import './styles/services-grid.css'

import './styles/showcase.css'

import './styles/testimonials-grid.css'

import './styles/about-grid.css'

import './styles/contact-grid.css'

import './styles/boot.css'

import './styles/credentials.css'

import './styles/testimonials.css'

import './styles/mobile-app.css'

import './styles/a11y.css'

// Apple design pass - an overlay on everything above; perf.css still wins.

import './styles/apple.css'

// Mobile motion + component pass on top of it (phone shell only).

import './styles/mobile-pass.css'

// Last: the perf tiers only ever turn things OFF, so they must win.

import './styles/perf.css'
import './styles/pond-theme.css'



// Re-apply this tab's performance verdict before the first paint, so a

// downgraded visitor never sees the expensive layers flash back on reload.

restorePerfTier()

restorePrefs()



const container = document.getElementById('root')

if (!container) throw new Error('Root element #root not found')



createRoot(container).render(

  <StrictMode>

    <HashRouter>

      <Routes>

        {/* The shell owns the rail, the shader and the intro; each child

            renders into its one scrolling panel. */}

        <Route element={<App />}>

          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<WorkGallery/>}/>
          <Route path="/ai" element={<ArchiveView view="projects" title="Systems that do useful work."/>}/>
          <Route path="/services" element={<ArchiveView view="lab" title="My corner of the cloud."/>}/>
          <Route path="/showcase" element={<ArchiveView view="fishing" title="The Quiet Catch."/>}/>
          <Route path="/testimonials" element={<ArchiveView view="reviews" title="The human side."/>}/>
          <Route path="/about" element={<ArchiveView view="about" title="From the helpdesk to infrastructure."/>}/>
          <Route path="/certificates" element={<ArchiveView view="certificates" title="Certifications & learning."/>}/>
          <Route path="/toolkit" element={<ArchiveView view="toolkit" title="Tools, languages & public work."/>}/>
          <Route path="/contact" element={<ArchiveView view="contact" title="Letâ€™s make something work."/>}/>
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </HashRouter>

  </StrictMode>,

)

