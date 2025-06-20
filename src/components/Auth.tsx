'use client'

import { useAuth } from 'react-oidc-context'

export const Auth = () => {
  const auth = useAuth()

  const signOutRedirect = () => {
    const clientId = process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID || ''
    const logoutUri = '<logout uri>'
    const cognitoDomain = `https://${process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID}.${process.env.NEXT_PUBLIC_AWS_REGION}.amazoncognito.com`

    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`
  }

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  )
}

export default Auth
