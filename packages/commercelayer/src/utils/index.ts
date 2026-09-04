import { authenticate, jwtDecode } from '@commercelayer/js-auth'
import type { AppInstallationParameters } from '../components/ConfigScreen'
import type { Credentials } from '../hooks/useGetToken'
import { Item } from '../components/ItemsList'

export function validateParameters(parameters: AppInstallationParameters) {
  if (!parameters?.clientId || parameters?.clientId.length < 1) {
    return 'Provide your Commerce Layer Client ID.'
  }
  if (!parameters?.clientSecret || parameters?.clientSecret.length < 1) {
    return 'Provide your Commerce Layer Client Secret.'
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
    text: 'SKU',
    helpText: 'SKUs describe specific product variations that are being sold.',
  },
  {
    value: 'bundles',
    text: 'Bundle',
    helpText:
      'Bundles describe a set of specific products that are being sold.',
  },
  { value: 'markets', text: 'Market' },
  { value: 'sku_lists', text: 'SKU list' },
]

export function getValue<I extends Record<string, any>>(item: I): string {
  switch (item.type) {
    case 'skus':
      return item.code
    case 'bundles':
      return item.code
    case 'markets':
      return `${item.number}`
    default:
      return item.id
  }
}

type FilterKey = 'code' | 'number' | 'id'

type FiltersObj = {
  [K in FilterKey as `${K}_eq`]?: string
}

export function getFilters<I extends { type: Resource; value: string }>(
  item: I
): FiltersObj {
  switch (item.type) {
    case 'skus':
      return { code_eq: item.value }
    case 'bundles':
      return { code_eq: item.value }
    case 'markets':
      return { number_eq: item.value }
    default:
      return { id_eq: item.value }
  }
}

export async function checkCredentials(credentials: Credentials) {
  try {
    await authenticate('client_credentials', credentials)
    return null
  } catch (error: any) {
    return error.message
  }
}

export function getDashboardLink(accessToken: string, item: Item | undefined): string | null {
  console.log(accessToken)
  const { payload } = jwtDecode(accessToken)
  if (!('organization' in payload)) {
    throw new Error('Invalid access token: missing organization data.')
  }
  if (!item) {
    return null
  }
  const { hostname } = new URL(payload.iss)
  const slug = payload.organization.slug
  const environment = payload.test ? 'test' : 'live'
  const domain = hostname.split('.').slice(-2).join('.')

  let dashboardLink = `https://dashboard.${domain}/`
  if (item.type === 'markets') {
    dashboardLink += `organizations/${slug}/settings/${item.type}/${item.id}`
  } else {
    dashboardLink += `${environment}/${slug}/apps/${item.type}/list/${item.id}`
  }
  return dashboardLink
}
