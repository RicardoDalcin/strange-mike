import Head from 'next/head';

import dynamic from 'next/dynamic';

const WidgetBot = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Strange Mike</title>
        <meta
          name="description"
          content="Remake masterclass por Strange Mike"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hello, world!</div>
    </>
  );
}
