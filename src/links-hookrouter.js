import React from 'react'
import {
  Dropdown,
  Nav,
  Button,
  Breadcrumb
} from 'rsuite'
import { usePath, setLinkProps } from 'hookrouter'

const addMagic = props => ({ active: usePath() === props.href, ...setLinkProps({ ...props, href: props.href || '' }) })

export const LinkNav = props => <Nav.Item {...addMagic(props)} />
export const LinkDrop = props => <Dropdown.Item {...addMagic(props)} />
export const LinkButton = props => <Button {...addMagic(props)} />
export const LinkBread = props => <Breadcrumb.Item {...addMagic(props)} />
