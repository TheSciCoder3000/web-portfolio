export interface IProject {
  title: string;
  description: string;
  ss: string[];
  github: string;
  live: string;
  bkg: string;
}

export const projects: IProject[] = [
  {
    title: "SoundWave | Headset Shop",
    description: `
      Developed a full-stack web application leveraging ReactJS 
      and NextJS for both the frontend and backend. Implemented 
      Supabase as a comprehensive backend solution for database 
      management, file storage, and user authentication. Integrated 
      Stripe as the payment gateway to enable secure and seamless 
      transactions. Managed global application state efficiently using 
      Redux Toolkit, ensuring scalability and maintainability of the application.
    `,
    ss: [
      "/soundwave/home.png",
      "/soundwave/products.png",
      "/soundwave/product-detail.png",
      "/soundwave/cart.png",
    ],
    github: "https://github.com/TheSciCoder3000/ear-commerce",
    live: "https://soundwave.neurocoder.work",
    bkg: "red",
  },
  {
    title: "Money Management System",
    description: `
      The project is built upon NextJS for the frontend and 
      backend while Supabase for authentication and database. 
      Chart.js library for data visualization and Shadcn for 
      reusable components. You can manage income and expenses 
      of accounts added through this web application.
    `,
    ss: [
      "/money/dashboard.png",
      "/money/account.png",
      "/money/transaction.png",
      "/money/budget.png",
      "/money/login.png",
      "/money/signin.png",
    ],
    github: "https://github.com/TheSciCoder3000/money-management-ai",
    live: "https://money.neurocoder.work",
    bkg: "red",
  },
  {
    title: "Kalikasan Advocacy",
    description: `
      The kalikasan Advocacy is a website designed to promote awareness 
      of global warming  and climate change. Built with a responsive 
      landing page and a LMS web app. Users can engage in activities to 
      promote awareness in the community. It is equipped with an admin 
      account that allows management of users and submissions.
    `,
    ss: ["/kalikasan/1.webp", "/kalikasan/2.webp", "/kalikasan/3.webp"],
    github: "https://github.com/TheSciCoder3000/kalikasan-blog",
    live: "https://kalikasan-blog.firebaseapp.com",
    bkg: "red",
  },
  {
    title: "CID Architecture",
    description: `
      A basic demo landing page of a construction and architectural company. 
      It is built with responsive layout and fluid animations, keeping users 
      hooked. It is built with multiple pages detailing what the company is 
      about and the projects they have organized. 
    `,
    ss: ["/archi/1.webp", "/archi/2.webp", "/archi/3.webp"],
    github: "https://github.com/TheSciCoder3000/archi_vite",
    live: "https://cid-archi.web.app/",
    bkg: "black",
  },
  {
    title: "The Villa Store",
    description: `
      One of the first websites I created during the Pandemic. The web app 
      was inspired to help members of the community become updated if our 
      residence was selling any goods they were interested. It built using 
      generic designs from bootstrap and and the Django was used for the backend.
    `,
    ss: ["/store/1.webp", "/store/2.webp", "/store/3.webp", "/store/4.webp"],
    github: "https://github.com/TheSciCoder3000/Store-App",
    live: "https://thescicoder3000.pythonanywhere.com",
    bkg: "blue",
  },
];
