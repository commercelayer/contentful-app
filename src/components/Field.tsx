import React, { ChangeEvent, useState } from 'react'
import { PlainClientAPI } from 'contentful-management'
import { FieldExtensionSDK } from '@contentful/app-sdk'
import { SelectField, Option } from '@contentful/forma-36-react-components'
import { Resource, resources } from '../utils'

interface FieldProps {
  sdk: FieldExtensionSDK
  cma: PlainClientAPI
}

const Field = ({ sdk }: FieldProps) => {
  const [resource, setResource] = useState<Resource>()
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
        },
      })
      .then(() => setResource(undefined))
  }
  return (
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
