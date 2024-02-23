import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { createClient } from 'contentful-management'

import {
  init,
  locations,
} from '@contentful/app-sdk'
import type { ConfigAppSDK, DialogAppSDK, EditorAppSDK, FieldAppSDK, KnownAppSDK, PageAppSDK, SidebarAppSDK } from '@contentful/app-sdk'
import '@contentful/forma-36-fcss/dist/styles.css'
import '@contentful/forma-36-tokens/dist/css/index.css'
import './index.css'
import { GlobalStyles } from '@contentful/f36-components'
import ConfigScreen from './components/ConfigScreen'
import EntryEditor from './components/EntryEditor'
import Page from './components/Page'
import Sidebar from './components/Sidebar'
import Field from './components/Field'
import Dialog from './components/Dialog'
import LocalhostWarning from './components/LocalhostWarning'

if (process.env.NODE_ENV === 'development' && window.self === window.top) {
  // You can remove this if block before deploying your app
  const root = document.getElementById('root')

  render(<LocalhostWarning />, root)
} else {
  init((sdk: KnownAppSDK) => {
    const root = document.getElementById('root')
    // Creating a CMA client allows you to use the contentful-management library
    // within your app. See the contentful-management documentation at https://contentful.github.io/contentful-management.js/contentful-management/latest/
    // to learn what is possible.
    const cma = createClient(
      { apiAdapter: sdk.cmaAdapter },
      {
        type: 'plain',
        defaults: {
          environmentId: sdk.ids.environment,
          spaceId: sdk.ids.space,
        },
      }
    )

    // All possible locations for your app
    // Feel free to remove unused locations
    // Dont forget to delete the file too :)
    const ComponentLocationSettings = [
      {
        location: locations.LOCATION_APP_CONFIG,
        component: <ConfigScreen cma={cma} sdk={sdk as ConfigAppSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_FIELD,
        component: <Field cma={cma} sdk={sdk as FieldAppSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_EDITOR,
        component: <EntryEditor cma={cma} sdk={sdk as EditorAppSDK} />,
      },
      {
        location: locations.LOCATION_DIALOG,
        component: <Dialog cma={cma} sdk={sdk as DialogAppSDK} />,
      },
      {
        location: locations.LOCATION_ENTRY_SIDEBAR,
        component: <Sidebar cma={cma} sdk={sdk as SidebarAppSDK} />,
      },
      {
        location: locations.LOCATION_PAGE,
        component: <Page cma={cma} sdk={sdk as PageAppSDK} />,
      },
    ]

    // Select a component depending on a location in which the app is rendered.
    ComponentLocationSettings.forEach((componentLocationSetting) => {
      if (sdk.location.is(componentLocationSetting.location)) {
        render(
          <StrictMode>
            <GlobalStyles />
            {componentLocationSetting.component}
          </StrictMode>,
          root
        )
      }
    })
  })
}
