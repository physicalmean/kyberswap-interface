import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex } from 'rebass'

import Loader from 'components/LocalLoader'
import useParsedQueryString from 'hooks/useParsedQueryString'
import { useSessionInfo } from 'state/authen/hooks'
import { getLoginRedirectUrl, removeLoginRedirectUrl } from 'utils/redirectUponLogin'
import { queryStringToObject } from 'utils/string'

const VerifyAuth = () => {
  const navigate = useNavigate()
  const qs = useParsedQueryString()
  const { pendingAuthentication } = useSessionInfo()

  useEffect(() => {
    try {
      const redirectUrl = getLoginRedirectUrl()
      if (redirectUrl && !pendingAuthentication) {
        removeLoginRedirectUrl()
        const { search, pathname } = new URL(redirectUrl)
        const { code, scope, state, ...rest } = qs
        const query = queryStringToObject(search)
        const filteredParams = Object.fromEntries(
          Object.entries({ ...query, ...rest }).filter(([_, value]) => value !== undefined), // Remove undefined values
        ) as { [key: string]: string }

        navigate(`${pathname}?${new URLSearchParams(filteredParams).toString()}`, { replace: true })
      }
    } catch (error) {}
  }, [navigate, qs, pendingAuthentication])

  return (
    <Flex justifyContent={'center'}>
      <Loader />
    </Flex>
  )
}

export default VerifyAuth
