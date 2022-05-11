import { useEffect, useState } from 'react'
import { getIntegrationToken } from '@commercelayer/js-auth'
import Cookies from 'js-cookie'

export type Credentials = {
  clientId: string
  clientSecret: string
  endpoint: string
  scope?: string
}

export default function useGetToken({
  clientId,
  endpoint,
  clientSecret,
  scope = 'market:all',
}: Credentials) {
  const [token, setToken] = useState('')
  useEffect(() => {
    const getCookieToken = Cookies.get(`clAccessToken`)
    if (!getCookieToken && clientId && clientSecret && endpoint) {
      const getToken = async () => {
        const auth = await getIntegrationToken({
          clientId,
          clientSecret,
          endpoint,
          scope,
        })
        Cookies.set(`clAccessToken`, auth?.accessToken as string, {
          // @ts-ignore
          expires: auth?.expires,
        })
        setToken(auth?.accessToken as string)
      }
      getToken()
    } else {
      setToken(getCookieToken || '')
    }
  }, [clientId, endpoint, scope, clientSecret])
  return token
}
