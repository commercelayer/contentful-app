import { useEffect, useState } from 'react'
import { authenticate } from '@commercelayer/js-auth'
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
  clientSecret
}: Credentials) {
  const [token, setToken] = useState('')
  useEffect(() => {
    const getCookieToken = Cookies.get(`clAuthAccessToken`)
    if (!getCookieToken && clientId != null && clientSecret != null) {
      const domain = process.env.NODE_ENV !== 'development' ? 'commercelayer.io' : 'commercelayer.co'
      const getToken = async () => {
        const auth = await authenticate('client_credentials', {
          clientId,
          clientSecret,
          domain,
        })
        Cookies.set(`clAuthAccessToken`, auth?.accessToken as string, {
          expires: auth?.expires,
        })
        setToken(auth?.accessToken as string)
      }
      void getToken()
    } else {
      setToken(getCookieToken || '')
    }
  }, [clientId, clientSecret])
  return token
}
