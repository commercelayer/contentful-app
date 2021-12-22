import { AppInstallationParameters } from '../components/ConfigScreen'

export function validateParameters(parameters: AppInstallationParameters) {
  if (parameters?.clientId.length < 1) {
    return 'Provide your Commerce Layer client ID.'
  }
  if (parameters?.endpoint.length < 1) {
    return 'Provide the Commerce Layer API endpoint.'
  }
  return null
}

export type Resource = 'skus' | 'bundles' | 'market' | 'sku_lists'

type ResourceObject = {
  value: Resource
  text: string
}

export const resources: ResourceObject[] = [
  { value: 'skus', text: 'Product' },
  { value: 'bundles', text: 'Bundle' },
  { value: 'market', text: 'Market' },
  { value: 'sku_lists', text: 'SKU list' },
]
