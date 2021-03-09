# Next Template

Template para aplicações Nextjs

> Links uteis

- https://github.com/vercel/next.js/tree/canary/examples/with-styled-components

> Como Criar este Template

- Iniciando o projeto

```
$ yarn create next-app my-app
```

- Configurando o Typescript

  - mude a extensão dos arquivos na pasta pages de .js para .ts ou .tsx
  - instale as seguintes dependencias

    - ```
        $ yarn add --dev typescript @types/react @types/node
      ```

  - agora inicie o servidor em modo de desenvolvimento

    - ```
        $ yarn dev
      ```

  - o arquivo tsconfig.json será criado automaticamente

- Instalando e configurando o eslint

  - instale a seguinte dependencia

    - ```
        $ yarn add --dev eslint
      ```

  - inicie a configuração do eslint com...

    - ```
        $ yarn eslint --init
      ```

  - instale essas dependencias

    - ```
        $ yarn add --dev eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 @typescript-eslint/parser@latest
      ```

- Instalando o prettier

  - instale as seguintes dependencias

    - ```
        $ yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier
      ```

- Alterando algumas configurações do eslint

  - no arquivo .eslintrc.json adicione o jest que usaremos mais para frente

    - ```
        //.eslintrc.json
        "env": {
          "jest": true
        }
      ```

  - em extends adicione os seguintes plugins
    - ```
        //.eslintrc.json
        "extends": [
          "plugin:@typescript-eslint/recommended",
          "prettier/@typescript-eslint",
          "prettier/standart",
          "prettier/react"
        ]
      ```
  - em plugins adicione o prettier
    - ```
        //.eslintrc.json
        "plugins": [
          "prettier"
        ]
      ```
  - e agora vamos colocar algumas regras

    - ```
        //.eslintrc.json
        "rules": {
          "prettier/prettier": "errror", // vai sinalizar qualquer erro que seja derivado do prettier
          "space-before-function-paren": "off", // Remove necessidade de espaço depois do parentesis da funcao
          "react/prop-types": "off" // desliga a checagem de tipos do eslint(não do typescript)
        }
      ```

- Inserindo as tipagens

  - Alterando a tipagem do \_app

    - ```
        //_app.tsx
        import { AppProps } from 'next/app'

            const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
                return <Component {...pageProps} />
            }

            export default MyApp
      ```

  - Alterando a tipagem do home

    - ```
        // home.tsx
        const Home: React.FC = () => {
          return <div>Hello World</div>
        }

          export default Home
      ```

- Configurando o editorconfig

  - clique com o botao direito na regiao de pastas e selecione "Generate .editorconfig"

    - ```
      //.editorconfig
      root = true

      [*]
      indent_style = space
      indent_size = 2
      end_of_line = lf
      charset = utf-8
      trim_trailing_whitespace = true
      insert_final_newline = true
      ```

- Instalando e configurando o styled components

  - instale as seguintes dependencias

    - ```
        $ yarn add styled styled-components react-is
      ```
    - ```
        $ yarn add --dev babel-plugin-styled-components @types/styled-components
      ```

  - crie um arquivo de configuração do babel

    - ```
      //.babelrc
      {
        "presets": ["next/babel"],
        "plugins": [["styled-components", { "ssr": true }]]
      }
      ```

  - crie o arquivo \_document na pasta peges

    - ```
      // _document.tsx
      import Document, {
        DocumentContext,
        DocumentInitialProps,
        Html,
        Head,
        Main,
        NextScript
      } from 'next/document'
      import { ServerStyleSheet } from 'styled-components'

      export default class MyDocument extends Document {
        static async getInitialProps(
          ctx: DocumentContext
        ): Promise<DocumentInitialProps> {
          const sheet = new ServerStyleSheet()
          const originalRenderPage = ctx.renderPage

          try {
            ctx.renderPage = () =>
              originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
              })

            const initialProps = await Document.getInitialProps(ctx)
            return {
              ...initialProps,
              styles: (
                <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
                </>
              )
            }
          } finally {
            sheet.seal()
          }
        }

        render() {
          return (
            <Html>
              <Head />
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          )
        }
      }
      ```

- Configurando Autenticação

  - instale o next-auth

    - ```
      $ yarn add next-auth
      ```

  - crie o arquivo api/auth/[...nextauth].js

    - ```
      // api/auth/[...nextauth].js
      import NextAuth from 'next-auth'
      import Providers from 'next-auth/providers'

      export default (req, res) =>
        NextAuth({
          providers: [
            Providers.GitHub({
              clientId: process.env.GITHUB_CLIENT_ID,
              clientSecret: process.env.GITHUB_CLIENT_SECRET
            })
          ],
          debug: process.env.NODE_ENV === 'development',
          secret: process.env.AUTH_SECRET,
          jwt: {
            secret: process.env.JWT_SECRET,

          }
        })
      ```

  - configure suas variaveis de ambiente a vontede
  - se usar o github provider lembre se de criar um aplicacao Oauth no github

    - ```
      // .env.local
      GITHUB_CLIENT_ID=""
      GITHUB_CLIENT_SECRET=""
      NEXTAUTH_URL="http://localhost:3000"
      AUTH_SECRET=""
      JWT_SECRET=""
      ```

  - na pagina home importe os metodos do client e já esta pronto para logar

    - ```
      // src/pages/index.ts
      import { Container } from '@/components/Global'
      import Head from 'next/head'
      import { signIn, signOut, useSession } from 'next-auth/client'

      const Home: React.FC = () => {
        const [session, loading] = useSession()

        return (
          <Container>
            <Head>
              <title>Next Auth</title>
            </Head>

            <nav>
              {!session ? (
                <button onClick={() => signIn('github')}>Sign In with github</button>
              ) : (
                <>
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
      ```

  - No \_app envolva tudo com o provider para mais performance e cache de sessão

    - ```
      import { Provider as AuthProvider } from 'next-auth/client'
      <AuthProvider session={pageProps.session}>
      ```

  - Instalando o Prisma

    - ```
      $ yarn add prisma
      $ yarn prima init
      ```

  - No arquivo env coloque a url do banco
  - ```
      //.env
      DATABASE_URL="postgresql://user:password@localhost:5432/next-auth?schema=public"
    ```

  - no site do next-auth copie todo o schema e rode no banco de dados
  - e entao rode o intrispect para criar um schema com base no banco
    - ```
      $ yarn prima introspect
      ```
  - mude a primeira letra dos models pra uppercase
  - gere o cliente
    - ```
      $ yarn prisma generate
      ```
  - ele te informará como importar o prisma, deve ser mais ou menos asssim
    - ```
      import { PrismaClient } from '@prisma/client'
      const prisma = new PrismaClient()
      ```
