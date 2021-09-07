import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      {/* <link href="/house.ico" /> */}
      <link href="/house.ico" />
      <title>{title}</title>
      <link
        // href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'
        // improved First Content Print by hosting google web font locally
        rel="stylesheet"></link>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Home',
  keywords: 'Vorsprung durch technik',
  description: 'Find your next new Car',
};

export default Meta;
