import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import AssociateScript from '../components/AssociateScript';
import WidgetEmbedCode from '../components/WidgetEmbedCode';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, portalId: ctx.query.portalId, query: ctx.query };
  }

  render() {
    return (
      <html>
        <Head>
          <title>{"Kevin's live chat test page"}</title>
          <style>{`
            body,html {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: cornflowerblue;
            }

            #hs-eu-cookie-confirmation {
              display: none;
            }
          `}</style>
        </Head>
        <body className="custom_class">
          <div>
            <Header portalId={this.props.portalId} query={this.props.query} />
            <Main />
          </div>
          <WidgetEmbedCode portalId={this.props.portalId} query={this.props.query} />
          <AssociateScript />
          <NextScript />
        </body>
      </html>
    );
  }
}
