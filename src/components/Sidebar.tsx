import React from 'react'
import { PlainClientAPI } from 'contentful-management'
import { Paragraph } from '@contentful/f36-components'
import { SidebarAppSDK } from '@contentful/app-sdk'

interface SidebarProps {
  sdk: SidebarAppSDK
  cma: PlainClientAPI
}

const Sidebar = (props: SidebarProps): JSX.Element => {
  return <Paragraph>Hello Sidebar Component</Paragraph>
}

export default Sidebar
