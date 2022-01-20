import React, { useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { FieldExtensionSDK } from '@contentful/app-sdk'
import {
  Card,
  Asset,
  Flex,
  Stack,
  Menu,
  Button,
  Text,
} from '@contentful/f36-components'
import {
  ExternalLinkIcon,
  CloseIcon,
  PlusIcon,
  ChevronDownIcon,
} from '@contentful/f36-icons'
import { getOrganizationSlug, getValue, Resource, resources } from '../utils'
import { Item } from './ItemsList'
import styles from './Field.module.css'
import useGetToken from '../hooks/useGetToken'
import clSdk from '@commercelayer/sdk'
import tokens from '@contentful/forma-36-tokens'

interface FieldProps {
  sdk: FieldExtensionSDK
  cma: PlainClientAPI
}

const Field = ({ sdk }: FieldProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<Item | undefined>()
  const credentials: any = sdk.parameters.installation
  const availableResources = credentials?.availableResources as Resource[]
  const accessToken = useGetToken({ ...credentials })
  const { endpoint } = credentials
  const org = getOrganizationSlug(endpoint)
  useEffect(() => {
    const value = sdk.field.getValue()
    if (!currentItem && accessToken && value) {
      const cl = clSdk({ accessToken, ...org })
      if (value.search('{') !== -1) {
        const { id, type } = JSON.parse(value) as {
          type: Resource
          id: string
        }
        const include =
          type === 'markets'
            ? ['price_list', 'inventory_model', 'merchant']
            : type === 'sku_lists'
            ? ['sku_list_items']
            : []
        cl[type].retrieve(id, { include }).then((res) => {
          setCurrentItem(res)
        })
      } else if (value) {
        cl.skus
          .list({
            filters: { sku_code_eq: value },
          })
          .then((res) => {
            setCurrentItem(res.first())
          })
      }
    }
  }, [sdk.field, currentItem, accessToken, org])
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  const items = resources
    .filter(({ value }) => availableResources.includes(value))
    .map(({ value, text }, i) => {
      return (
        <Menu.Item key={i} value={value} onClick={() => handleClick(value)}>
          {text}
        </Menu.Item>
      )
    })
  const handleOpen = () => {
    const height = !isOpen ? 100 + items.length * 40 : 150
    setIsOpen(!isOpen)
    sdk.window.updateHeight(height)
  }
  const handleClick = (val: Resource) => {
    sdk.dialogs
      .openCurrentApp({
        position: 'center',
        title: `Select an option`,
        width: 'fullWidth',
        shouldCloseOnOverlayClick: true,
        shouldCloseOnEscapePress: true,
        minHeight: 800,
        parameters: {
          resource: val,
          accessToken,
        },
      })
      .then((itemSelected) => {
        if (itemSelected) {
          setCurrentItem(itemSelected)
          const value = getValue(itemSelected)
          const objValue = JSON.stringify({
            ...value,
            type: itemSelected.type,
          })
          sdk.field.setValue(objValue)
        }
        sdk.field.onValueChanged(() => {})
      })
  }
  const condition = currentItem && ['skus'].includes(currentItem?.type)
  const title = condition ? (
    <Text fontColor="gray900" fontWeight="fontWeightMedium">
      {currentItem?.name}
    </Text>
  ) : (
    <Text fontColor="gray900" fontWeight="fontWeightMedium">
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
  const content = condition ? (
    <Text
      fontColor="gray500"
      fontSize="fontSizeS"
      fontWeight="fontWeightMedium"
    >
      {currentItem?.code}
    </Text>
  ) : (
    <Text
      fontColor="gray500"
      fontSize="fontSizeS"
      fontWeight="fontWeightMedium"
    >
      {[
        currentItem?.code,
        currentItem?.merchant?.name,
        currentItem?.inventory_model?.name,
        currentItem?.price_list?.name,
        currentItem?.description,
        currentItem?.skus_count ? `${currentItem?.skus_count} SKUs` : undefined,
        currentItem?.sku_list_items?.length
          ? `${currentItem?.sku_list_items?.length} SKUs`
          : undefined,
      ]
        .filter((i) => i !== undefined)
        .join(', ')}
    </Text>
  )
  return currentItem ? (
    <Card>
      <Flex
        justifyContent="space-between"
        flexWrap="nowrap"
        flexDirection="row"
      >
        <Stack flexDirection="row" alignItems="center">
          {currentItem?.image_url ? (
            <Asset
              className={styles.CardImage}
              src={currentItem?.image_url}
              type="image"
            />
          ) : null}
          <Stack flexDirection="column" alignItems="flex-start">
            {title}
            {content}
          </Stack>
        </Stack>
        <div>
          <a
            className={styles.CardIcon}
            title="External link"
            target="_blank"
            href={`${endpoint}/admin/${
              currentItem.type === 'markets' ? 'settings/' : ''
            }${currentItem.type}/${currentItem.id}/edit`}
            rel="noreferrer"
          >
            <ExternalLinkIcon cursor="pointer" variant="muted" />
          </a>
          <CloseIcon
            cursor="pointer"
            variant="muted"
            onClick={() => {
              setCurrentItem(undefined)
              sdk.field.setValue(undefined)
              sdk.field.onValueChanged(() => {})
            }}
          />
        </div>
      </Flex>
    </Card>
  ) : (
    <Card
      style={{
        padding: tokens.spacingXl,
        border: `1px dashed ${tokens.gray500}`,
      }}
    >
      <Stack
        style={{ zIndex: tokens.zIndexNotification }}
        flexDirection="column"
        alignItems="center"
      >
        <Menu isOpen={isOpen} onOpen={handleOpen} onClose={handleOpen}>
          <Menu.Trigger>
            <Button>
              <Stack>
                <PlusIcon variant="muted" />
                <Text fontWeight="fontWeightDemiBold">Add resource</Text>
                <ChevronDownIcon variant="muted" />
              </Stack>
            </Button>
          </Menu.Trigger>
          <Menu.List>{items}</Menu.List>
        </Menu>
      </Stack>
    </Card>
  )
}

export default Field
