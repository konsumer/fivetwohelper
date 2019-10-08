import React from 'react'
import { render } from 'react-dom'
import {
  Header,
  Navbar,
  Nav,
  Container,
  Content,
  Message,
  Icon
} from 'rsuite'
import { useRoutes, usePath, A } from 'hookrouter'

import './style.less'
import { LinkNav } from './links-hookrouter'
import routes from './routes'
import PageNotFound from './pages/PageNotFound'

import { useData } from './data'

const App = () => {
  const [ data ] = useData()
  const routeResult = useRoutes(routes)
  const path = usePath()
  return (
    <Container>
      <Header>
        <Navbar appearance='inverse'>
          <Navbar.Header>
            <A className='navbar-brand' href='/'>5:2 helper</A>
          </Navbar.Header>
          <Navbar.Body>
            <Nav pullRight appearance='subtle'>
              <LinkNav href='/calendar'>Calendar</LinkNav>
              <LinkNav href='/setup'><Icon icon='cog' /></LinkNav>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </Header>
      <Content className='page'>
        {!data.fastDays.length && path !== '/setup' && (
          <Message
            showIcon
            description={<div>You haven't <A href='/setup'>set your fast days</A>. You will need to do this.</div>}
            type='warning'
          />
        )}
        {routeResult || <PageNotFound />}
      </Content>
    </Container>
  )
}

render(<App />, document.getElementById('root'))
