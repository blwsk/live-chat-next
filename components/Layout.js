import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import WidgetEmbedCode from './WidgetEmbedCode';

function Layout({ portalId, env, children }) {
  return (
    <>
      <style jsx global>
        {`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
              sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          }

          code {
            font-family: monospace;
          }
        `}
      </style>
      <Header portalId={portalId} env={env} />
      {children || null}
      <Footer />
      <WidgetEmbedCode portalId={portalId} env={env} />
    </>
  );
}

export const withLayout = (options = {}) => C => {
  void options;

  const WithLayout = ({ portalId, env, ...rest }) => {
    return (
      <Layout portalId={portalId} env={env}>
        <C {...rest} />
      </Layout>
    );
  };

  WithLayout.getInitialProps = async ctx => {
    const { query } = ctx;
    let portalId = undefined;
    try {
      portalId = parseInt(query.portalId, 10);
    } catch (error) {
      //
    }

    return {
      portalId: !isNaN(portalId) ? portalId : undefined,
      env: query.env
    };
  };

  return WithLayout;
};
