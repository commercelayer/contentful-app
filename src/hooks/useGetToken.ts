import React, { useEffect, useState } from 'react'
import { getSalesChannelToken } from '@commercelayer/js-auth'
import Cookies from 'js-cookie'

type Credentials = {
  clientId: string
  endpoint: string
  scope?: string
}

export default function useGetToken({
  clientId,
  endpoint,
  scope = 'market:all',
}: Credentials) {
  const [token, setToken] = useState('')
  useEffect(() => {
    const getCookieToken = Cookies.get(`clAccessToken`)
    if (!getCookieToken && clientId && endpoint) {
      const getToken = async () => {
        const auth = await getSalesChannelToken({
          clientId,
          endpoint,
          scope,
        })
        setToken(auth?.accessToken as string)
        Cookies.set(`clAccessToken`, auth?.accessToken as string, {
          // @ts-ignore
          expires: auth?.expires,
        })
      }
      getToken()
    } else {
      setToken(getCookieToken || '')
    }
  }, [clientId, endpoint, scope])
  return token
}
