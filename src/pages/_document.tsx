// html global

import { Html, Head, Main, NextScript } from 'next/document'


export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* traz o codigo css pelo servidor */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
