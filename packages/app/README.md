# Commerce Layer Contentful App

The Commerce Layer app lets content editors easily link Commerce Layer resources to content data in the Contentful dashboard. Products that are linked from Commerce Layer can be easily previewed via the Contentful web app, making it easier for content editors to use the most recently uploaded products across catalogs and sites.

[![Install to Contentful](https://www.ctfstatic.com/button/install-small.svg)](https://app.contentful.com/deeplink?link=apps&id=commercelayer&referrer=commercelayer)

## What is Commerce Layer?

[Commerce Layer](https://commercelayer.io) is a multi-market commerce API and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, wearable, voice, or IoT device, with ease. Compose your stack with the best-of-breed tools you already mastered and love. Make any experience shoppable, anywhere, through a blazing-fast, enterprise-grade, and secure API.

## Table of contents

- [App Features](#features)
- [Installation Guide](#installation-guide)
- [Getting started](#getting-started)
- [Contributors guide](#contributors-guide)
- [Help and support](#need-help)
- [License](#license)

## App Features

The current version of this app allows you to:

- Full-text search for products in Contentful
- Preview selected products in Contentful
- Link one or more SKUs inside Contentful
- Link one or more SKU lists inside Contentful
- Link one or more markets inside Contentful
- Link one or more bundles inside Contentful

![Commerce Layer Contentful App GIF demo](./public/assets/demo.gif)

## Installation Guide

1. Create a [Contentful account](https://www.contentful.com/sign-up) if you haven't yet and set up a new space for your project.

2. Create a [Commerce Layer account](https://dashboard.commercelayer.io/sign_up) if you haven't already.

3. If you haven't already, kindly follow this [onboarding guide](https://docs.commercelayer.io/developers) to learn how to set up your Commerce Layer organization and seed with demo data.

4. In the Commerce Layer dashboard, click on the **Integrations** tab and create an application with the name: `Contentful` and role: `Read only`.

5. Upon successful creation, you will get a `CLIENT ID`, `CLIENT SECRET`, and `BASE ENDPOINT` credentials. Kindly remember to save these, as you'll need them later.

6. Visit [this page](https://contentful.com/marketplace/app/commercelayer) and click on the "Install now" button.

7. Choose where to install the app by selecting a **Space** and **Environment**.

8. You will be redirected to a new page; now click on the "Install" button to proceed.

9. You will be redirected to a new page; now enter your previously saved Commerce Layer `CLIENT ID`, `CLIENT SECRET`, and `ENDPOINT` credentials to complete the installation.

10. Now, you can begin using the Commerce Layer contentful app!

## Getting Started

Kindly follow the steps below to set up the [Commerce Layer contentful app](https://contentful.com/marketplace/app/commercelayer).

1. Click on the "Content model" tab and add a new content type (e.g., Product or Category).

2. Add a new `Text` field, enter a name (e.g., Product SKU) and select the type `Short text, exact search`.

3. Click on the "Create and configure" button.

4. Click on the "Appearance" tab, select the Commerce Layer app, select the right resource you want to fetch (either SKUs, SKU Lists, Bundles, or Markets), and click on the "Confirm" button.

5. Use the same steps above to create all the fields you want, and click on the "Save" button to save the content type.

6. Create new content to test for each resource based on the created content types.

7. Search, select, and link the right resource from Commerce Layer to the content field.

8. Done!

![A screenshot of the Commerce Layer contentful app in use](./public/assets/screenshots/cl-app-01.png)

![A screenshot of the Commerce Layer contentful app in use](./public/assets/screenshots/cl-app-02.png)

![A screenshot of the Commerce Layer contentful app in use](./public/assets/screenshots/cl-app-03.png)

![A screenshot of the Commerce Layer contentful app in use](./public/assets/screenshots/cl-app-04.png)

![A screenshot of the Commerce Layer contentful app in use](./public/assets/screenshots/cl-app-05.png)

## Contributors guide

This project was bootstrapped with [Create Contentful App](https://github.com/contentful/create-contentful-app) and uses [Reactjs](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [App SDK](https://www.contentful.com/developers/docs/extensibility/app-framework/sdk/), and [Forma36](https://github.com/contentful/forma-36) design system. In the project directory, you can perform the following actions using these commands:

1. Create or update your app definition in Contentful, and run the app in development mode in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

```bash
npm start
```

2. Build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run build
```

3. Upload the build folder to Contentful and create a bundle that is automatically activated. The command guides you through the [deployment process](https://www.contentful.com/developers/docs/extensibility/app-framework/create-contentful-app/#deploy-with-contentful) and asks for all required arguments.

```bash
npm run upload
```

4. Similar to `npm run upload`, it will upload your app to Contentful and activate it. The only difference is that with this command all required arguments are read from the environment variables. For this command to work, the following environment variables must be set: 

- `CONTENTFUL_ORG_ID` - The ID of your organization
- `CONTENTFUL_APP_DEF_ID` - The ID of the app to which to add the bundle
- `CONTENTFUL_ACCESS_TOKEN` - A personal [access token](https://www.contentful.com/developers/docs/references/content-management-api/#/reference/personal-access-tokens)

```bash
npm run upload-ci
```

---

To contribute to this project, kindly follow the steps below:

1. Fork [this repository](https://github.com/commercelayer/contentful-app) (you can learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/commercelayer/contentful-app.git && cd commercelayer/contentful-app
```

3. Set your environment with a `.env` file using `.env.sample` as base.

4. Install all required packages using the command `npm install`.

5. Run the development server on `localhost:3000` using the command `npm start`.

6. Contentful Apps need to run inside the Contentful web app to function properly. Install the app into a space and render your app into one of the available locations.

7. Create an [issue](https://github.com/commercelayer/contentful-app/issues) to discuss feature ideas or improvements before working on them.

8. Make your changes, test them, and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

9. Someone will attend to your pull request and provide some feedback.

## Need help?

1. Join [Commerce Layer's Slack community](https://slack.commercelayer.app).

2. Create an [issue](https://github.com/commercelayer/commercelayer-react-checkout/issues) in this repository.

3. Ping us [on Twitter](https://twitter.com/commercelayer).

## License

This repository is published under the [MIT](LICENSE) license.
