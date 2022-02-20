import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />

        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument