import React, { useEffect } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { Paragraph } from '@contentful/forma-36-react-components'
import { DialogExtensionSDK } from '@contentful/app-sdk'
import sdk from '@commercelayer/sdk'
import { getSalesChannelToken } from '@commercelayer/js-auth'
import useGetToken from '../hooks/useGetToken'

interface DialogProps {
  sdk: DialogExtensionSDK
  cma: PlainClientAPI
}

const Dialog = ({ sdk }: DialogProps) => {
  const credentials: any = sdk.parameters.installation
  const token = useGetToken({ ...credentials })
  const resource = sdk.parameters?.invocation
  console.log(`props`, credentials, resource)
  useEffect(() => {
    if (token) {
      console.log(`token`, token)
      // const cl = sdk()
    }
  }, [token])
  return <Paragraph>Hello Dialog Component</Paragraph>
}

export default Dialog
