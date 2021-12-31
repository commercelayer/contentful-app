import { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import {
  Button,
  Flex,
  Icon,
  Paragraph,
  SkeletonBodyText,
  SkeletonContainer,
  Tag,
  TextInput,
  Typography,
} from '@contentful/forma-36-react-components'
import { DialogExtensionSDK } from '@contentful/app-sdk'
import clSdk, { QueryParamsList } from '@commercelayer/sdk'
import useGetToken from '../hooks/useGetToken'
import { getOrganizationSlug, Resource } from '../utils'
import ItemsList, { Item } from './ItemsList'
import styles from './Dialog.module.css'
import { ListResponse } from '@commercelayer/sdk/lib/cjs/resource'

interface DialogProps {
  sdk: DialogExtensionSDK
  cma: PlainClientAPI
}

const Dialog = ({ sdk }: DialogProps) => {
  const [items, setItems] = useState<ListResponse<Item>>()
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const credentials: any = sdk.parameters.installation
  const accessToken = useGetToken({ ...credentials })
  const invocation = sdk.parameters?.invocation as {
    resource: Resource
  }
  const org = getOrganizationSlug(credentials?.endpoint)
  useEffect(() => {
    if (accessToken) {
      const cl = clSdk({ accessToken, ...org })
      if (search.length > 0) {
        const params = {
          filters: { name_or_code_start: search },
        } as QueryParamsList
        cl[invocation.resource].list(params).then((res) => {
          setItems(res)
        })
      } else {
        const params = {} as QueryParamsList
        cl[invocation.resource].list(params).then((res) => {
          setItems(res)
          setLoading(false)
        })
      }
    }
  }, [search, accessToken])
  return loading ? (
    <SkeletonContainer>
      <SkeletonBodyText numberOfLines={10} />
    </SkeletonContainer>
  ) : (
    <>
      <Flex
        padding="spacingXl"
        justifyContent="space-between"
        justifyItems="center"
        alignItems="center"
      >
        <div>
          <TextInput
            className={styles.SearchInput}
            name="search"
            type="text"
            value={search}
            width="large"
            placeholder="Search for an option..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Icon
            color="muted"
            icon="Search"
            className={styles.SearchInputIcon}
          />
        </div>
        <Button buttonType="primary">Save</Button>
      </Flex>
      <div className={styles.TotalResultContainer}>
        <Tag tagType="secondary">Total result: {items?.meta.recordCount}</Tag>
      </div>
      <ItemsList items={items} />
    </>
  )
}

export default Dialog
