import { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import {
  Button,
  Flex,
  Icon,
  SkeletonBodyText,
  SkeletonContainer,
  Tag,
  TextInput,
} from '@contentful/forma-36-react-components'
import { DialogExtensionSDK } from '@contentful/app-sdk'
import clSdk, { QueryParamsList } from '@commercelayer/sdk'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [itemSelected, setItemSelected] = useState<Item | undefined>()
  const credentials: any = sdk.parameters.installation
  const { resource, accessToken } = sdk.parameters?.invocation as {
    resource: Resource
    accessToken: string
  }
  const org = getOrganizationSlug(credentials?.endpoint)
  useEffect(() => {
    if (accessToken) {
      const cl = clSdk({ accessToken, ...org })
      if (search.length > 0) {
        const params = {
          filters: { name_or_code_start: search },
          pageNumber: currentPage,
        } as QueryParamsList
        cl[resource].list(params).then((res) => {
          setItems(res)
        })
      } else {
        const params = {
          pageNumber: currentPage,
        } as QueryParamsList
        cl[resource].list(params).then((res) => {
          setItems(res)
          setLoading(false)
        })
      }
    }
  }, [search, accessToken, currentPage])
  const handleClick = (item: Item) => {
    setItemSelected(item)
  }
  return loading ? (
    <div className={styles.SkeletonContainer}>
      <SkeletonContainer>
        <SkeletonBodyText numberOfLines={5} />
      </SkeletonContainer>
    </div>
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
        <Button
          disabled={!itemSelected}
          buttonType="primary"
          onClick={() => sdk.close(itemSelected)}
        >
          Save
        </Button>
      </Flex>
      <div className={styles.TotalResultContainer}>
        <Tag tagType="secondary">Total result: {items?.meta.recordCount}</Tag>
      </div>
      <ItemsList
        itemSelected={itemSelected}
        items={items}
        onClick={handleClick}
      />
      <div>
        <Flex
          padding="spacingXl"
          justifyContent="space-evenly"
          justifyItems="center"
          alignItems="center"
        >
          <Button
            buttonType="naked"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            <Icon icon="ChevronLeft" />
            <Icon icon="ChevronLeft" />
          </Button>
          <Button
            buttonType="naked"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <Icon icon="ChevronLeft" />
          </Button>
          <Tag tagType="secondary">Current page: {currentPage}</Tag>
          <Button
            buttonType="naked"
            disabled={currentPage === items?.meta.pageCount}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <Icon icon="ChevronRight" />
          </Button>
          <Button
            buttonType="naked"
            disabled={currentPage === items?.meta.pageCount}
            onClick={() => setCurrentPage(items?.meta.pageCount as number)}
          >
            <Icon icon="ChevronRight" />
            <Icon icon="ChevronRight" />
          </Button>
        </Flex>
      </div>
    </>
  )
}

export default Dialog
