import React from 'react'

import PageSetup from './pages/setup'
import PageCalendar from './pages/calendar'
import * as pages from './pages/**/*.md'

export const Page = ({ html, ...props }) => <div className='page' dangerouslySetInnerHTML={{ __html: html }} {...props} />

export const PageNotFound = () => <Page html={pages.error404} />

export const routes = {
  '/': () => <Page html={pages.index} />,
  '/setup': () => <PageSetup />,
  '/calendar': () => <PageCalendar />
}

for (let i in pages) {
  if (i !== 'index') {
    routes[`/${i}`] = () => <Page html={pages[i]} />
  }
}

export { pages }
export default routes
