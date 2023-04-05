import React from "react";
import StoreImg from "../styles/img/kokomi.jpg";
import LandingImg from "../styles/img/yelan.jpg";
import KalikasanImg from "../styles/img/aaka.jpg";
import SchoolImg from "../styles/img/ningguang.jpg";

const projectCollection = [
  {
    id: 0,
    name: "Store App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: StoreImg,
  },
  {
    id: 1,
    name: "Landing page",
    desc: "Lorem ipsum dolors sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: LandingImg,
  },
  {
    id: 2,
    name: "Kalikasan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: KalikasanImg,
  },
  {
    id: 3,
    name: "Online School Tools",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus quis enim venenatis maximus nec eget tortor. Sed sed dui sit amet risus semper luctus. Aliquam dictum elementum imperdiet. Fusce vel metus ut leo commodo pulvinar nec ut leo. Nullam iaculis, arcu ut bibendum fringilla, libero metus molestie lectus, ac malesuada mauris turpis vel eros. Quisque interdum enim risus. Mauris dignissim vel ipsum vitae hendrerit. Aliquam nec vulputate magna. Praesent ullamcorper tempus dolor suscipit pretium. Etiam hendrerit lacinia ex, id euismod dolor congue at. Etiam accumsan elit et justo semper, sed semper tortor rhoncus. Nam sagittis sodales risus sit. ",
    img: SchoolImg,
  },
];

function Projects() {
  return (
    <div className="project-cont">
      <h1 className="section-header project-header">PROJECTS</h1>
      <div className="project-items-cont">
        {projectCollection.map((proj, indx) => (
          <div className="project-item" key={indx}>
            <img className="project-img" src={proj.img.src} />
            <div className="proj-details">
              <h3 className="item-title">{proj.name}</h3>
              <hr />
              <p className="item-desc">{proj.desc}</p>
              <p className="details-link">Learn More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
