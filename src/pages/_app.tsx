import type { AppProps } from 'next/app'
import {Header} from '../styles/App'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Header>
        <h1>Life Manager</h1>
      </Header> */}

      <Component {...pageProps} />
    </>
  )
}
