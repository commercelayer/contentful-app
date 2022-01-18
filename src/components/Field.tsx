import React, { ChangeEvent, useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { FieldExtensionSDK } from '@contentful/app-sdk'
import {
  Card,
  Paragraph,
  SectionHeading,
  Asset,
  Flex,
  Stack,
  Menu,
  Button,
  Text,
  Popover,
} from '@contentful/f36-components'
import {
  ExternalLinkIcon,
  CloseIcon,
  PlusIcon,
  ChevronDownIcon,
} from '@contentful/f36-icons'
import { Portal } from '@contentful/f36-utils'
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
  const [resource, setResource] = useState<Resource>()
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<Item | undefined>()
  const credentials: any = sdk.parameters.installation
  const availableResources = credentials?.availableResources as Resource[]
  const accessToken = useGetToken({ ...credentials })
  const { endpoint } = credentials
  const org = getOrganizationSlug(endpoint)
  useEffect(() => {
    if (!currentItem && accessToken && sdk.field.getValue()) {
      const { id, type } = JSON.parse(sdk.field.getValue()) as {
        type: Resource
        id: string
      }
      if (id && type) {
        const cl = clSdk({ accessToken, ...org })
        cl[type].retrieve(id).then((res) => {
          setCurrentItem(res)
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
    const height = !isOpen ? 100 * items.length : 150
    setIsOpen(!isOpen)
    sdk.window.updateHeight(height)
  }
  const handleClick = (val: Resource) => {
    setResource(val)
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
          sdk.field.setValue(value)
        } else {
          setResource(undefined)
        }
        sdk.field.onValueChanged(() => {})
      })
  }
  console.log(`currentItem`, currentItem)
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
            <Text
              fontColor="gray900"
              fontWeight="fontWeightMedium"
              fontSize="fontSizeL"
            >
              {currentItem?.name}{' '}
              {currentItem?.type !== 'skus' ? `(${currentItem.type})` : ''}
            </Text>
            <Text
              fontColor="gray500"
              fontWeight="fontWeightMedium"
              fontSize="fontSizeM"
            >
              {currentItem?.code}
            </Text>
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
              setResource(undefined)
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
      {/* <Select
        name="select-resource"
        id="select-resource"
        onChange={handleChange}
        value={resource || ''}
        >
        <Select.Option value="" isDisabled>
        Please select a resource...
        </Select.Option>
        {options}
      </Select> */}
    </Card>
  )
}

export default Field
