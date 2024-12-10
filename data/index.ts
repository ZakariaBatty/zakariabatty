export const navItems = [
   { name: 'About', link: '#about' },
   { name: 'Projects', link: '#projects' },
   { name: 'Testimonials', link: '#testimonials' },
   { name: 'Contact', link: '#contact' },
];

export const gridItems = [
   {
      id: 1,
      title: 'I specialize in SaaS platform development and API integration.',
      description:
         'Delivering scalable and user-focused solutions for various industries.',
      className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
      imgClassName: 'w-full h-full',
      titleClassName: 'justify-end',
      img: '/b1.svg',
      spareImg: '',
   },
   {
      id: 2,
      title: '',
      description:
         'Ensuring seamless communication and project delivery worldwide.',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '',
      spareImg: '',
   },
   {
      id: 3,
      title: 'My Tech Stack',
      description: 'Expertise in MERN stack, scalable architecture.',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-center',
      img: '',
      spareImg: '',
   },
   {
      id: 4,
      title: 'Building future-ready web applications.',
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '/grid.svg',
      spareImg: '/b4.svg',
   },
   {
      id: 5,
      title: 'Currently exploring advanced JavaScript frameworks.',
      description: 'The Inside Scoop',
      className: 'md:col-span-3 md:row-span-2',
      imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
      titleClassName: 'justify-center md:justify-start lg:justify-center',
      img: '/b5.svg',
      spareImg: '/grid.svg',
   },
   {
      id: 6,
      title: 'Let’s create something amazing together.',
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
      img: '',
      spareImg: '',
   },
];

export const projects = [
   {
      id: 1,
      title: 'Dreebz - SaaS Platform for Legal Experts',
      des: 'Developed a robust platform for legal consultations using React.js, Next.js, and Express.js.',
      img: '/p1.svg',
      iconLists: [
         '/re.svg',
         '/tail.svg',
         '/ts.svg',
         '/express.svg',
         '/python.svg',
      ],
      link: 'http://dreebz.com',
   },
   {
      id: 2,
      title: 'Sahtek - Telemedicine SaaS Application',
      des: 'Designed a comprehensive platform for patient-doctor consultations and medical task management.',
      img: '/p2.svg',
      iconLists: [
         '/re.svg',
         '/tail.svg',
         '/ts.svg',
         '/express.svg',
         '/flask.svg',
      ],
      link: 'http://sahtek.com',
   },
   {
      id: 3,
      title: 'Microservice for Intelligent Search',
      des: 'Built a search and analysis microservice leveraging Flask and Python for improved accuracy.',
      img: '/p3.svg',
      iconLists: ['/python.svg', '/flask.svg', '/tail.svg'],
      link: 'https://dreebz.com/en/explore',
   },
   {
      id: 4,
      title: 'WordPress WooCommerce Store Creation',
      des: 'Developed feature-rich e-commerce stores and subscription management dashboards. check my other website',
      img: '/p4.svg',
      iconLists: ['/php.svg', '/wp.svg', '/tail.svg', '/mysql.svg'],
      link: 'https://devloup.com/',
   },
];

export const testimonials = [
   {
      quote: "Zakaria's expertise in full-stack development helped us build a scalable and efficient platform. Highly recommended!",
      name: 'Michael Johnson',
      title: 'CEO at Red Cursor Solutions',
   },
   {
      quote: 'Zakaria delivered exceptional results on our SaaS project, showing great attention to detail and communication skills.',
      name: 'Sarah Khalid',
      title: 'Project Manager at Akwascreation Agency',
   },
];

export const companies = [
   {
      id: 1,
      name: 'Red Cursor Solutions',
      img: '/cloud.svg',
      nameImg: '/cloudName.svg',
   },
   {
      id: 2,
      name: 'Akwascreation Agency',
      img: '/app.svg',
      nameImg: '/appName.svg',
   },
   {
      id: 3,
      name: 'Bfdigital',
      img: '/host.svg',
      nameImg: '/hostName.svg',
   },
   {
      id: 4,
      name: 'Ly Assurance',
      img: '/s.svg',
      nameImg: '/streamName.svg',
   },
];

export const workExperience = [
   {
      id: 1,
      title: 'Full-Stack Web Developer',
      desc: 'Built and optimized SaaS applications and microservices for various industries using modern tech stacks.',
      className: 'md:col-span-2',
      thumbnail: '/exp1.svg',
   },
   {
      id: 2,
      title: 'Freelance Full-Stack Developer',
      desc: 'Created scalable websites and APIs for clients, ensuring seamless user experiences.',
      className: 'md:col-span-2',
      thumbnail: '/exp2.svg',
   },
];

export const socialMedia = [
   {
      id: 1,
      img: '/git.svg',
      link: 'https://github.com/ZakariaBatty',
   },
   {
      id: 2,
      img: '/twit.svg',
      link: 'https://twitter.com/zakariabatty',
   },
   {
      id: 3,
      img: '/link.svg',
      link: 'https://www.linkedin.com/in/zakaria-batty-25399a1a1/',
   },
];
