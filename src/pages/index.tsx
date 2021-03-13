import { Container } from '@/components/Global'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'

interface ToggleTheme {
  toggleTheme: () => void
}

const Home: React.FC<ToggleTheme> = ({ toggleTheme }) => {
  const [session, loading] = useSession()
  const [content, setContent] = useState()

  useEffect(() => {
    ;(async () => {
      const res = await fetch('api/private')
      const json = await res.json()

      if (json.content) {
        setContent(json.content)
      } else {
        setContent(json.error)
      }
    })()
  }, [session])

  if (typeof window !== 'undefined' && loading) return null

  return (
    <Container>
      <Head>
        <title>Next Auth</title>
      </Head>
      <button onClick={toggleTheme}>Change Theme</button>
      <nav>
        {!session ? (
          <>
            <h1>{content}</h1>
            <button onClick={() => signIn('local')}>Sign In with github</button>
          </>
        ) : (
          <>
            <h1>{content}</h1>
            <span>{session.user.name}</span>
            {session.user.image && <img src={session.user.image} width="50" />}
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        )}
      </nav>
    </Container>
  )
}

export default Home
