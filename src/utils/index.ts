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
  if (parameters?.availableResources.length < 1) {
    return 'Select one or more resources to show.'
  }
  return null
}

export type Resource = 'skus' | 'bundles' | 'markets' | 'sku_lists'

type ResourceObject = {
  value: Resource
  text: string
  helpText?: string
}

export const resources: ResourceObject[] = [
  {
    value: 'skus',
    text: 'SKUs',
    helpText: 'SKUs describe specific product variations that are being sold.',
  },
  {
    value: 'bundles',
    text: 'Bundles',
    helpText:
      'Bundles describe a set of specific products that are being sold.',
  },
  { value: 'markets', text: 'Markets' },
  { value: 'sku_lists', text: 'SKU lists' },
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

export function getValue<I extends Record<string, any>>(
  item: I
): Record<string, string> {
  const obj = {
    id: item.id,
  } as Record<string, string>
  switch (item.type) {
    case 'skus':
      obj.sku_code = item.sku_code
      break
    case 'bundles':
      obj.bundle_code = item.bundle_code
      break
    case 'markets':
      obj.number = item.number
      break
  }
  return obj
}
