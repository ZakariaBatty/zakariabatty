import Head from 'next/head';

const HomeStructuredData: React.FC = () => {
   const structuredDataArray = [
      {
         '@context': 'https://schema.org',
         '@type': 'Person',
         name: 'Zakaria Batty',
         jobTitle: 'Full-Stack Developer',
         description:
            'I specialize in SaaS platform development, API integration, and ESG management tools.',
         url: 'https://zakariabatty.com',
         worksFor: [
            {
               '@type': 'Organization',
               name: 'ESG Insight Software',
               sameAs: 'https://esgreview.eu',
            },
            {
               '@type': 'Organization',
               name: 'Red Cursor Solutions',
               sameAs: 'http://dreebz.com',
            },
         ],
         alumniOf: [
            {
               '@type': 'EducationalOrganization',
               name: 'YOUCODE (UM6P - SIMPLONLINE)',
               location: 'Youssoufia, Morocco',
            },
            {
               '@type': 'EducationalOrganization',
               name: 'OFPPT EL JADIDA',
               location: 'Al Jadida, Morocco',
            },
         ],
      },
      {
         '@context': 'https://schema.org',
         '@type': 'CreativeWork',
         name: 'ESG Review Platform',
         url: 'https://esgreview.eu',
         description: 'A comprehensive ESG reporting and analytics platform.',
         programmingLanguage: ['TypeScript', 'JavaScript', 'prisma', 'next.js'],
         creator: {
            '@type': 'Person',
            name: 'Zakaria Batty',
            url: 'https://zakariabatty.com',
         },
      },
      {
         '@context': 'https://schema.org',
         '@type': 'SoftwareApplication',
         name: 'ESG Review Platform',
         applicationCategory: 'BusinessApplication',
         operatingSystem: 'Web',
         url: 'https://esgreview.eu',
         creator: {
            '@type': 'Organization',
            name: 'ESG Insight Software',
         },
      },
      {
         '@context': 'https://schema.org',
         '@type': 'Review',
         reviewBody:
            'Zakaria delivered exceptional results on our SaaS project.',
         author: {
            '@type': 'Person',
            name: 'said el bakkali',
         },
         itemReviewed: {
            '@type': 'Person',
            name: 'Zakaria Batty',
         },
         reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
         },
      },
      {
         '@context': 'https://schema.org',
         '@type': 'Person',
         name: 'Zakaria Batty',
         knows: [
            'React.js',
            'Next.js',
            'TypeScript',
            'Express.js',
            'Python/Flask',
            'TailwindCSS',
            'REST API',
            'mongodb',
            'sequelize',
            'mysql',
            'nosql',
            'prisma',
         ],
      },
      {
         '@context': 'https://schema.org',
         '@type': 'ContactPoint',
         telephone: '+212687904633',
         email: 'zbatty1297@gmail.com',
         contactType: 'Customer Support',
         areaServed: 'Worldwide',
         availableLanguage: ['English', 'Arabic'],
      },
      {
         '@context': 'https://schema.org',
         '@type': 'BreadcrumbList',
         itemListElement: [
            {
               '@type': 'ListItem',
               position: 1,
               name: 'Home',
               item: 'https://zakariabatty.com',
            },
            {
               '@type': 'ListItem',
               position: 2,
               name: 'Projects',
               item: 'https://zakariabatty.com/#projects',
            },
            {
               '@type': 'ListItem',
               position: 3,
               name: 'testimonials',
               item: 'https://zakariabatty.com/#testimonials',
            },
            {
               '@type': 'ListItem',
               position: 4,
               name: 'contact',
               item: 'https://zakariabatty.com/#contact',
            },
         ],
      },
      {
         '@context': 'https://schema.org',
         '@type': 'FAQPage',
         mainEntity: [
            {
               '@type': 'Question',
               name: 'What services do you offer?',
               acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'I specialize in websites and SaaS platform development, API integration, and ESG tools.',
               },
            },
            {
               '@type': 'Question',
               name: 'What technologies do you use?',
               acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Next.js, TypeScript, Express.js, Python/Flask, TailwindCSS, REST API, mongodb, sequelize, mysql, nosql, prisma, and more.',
               },
            },
         ],
      },
   ];

   return (
      <Head>
         {structuredDataArray.map((data, index) => (
            <script
               key={index}
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />
         ))}
      </Head>
   );
};

export default HomeStructuredData;
