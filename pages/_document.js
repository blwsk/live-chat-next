import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import AssociateScript from '../components/AssociateScript';
import WidgetEmbedCode from '../components/WidgetEmbedCode';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';
import LiveChatSettingsScript from '../components/LiveChatSettingsScript';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    let portalId = 99209436;
    try {
      const parsed = parseInt(ctx.query.portalId, 10);
      portalId = parsed || portalId;
    } catch (error) {
      //
    }

    return { ...initialProps, portalId, query: ctx.query };
  }

  render() {
    const { query, portalId } = this.props;

    return (
      <html>
        <Head>
          <title>{"Kevin's live chat test page"}</title>
          <style>{`
            body,html {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #fbfbfb;
            }

            #hs-eu-cookie-confirmation {
              display: none;
            }
          `}</style>
        </Head>
        <body className="custom_class">
          <div>
            <Header portalId={portalId} query={query} />
            <Main />
          </div>
          <GoogleAnalyticsScript />
          <LiveChatSettingsScript />
          <WidgetEmbedCode portalId={portalId} query={query} />
          <AssociateScript />
          <NextScript />
        </body>
      </html>
    );
  }
}
