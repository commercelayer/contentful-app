import { useCallback, useState, useEffect } from 'react'
import { AppExtensionSDK } from '@contentful/app-sdk'
import { PlainClientAPI } from 'contentful-management'
import {
  Heading,
  Form,
  Paragraph,
  TextInput,
  FormControl,
} from '@contentful/f36-components'
import { styles } from './ConfigScreen.styles'
import { checkCredentials, validateParameters } from '../utils'
import type { Credentials } from '../hooks/useGetToken'

export interface AppInstallationParameters {
  clientId?: string
  clientSecret?: string
  endpoint?: string
}

interface ConfigScreenProps {
  sdk: AppExtensionSDK
  cma: PlainClientAPI
}

const ConfigScreen = (props: ConfigScreenProps) => {
  const [parameters, setParameters] = useState<AppInstallationParameters>({})

  const onConfigure = useCallback(async () => {
    // This method will be called when a user clicks on "Install"
    // or "Save" in the configuration screen.
    // for more details see https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#register-an-app-configuration-hook
    const error = validateParameters(parameters)
    if (error) {
      props.sdk.notifier.error(error)
      return false
    }
    const credentialsError = await checkCredentials(parameters as Credentials)
    if (credentialsError) {
      props.sdk.notifier.error(credentialsError as any)
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
  console.log('parameters', parameters)
  return (
    <div className={styles.background}>
      <div className={styles.body}>
        <Heading>About Commerce Layer</Heading>
        <Paragraph>
          <a href="https://commercelayer.io/" target="_blank" rel="noreferrer">
            Commerce Layer
          </a>{' '}
          is a multi-market commerce API and order management system that lets
          you add global shopping capabilities to any website, mobile app,
          chatbot, wearable, voice, or IoT device, with ease. Compose your stack
          with the best-of-breed tools you already mastered and love. Make any
          experience shoppable, anywhere, through a blazing-fast,
          enterprise-grade, and secure API.
        </Paragraph>

        <hr className={styles.splitter} />

        <Heading>Configuration</Heading>
        <Form>
          <FormControl isRequired isInvalid={parameters?.clientId === ''}>
            <FormControl.Label>Client ID</FormControl.Label>
            <TextInput
              name="clientId"
              id="clientId"
              placeholder="IdL901bQHhAX....."
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
              placeholder="TWRrof0VCwZ......"
              value={parameters?.clientSecret}
              onChange={(e) =>
                setParameters({
                  ...parameters,
                  clientSecret: e.target.value,
                })
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
              placeholder="https://your-domain.commercelayer.io"
              value={parameters?.endpoint}
              onChange={(e) =>
                setParameters({ ...parameters, endpoint: e.target.value })
              }
            />
            <FormControl.HelpText>
              Provide your application endpoint
            </FormControl.HelpText>
          </FormControl>
        </Form>
      </div>
      <div className={styles.icon}>
        <img src="assets/commercelayer-glyph-black.png" alt="App logo" />
      </div>
    </div>
  )
}

export default ConfigScreen
