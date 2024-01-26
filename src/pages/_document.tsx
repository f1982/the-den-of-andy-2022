import Document, { Head, Html, Main, NextScript } from 'next/document';

const GOOGLE_FONT =
  'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600&family=Inter:wght@200;400;700&display=optional';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link href={GOOGLE_FONT} rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
