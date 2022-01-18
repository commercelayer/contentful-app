import React, { useCallback, useState, useEffect } from 'react'
import { AppExtensionSDK } from '@contentful/app-sdk'
import { PlainClientAPI } from 'contentful-management'
import {
  Heading,
  Form,
  Paragraph,
  TextInput,
  Checkbox,
  FormControl,
} from '@contentful/f36-components'
import { Workbench } from '@contentful/f36-workbench'
import styles from './ConfigScreen.module.css'
import { Resource, validateParameters } from '../utils'
import { resources } from '../utils/index'

export interface AppInstallationParameters {
  clientId: string
  clientSecret: string
  endpoint: string
  availableResources: Resource[]
}

interface ConfigScreenProps {
  sdk: AppExtensionSDK
  cma: PlainClientAPI
}

const ConfigScreen = (props: ConfigScreenProps) => {
  const [parameters, setParameters] = useState<AppInstallationParameters>({
    clientId: '',
    clientSecret: '',
    endpoint: '',
    availableResources: [],
  })

  const onConfigure = useCallback(async () => {
    // This method will be called when a user clicks on "Install"
    // or "Save" in the configuration screen.
    // for more details see https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#register-an-app-configuration-hook
    const error = validateParameters(parameters)
    if (error) {
      props.sdk.notifier.error(error)
      return false
    }
    // Get current the state of EditorInterface and other entities
    // related to this app installation
    const currentState = await props.sdk.app.getCurrentState()

    return {
      // Parameters to be persisted as the app configuration.
      parameters,
      // In case you don't want to submit any update to app
      // locations, you can just pass the currentState as is
      targetState: currentState,
    }
  }, [parameters, props.sdk])

  useEffect(() => {
    // `onConfigure` allows to configure a callback to be
    // invoked when a user attempts to install the app or update
    // its configuration.
    props.sdk.app.onConfigure(() => onConfigure())
  }, [props.sdk, onConfigure])

  useEffect(() => {
    ;(async () => {
      // Get current parameters of the app.
      // If the app is not installed yet, `parameters` will be `null`.
      const currentParameters: AppInstallationParameters | null =
        await props.sdk.app.getParameters()
      if (currentParameters) {
        setParameters(currentParameters)
      }

      // Once preparation has finished, call `setReady` to hide
      // the loading screen and present the app to a user.
      props.sdk.app.setReady()
    })()
  }, [props.sdk])
  const handleChecked: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const checked = event.target.checked
    const name = event.target.name as Resource
    if (checked && !parameters?.availableResources?.includes(name)) {
      setParameters({
        ...parameters,
        availableResources: [...(parameters?.availableResources || []), name],
      })
    } else {
      const availableResources = parameters?.availableResources.filter(
        (v) => v !== name
      )
      setParameters({ ...parameters, availableResources })
    }
  }
  const Resources = resources.map((r) => (
    <Checkbox
      id={r.value}
      name={r.value}
      value={r.value}
      isChecked={parameters?.availableResources?.includes(r.value)}
      onChange={handleChecked}
    >
      {r.text}
    </Checkbox>
  ))
  return (
    <Workbench className={styles.Container}>
      <Workbench.Content>
        <Form>
          <Heading>About Commerce Layer</Heading>
          <Paragraph>
            <a
              href="https://commercelayer.io/"
              target="_blank"
              rel="noreferrer"
            >
              Commerce Layer
            </a>{' '}
            is a multi-market commerce API and order management system that lets
            you add global shopping capabilities to any website, mobile app,
            chatbot, wearable, voice, or IoT device, with ease. Compose your
            stack with the best-of-breed tools you already mastered and love.
            Make any experience shoppable, anywhere, through a blazing-fast,
            enterprise-grade, and secure API.
          </Paragraph>
          <hr />
          <Heading>Configuration</Heading>
          <FormControl isRequired isInvalid={parameters?.clientId === ''}>
            <FormControl.Label>Client ID</FormControl.Label>
            <TextInput
              name="clientId"
              id="clientId"
              value={parameters?.clientId}
              onChange={(e) =>
                setParameters({ ...parameters, clientId: e.target.value })
              }
            />
            <FormControl.HelpText>
              Provide your application Client ID
            </FormControl.HelpText>
          </FormControl>
          <FormControl isRequired isInvalid={parameters?.clientSecret === ''}>
            <FormControl.Label>Client Secret</FormControl.Label>
            <TextInput
              name="clientSecret"
              id="clientSecret"
              value={parameters?.clientSecret}
              onChange={(e) =>
                setParameters({ ...parameters, clientSecret: e.target.value })
              }
            />
            <FormControl.HelpText>
              Provide your application Client Secret
            </FormControl.HelpText>
          </FormControl>
          <FormControl isRequired isInvalid={parameters?.endpoint === ''}>
            <FormControl.Label>Endpoint</FormControl.Label>
            <TextInput
              name="endpoint"
              id="endpoint"
              value={parameters?.endpoint}
              onChange={(e) =>
                setParameters({ ...parameters, endpoint: e.target.value })
              }
            />
            <FormControl.HelpText>
              Provide your application endpoint
            </FormControl.HelpText>
          </FormControl>
          <Heading>Available Resources</Heading>
          <Paragraph>
            Select one or more resources to show in your field editor.
          </Paragraph>
          {Resources}
        </Form>
      </Workbench.Content>
    </Workbench>
  )
}

export default ConfigScreen
