import { AppInstallationParameters } from '../components/ConfigScreen'

export function validateParameters(parameters: AppInstallationParameters) {
  if (parameters?.clientId.length < 1) {
    return 'Provide your Commerce Layer Client ID.'
  }
  if (parameters?.clientSecret.length < 1) {
    return 'Provide your Commerce Layer Client Secret.'
  }
  if (parameters?.endpoint.length < 1) {
    return 'Provide the Commerce Layer API endpoint.'
  }
  return null
}

export type Resource = 'skus' | 'bundles' | 'markets' | 'sku_lists'

type ResourceObject = {
  value: Resource
  text: string
}

export const resources: ResourceObject[] = [
  { value: 'skus', text: 'Product' },
  { value: 'bundles', text: 'Bundle' },
  { value: 'markets', text: 'Market' },
  { value: 'sku_lists', text: 'SKU list' },
]

type ReturnObj = {
  organization: string
  domain: string
}

export function getOrganizationSlug<E extends string>(endpoint: E): ReturnObj {
  const org = {
    organization: '',
    domain: 'commercelayer.io',
  }
  if (endpoint.search('commercelayer.io') === -1)
    org.domain = 'commercelayer.co'
  org.organization = endpoint
    .replace('https://', '')
    .replace(`.${org.domain}`, '')
  return org
}
