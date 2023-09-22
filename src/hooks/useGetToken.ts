import { useEffect, useState } from 'react'
import { authentication } from '@commercelayer/js-auth'
import Cookies from 'js-cookie'

export type Credentials = {
  clientId: string
  clientSecret: string
  slug: string
  scope?: string
  endpoint?: string
}

export default function useGetToken({
  clientId,
  clientSecret,
  scope = 'market:all',
  endpoint
}: Credentials) {
  const [token, setToken] = useState('')
  const [slug, ...domain] = endpoint != null ? new URL(endpoint as string).hostname.split('.') : []
  useEffect(() => {
    const getCookieToken = Cookies.get(`clAccessToken`)
    if (!getCookieToken && clientId != null && clientSecret != null && slug != null) {
      const getToken = async () => {
        const auth = await authentication('client_credentials', {
          clientId,
          clientSecret,
          slug,
          scope,
          domain: domain.join('.'),
        })
        Cookies.set(`clAccessToken`, auth?.accessToken as string, {
          // @ts-ignore
          expires: auth?.expires,
        })
        setToken(auth?.accessToken as string)
      }
      void getToken()
    } else {
      setToken(getCookieToken || '')
    }
  }, [clientId, slug, scope, clientSecret, domain])
  return token
}
