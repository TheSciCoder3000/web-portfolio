import StoreImg from "@styles/img/Store_App_img.jpg";
import KalikasanImg from "@styles/img/kalikasan_img.jpg";
import fullStore from "@styles/img/store_full.jpg"
import fullKalikasan from "@styles/img/kalikasan_full.jpg"

export const projectCollection = [
  {
    id: 0,
    name: "Store App",
    desc: "An online shop website built during the pandemic in an effort to information and data regarding our small-time business accessible to our subdivision.",
    img: StoreImg,
    full: fullStore,
    tags: ["HTML", "CSS", "BOOTSTRAP", "DJANGO", "JAVASCRIPT"],
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo pellentesque, accumsan dui ac, laoreet purus. Donec et nisi quam. In hac habitasse platea dictumst. Curabitur auctor consequat ex vel auctor. Sed aliquam ipsum at nunc condimentum, vel imperdiet lacus aliquam. Proin pharetra imperdiet nibh. Vivamus sodales, dui et pharetra fringilla, justo odio mattis ex, eget efficitur lorem mauris. ",
    live: "http://thescicoder3000.pythonanywhere.com/",
    github: "https://github.com/TheSciCoder3000/Store-App",
  },
  {
    id: 1,
    name: "Kalikasan",
    desc: "Website blog application built for our NSTP Advocacy Campaign project during our 1st year in college. Project contains a landing page for visitors and a dedictaed web application to host activites and upload lessons and modules.",
    img: KalikasanImg,
    full: fullKalikasan,
    tags: ["HTML", "CSS", "JAVASCRIPT", "REACTJS", "FIREBASE"],
    summary: "Lorem ipsum",
    live: "https://kalikasan-blog.firebaseapp.com/",
    github: "https://github.com/TheSciCoder3000/kalikasan-blog/",
  },
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
];
