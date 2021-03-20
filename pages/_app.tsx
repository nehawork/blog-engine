import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../core/assets/styles/global.css';
import MainPage from '../components/layout/mainPage';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const BlogEngine = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (<>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="/fevicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fevicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/fevicon.png" />
      <meta name="application-name" content="Blog Engine" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Blog Engine" />
      <meta name="description" content="Blog Engine" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />
      <title>Blog Engine</title>
    </Head>
   <MainPage>
     <Component {...pageProps} />
   </MainPage>

  </>)
}

export default BlogEngine;