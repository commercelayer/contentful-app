import React, { ChangeEvent, useEffect, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { FieldExtensionSDK } from '@contentful/app-sdk'
import {
  SelectField,
  Option,
  Card,
  Paragraph,
  SectionHeading,
  Typography,
  Asset,
  Flex,
  Icon,
} from '@contentful/forma-36-react-components'
import { getOrganizationSlug, Resource, resources } from '../utils'
import { Item } from './ItemsList'
import styles from './Field.module.css'
import useGetToken from '../hooks/useGetToken'
import clSdk from '@commercelayer/sdk'

interface FieldProps {
  sdk: FieldExtensionSDK
  cma: PlainClientAPI
}

const Field = ({ sdk }: FieldProps) => {
  const [resource, setResource] = useState<Resource>()
  const [currentItem, setCurrentItem] = useState<Item | undefined>()
  const credentials: any = sdk.parameters.installation
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
  const options = resources.map(({ value, text }, i) => {
    return (
      <Option key={i} value={value}>
        {text}
      </Option>
    )
  })
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value as Resource
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
          const value = JSON.stringify({
            id: itemSelected.id,
            type: itemSelected.type,
          })
          sdk.field.setValue(value)
        } else {
          setResource(undefined)
        }
        sdk.field.onValueChanged(() => {})
      })
  }
  return currentItem ? (
    <Card>
      <Flex
        justifyContent="space-between"
        flexWrap="nowrap"
        flexDirection="row"
      >
        <Flex
          justifyContent="normal"
          flexWrap="nowrap"
          flexDirection="row"
          alignItems="center"
        >
          {currentItem?.image_url ? (
            <Asset
              className={styles.CardImage}
              src={currentItem?.image_url}
              type="image"
            />
          ) : null}
          <Typography>
            <SectionHeading>{currentItem?.name}</SectionHeading>
            <Paragraph className={styles.CardParagraph}>
              {currentItem?.code}
            </Paragraph>
          </Typography>
        </Flex>
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
            <Icon cursor="pointer" color="muted" icon="ExternalLink" />
          </a>
          <Icon
            cursor="pointer"
            color="muted"
            icon="Close"
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
    <>
      <SelectField
        name="select-resource"
        id="select-resource"
        labelText="Commerce Layer resource"
        onChange={handleChange}
        value={resource || ''}
      >
        <Option value="" disabled>
          Please select a resource...
        </Option>
        {options}
      </SelectField>
    </>
  )
}

export default Field
