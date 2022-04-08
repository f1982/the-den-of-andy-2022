import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600&family=Inter:wght@200;400;700&display=optional"
          rel="stylesheet"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
