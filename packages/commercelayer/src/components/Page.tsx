import React from 'react'
import { PlainClientAPI } from 'contentful-management'
import { Paragraph } from '@contentful/f36-components'
import { PageAppSDK } from '@contentful/app-sdk'

interface PageProps {
  sdk: PageAppSDK
  cma: PlainClientAPI
}

const Page = (props: PageProps): React.JSX.Element => {
  return <Paragraph>Hello Page Component</Paragraph>
}

export default Page
