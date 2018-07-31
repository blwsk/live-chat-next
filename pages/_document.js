import Document, { Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import WidgetEmbedCode from "../components/WidgetEmbedCode";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>{"Kevin's live chat test page"}</title>
          <style>{`
            body {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            }

            #hs-eu-cookie-confirmation {
              display: none;
            }
          `}</style>
        </Head>
        <body className="custom_class">
          <div>
            <Header />
            <Main />
          </div>
          <WidgetEmbedCode />
          <NextScript />
        </body>
      </html>
    );
  }
}
