import React from 'react'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageHelp from './pages/PageHelp'
import PageCalendar from './pages/PageCalendar'
import PageSetup from './pages/PageSetup'

const routes = {
  '/': () => <PageHome />,
  '/about': () => <PageAbout />,
  '/help': () => <PageHelp />,
  '/calendar': () => <PageCalendar />,
  '/setup': () => <PageSetup />
}

export default routes
