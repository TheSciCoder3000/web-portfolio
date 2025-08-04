export interface IProject {
  title: string;
  description: string;
  ss: string[];
  github: string;
  live: string;
}

export const projects: IProject[] = [
  {
    title: "Kalikasan Advocacy",
    description:
      "The kalikasan Advocacy is a website designed to promote awareness of global warming  and climate change. Built with a responsive landing page and a LMS web app. Users can engage in activities to promote awareness in the community. It is equipped with an admin account that allows management of users and submissions.",
    ss: ["/kalikasan/1.png", "/kalikasan/2.png", "/kalikasan/3.png"],
    github: "https://github.com/TheSciCoder3000/kalikasan-blog",
    live: "https://kalikasan-blog.firebaseapp.com",
  },
  {
    title: "CID Architecture",
    description:
      "A basic demo landing page of a construction and architectural company. It is built with responsive layout and fluid animations, keeping users hooked. It is built with multiple pages detailing what the company is about and the projects they have organized. ",
    ss: ["/archi/1.jpg", "/archi/2.jpg", "/archi/3.jpg"],
    github: "https://github.com/TheSciCoder3000/archi_vite",
    live: "https://cid-archi.web.app/",
  },
  {
    title: "The Villa Store",
    description:
      "One of the first websites I created during the Pandemic. The web app was inspired to help members of the community become updated if our residence was selling any goods they were interested. It built using generic designs from bootstrap and and the Django was used for the backend.",
    ss: ["/store/1.jpg", "/store/2.jpg", "/store/3.jpg", "/store/4.jpg"],
    github: "https://github.com/TheSciCoder3000/Store-App",
    live: "https://thescicoder3000.pythonanywhere.com",
  },
];
