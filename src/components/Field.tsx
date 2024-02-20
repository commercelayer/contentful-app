import { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { FieldAppSDK } from '@contentful/app-sdk'
import {
  Card,
  Asset,
  Flex,
  Stack,
  Button,
  Text
} from '@contentful/f36-components'
import { ExternalLinkIcon, CloseIcon, PlusIcon } from '@contentful/f36-icons'
import {
  getFilters,
  getOrganizationSlug,
  getValue,
  Resource,
  resources
} from '../utils'
import { Item } from './ItemsList'
import styles from './Field.module.css'
import useGetToken, { Credentials } from '../hooks/useGetToken'
import clSdk, { Market } from '@commercelayer/sdk'
import tokens from '@contentful/forma-36-tokens'

interface FieldProps {
  sdk: FieldAppSDK
  cma: PlainClientAPI
}

const Field = ({ sdk }: FieldProps): JSX.Element => {
  const [currentItem, setCurrentItem] = useState<Item | undefined>()
  const credentials = sdk.parameters.installation as Credentials
  const accessToken = useGetToken(credentials)
  const { endpoint } = credentials
  const org = endpoint != null ? getOrganizationSlug(endpoint) : null
  const { resource: type } = sdk.parameters.instance as { resource: Resource }
  const [resource] = resources.filter((resource) => resource.value === type)
  useEffect(() => {
    const value = sdk.field.getValue()
    if ((currentItem == null) && accessToken !== '' && value != null && org != null) {
      const cl = clSdk({ accessToken, ...org })
      const include =
        type === 'markets'
          ? ['price_list', 'inventory_model', 'merchant']
          : type === 'sku_lists'
            ? ['sku_list_items']
            : []
      const filters = getFilters({ type, value })
      void cl[type].list({ include, filters }).then((res) => {
        if (type === 'markets') {
          // @ts-expect-error Force type Market
          const [item] = res.filter((i: Market) => i.number === Number(value))
          if (item != null) {
            setCurrentItem(item)
          }
        } else {
          setCurrentItem(res.first())
        }
      })
    }
  }, [sdk.field, type, currentItem, accessToken, org])
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  const handleClick = (val: Resource): void => {
    void sdk.dialogs
      .openCurrentApp({
        position: 'center',
        title: 'Select an option',
        width: 'fullWidth',
        shouldCloseOnOverlayClick: true,
        shouldCloseOnEscapePress: true,
        minHeight: 800,
        parameters: {
          resource: val,
          accessToken
        }
      })
      .then((itemSelected) => {
        if (itemSelected != null) {
          setCurrentItem(itemSelected)
          const value = getValue(itemSelected)
          void sdk.field.setValue(value)
        }
        sdk.field.onValueChanged(() => { })
      }).catch((e) => {
        console.error('error', e)
      })
  }
  const condition = (currentItem != null) && ['skus'].includes(currentItem?.type)
  const title = condition
    ? (
      <Text fontColor='gray900' fontWeight='fontWeightMedium'>
        {currentItem?.name}
      </Text>
    )
    : (
      <Text fontColor='gray900' fontWeight='fontWeightMedium'>
        {currentItem?.name}{' '}
        <Text style={{ textTransform: 'capitalize' }}>
          (
          {currentItem?.type
            .slice(0, currentItem?.type.length - 1)
            .replace('_', ' ')}
          )
        </Text>
      </Text>
    )
  const content = condition
    ? (
      <Text
        fontColor='gray500'
        fontSize='fontSizeS'
        fontWeight='fontWeightMedium'
      >
        {currentItem?.code}
      </Text>
    )
    : (
      <Text
        fontColor='gray500'
        fontSize='fontSizeS'
        fontWeight='fontWeightMedium'
      >
        {[
          currentItem?.code,
          currentItem?.merchant?.name,
          currentItem?.inventory_model?.name,
          currentItem?.price_list?.name,
          currentItem?.description,
          currentItem?.skus_count != null ? `${currentItem?.skus_count} SKUs` : undefined,
          currentItem?.sku_list_items?.length != null
            ? `${currentItem?.sku_list_items?.length} SKUs`
            : undefined
        ]
          .filter((i) => i !== '' && i != null)
          .join(', ')}
      </Text>
    )
  return (currentItem != null)
    ? (
      <Card>
        <Flex
          justifyContent='space-between'
          flexWrap='nowrap'
          flexDirection='row'
        >
          <Stack flexDirection='row' alignItems='center'>
            {currentItem?.image_url != null
              ? (
                <Asset
                  className={styles.CardImage}
                  src={currentItem?.image_url}
                  type='image'
                />
              )
              : null}
            <Stack flexDirection='column' alignItems='flex-start'>
              {title}
              {content}
            </Stack>
          </Stack>
          <div>
            <a
              className={styles.CardIcon}
              title='External link'
              target='_blank'
              href={`${endpoint}/admin/${currentItem.type === 'markets' ? 'settings/' : ''
                }${currentItem.type}/${currentItem.id}/edit`}
              rel='noreferrer'
            >
              <ExternalLinkIcon cursor='pointer' variant='muted' />
            </a>
            <CloseIcon
              cursor='pointer'
              variant='muted'
              onClick={() => {
                setCurrentItem(undefined)
                void sdk.field.setValue(undefined)
                sdk.field.onValueChanged(() => { })
              }}
            />
          </div>
        </Flex>
      </Card>
    )
    : (
      <Card
        style={{
          padding: tokens.spacingXl,
          border: `1px dashed ${tokens.gray500}`
        }}
      >
        <Stack
          style={{ zIndex: tokens.zIndexNotification }}
          flexDirection='column'
          alignItems='center'
        >
          <Button onClick={() => handleClick(type)}>
            <Stack>
              <PlusIcon variant='muted' />
              <Text fontWeight='fontWeightDemiBold'>Add {resource?.text ?? ''}</Text>
            </Stack>
          </Button>
        </Stack>
      </Card>
    )
}

export default Field
