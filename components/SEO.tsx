import Head from 'next/head';

const SEO: React.FC<{ title: string; description: string }> = ({
   title,
   description,
}) => (
   <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="canonical" href="https://yourwebsite.com" />
   </Head>
);

export default SEO;
