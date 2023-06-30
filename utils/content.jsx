import StoreImg from "@styles/img/Store_App_img.jpg";
import KalikasanImg from "@styles/img/kalikasan_img.jpg";
import fullStore from "@styles/img/store_full.jpg"
import fullKalikasan from "@styles/img/kalikasan_full.jpg"
import GradeImg from "@styles/img/calcu.jpg";
import fullGrade from "@styles/img/calcu_full.jpg";

export const ProjectCollection = [
  {
    id: 0,
    name: "Store App",
    desc: `An online shop website built during the pandemic in an effort to 
          information and data regarding our small-time business accessible to 
          our subdivision.`,
    img: StoreImg,
    full: fullStore,
    tags: ["HTML", "CSS", "BOOTSTRAP", "DJANGO", "JAVASCRIPT"],
    summary:
      `This is the very first website I've created in hopes of connecting 
      the residents of our village with our online business. The website was simple,
      to display a list of products we would be selling for that particular day. 
      It would display information such as the product name, price and amount left.
      I also added some additional features such as allowing the users to reserve 
      products or order them for delivery. It also has an authentication system 
      to allow users to create their own accounts as to make personalization,
      invoice, and data analysis easier.`,
    live: "http://thescicoder3000.pythonanywhere.com/",
    github: "https://github.com/TheSciCoder3000/Store-App",
  },
  {
    id: 1,
    name: "Kalikasan",
    desc: `Website blog application built for our NSTP Advocacy Campaign project 
           during our 1st year in college. Project contains a landing page for 
           visitors and a dedictaed web application to host activites and upload 
           lessons and modules.`,
    img: KalikasanImg,
    full: fullKalikasan,
    tags: ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "FIREBASE"],
    summary: `Kalikasan is an advocacy campaign aimed towards promoting awareness 
              to the effects of global warming. The website is mainly comprised of
              a landing page and the main web app where the participants will 
              actively interact with the given lessons and activities. It also 
              has an authentication system using the firebase api as its backend. 
              The main web app also has a dashboard for general users to interact 
              with our platform. For us admins, we have our own admin page that's 
              hidden from the general users to monitor each individual and overall 
              progress of the campaign.`,
    live: "https://kalikasan-blog.firebaseapp.com/",
    github: "https://github.com/TheSciCoder3000/kalikasan-blog/",
  },
  {
    id: 2,
    name: "Grade Calculator",
    desc: `A web application designed to display and track the student's overall progress 
           during the semester. In preparation for the upcoming face-to-face classes in 
           the school year 2022-2023, the web app was made to provide the user's a detailed 
           summary of their progress in each subject.`,
    img: GradeImg,
    full: fullGrade,
    tags: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACTJS", "FIREBASE"],
    summary: `During the 2022 summer vacation, I started working on a Grade calculator to manage my 
              grades and assessments for the next school year. Sadly I was unable to finish the 
              project due to the lack of vision as to what the final product should be. Nonetheless, 
              it was my first web app built using typescript, an evolved version of javascript where 
              it is sensitive and stricter to the types the variable that will be used. This in theory 
              makes it less prone to encountering bugs that would normally present itself during the 
              operation of the program. Since this was a more sophisticated project than I anticipated, 
              it helped me consider my method of approach when building a personal project from scratch.`,
    live: "https://grade-calculator-3000.firebaseapp.com",
    github: "https://github.com/TheSciCoder3000/grade-calculator/",
  },
];

export const navLinks = [
  { name: "Home", scroll: "/", path: "/" },
  { name: "About", scroll: "#about", path: "/#about" },
  // { name: "Skills", path: "/skills" },
  { name: "Projects", scroll: "#projects", path: "/#projects" },
];

export const Tags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Vscode",
  "React",
  "Python",
  "Linux",
  "git",
  "Firebase",
  "SASS",
  "JSON",
  "Figma",
  "Typescript",
  "Java",
  "Django",
  "REST Framework",
  "API",
  "Arduino",
  "C++",
  "Godot",
];
