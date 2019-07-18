import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/Header';
import AssociateScript from '../components/AssociateScript';
import WidgetEmbedCode from '../components/WidgetEmbedCode';
import GoogleAnalyticsScript from '../components/GoogleAnalyticsScript';

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

    const env = ['qa', 'prod'].indexOf(ctx.query.env) > -1 ? ctx.query.env : undefined;

    return {
      ...initialProps,
      portalId,
      env,
      query: ctx.query,
      lazy: ctx.query.lazy === 'true'
    };
  }

  render() {
    const { query, portalId, lazy, env } = this.props;

    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{"Kevin's live chat test page"}</title>
          <style>{`
            body,html {
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background-color: #fbfbfb;
            }

            #hs-eu-cookie-confirmation {
              display: none;
            }

            #hubspot-conversations-inline-iframe {
              border: none;
              height: 586px;
              width: 392px;
            }
          `}</style>
          {lazy && (
            <script type="text/javascript">
              {`
              window.hsConversationsSettings = {
                loadImmediately: false,
              };
            `}
            </script>
          )}
        </Head>
        <body className="custom_class">
          <div>
            <Header portalId={portalId} query={query} />
            <Main />
          </div>
          <GoogleAnalyticsScript />
          <WidgetEmbedCode portalId={portalId} env={env} />
          <AssociateScript />
          <NextScript />
        </body>
      </html>
    );
  }
}
