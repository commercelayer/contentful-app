import { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import {
  Paragraph,
  SkeletonBodyText,
  SkeletonContainer,
} from '@contentful/forma-36-react-components'
import { DialogExtensionSDK } from '@contentful/app-sdk'
import clSdk from '@commercelayer/sdk'
import useGetToken from '../hooks/useGetToken'
import { getOrganizationSlug, Resource } from '../utils'
import ItemsList, { Item } from './ItemsList'

interface DialogProps {
  sdk: DialogExtensionSDK
  cma: PlainClientAPI
}

const Dialog = ({ sdk }: DialogProps) => {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const credentials: any = sdk.parameters.installation
  const accessToken = useGetToken({ ...credentials })
  const invocation = sdk.parameters?.invocation as {
    resource: Resource
  }
  const org = getOrganizationSlug(credentials?.endpoint)
  useEffect(() => {
    if (accessToken && items.length === 0) {
      const cl = clSdk({ accessToken, ...org })
      cl[invocation.resource].list().then((res) => {
        setItems(res)
        setLoading(false)
      })
    }
  }, [accessToken, org, invocation.resource, items.length])
  return loading ? (
    <SkeletonContainer>
      <SkeletonBodyText numberOfLines={5} />
    </SkeletonContainer>
  ) : (
    <ItemsList items={items} />
  )
}

export default Dialog
