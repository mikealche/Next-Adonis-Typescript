import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          html,
          body {
            height: 100%;
          }
          #__next {
            height: 100%;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
