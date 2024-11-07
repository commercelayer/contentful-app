import { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import {
  Button,
  Flex,
  SkeletonBodyText,
  SkeletonContainer,
  Badge,
  TextInput,
  Stack,
  Text
} from '@contentful/f36-components'
import { DialogAppSDK } from '@contentful/app-sdk'
import clSdk, { ListResponse, QueryParamsList } from '@commercelayer/sdk'
import { getOrganizationSlug, Resource } from '../utils'
import ItemsList, { Item } from './ItemsList'
import styles from './Dialog.module.css'
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@contentful/f36-icons'
import { Workbench } from '@contentful/f36-workbench'

interface DialogProps {
  sdk: DialogAppSDK
  cma: PlainClientAPI
}

const Dialog = ({ sdk }: DialogProps): JSX.Element => {
  const [items, setItems] = useState<ListResponse<Item>>()
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemSelected, setItemSelected] = useState<Item | undefined>()
  const credentials: any = sdk.parameters.installation
  const { accessToken, resource } = sdk.parameters?.invocation as {
    accessToken: string
    resource: Resource
  }
  const org = getOrganizationSlug(credentials?.endpoint)
  useEffect(() => {
    if (accessToken !== '' && resource != null && org != null) {
      const cl = clSdk({ accessToken, ...org })
      const include =
        resource === 'markets'
          ? ['price_list', 'inventory_model', 'merchant']
          : resource === 'sku_lists'
            ? ['sku_list_items']
            : []
      if (search.length > 0) {
        const params: QueryParamsList = {
          filters: { name_or_code_start: search },
          pageNumber: currentPage,
          include
        }
        void cl[resource].list(params).then((res) => {
          setItems(res)
        })
      } else {
        const params: QueryParamsList = {
          pageNumber: currentPage,
          include
        }
        void cl[resource].list(params).then((res) => {
          setItems(res)
          setLoading(false)
        })
      }
    }
    // eslint-disable-next-line
  }, [search, accessToken, currentPage, resource])
  const handleClick = (item: Item): void => {
    setItemSelected(item)
  }
  return loading
    ? (
      <div className={styles.SkeletonContainer}>
        <SkeletonContainer>
          <SkeletonBodyText numberOfLines={5} />
        </SkeletonContainer>
      </div>
    )
    : (
      <Workbench>
        <Workbench.Content>
          <Flex
            padding='spacingXl'
            justifyContent='space-between'
            justifyItems='center'
            alignItems='center'
          >
            <Flex>
              <SearchIcon variant='muted' className={styles.SearchInputIcon} />
              <TextInput
                style={{
                  paddingLeft: '2.3rem',
                  marginLeft: '-1.8rem',
                  zIndex: 0
                }}
                name='search'
                type='text'
                value={search}
                width='large'
                placeholder='Search for an option...'
                onChange={(e) => setSearch(e.target.value)}
              />
            </Flex>
            <Stack>
              <Text fontColor='gray500'>
                Total result: {items?.meta.recordCount}
              </Text>
              <Button
                isDisabled={itemSelected == null}
                variant='primary'
                onClick={() => sdk.close(itemSelected)}
              >
                Save
              </Button>
            </Stack>
          </Flex>
          <ItemsList
            itemSelected={itemSelected}
            items={items}
            onClick={handleClick}
          />
          <div>
            <Flex
              padding='spacingXl'
              justifyContent='space-evenly'
              justifyItems='center'
              alignItems='center'
            >
              <Button
                variant='transparent'
                isDisabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                <ChevronLeftIcon />
                <ChevronLeftIcon />
              </Button>
              <Button
                variant='transparent'
                isDisabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ChevronLeftIcon />
              </Button>
              <Badge variant='secondary'>Current page: {currentPage}</Badge>
              <Button
                variant='transparent'
                isDisabled={currentPage === items?.meta.pageCount}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRightIcon />
              </Button>
              <Button
                variant='transparent'
                isDisabled={currentPage === items?.meta.pageCount}
                onClick={() => setCurrentPage(items?.meta.pageCount as number)}
              >
                <ChevronRightIcon />
                <ChevronRightIcon />
              </Button>
            </Flex>
          </div>
        </Workbench.Content>
      </Workbench>
    )
}

export default Dialog
