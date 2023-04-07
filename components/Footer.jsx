import Link from "next/link";
import LogoSvg from "@svg/LogoSvg";
import FbSvg from "@svg/FbSvg";
import GithubSvg from "@svg/GithubSvg";
import LinkedinSvg from "@svg/LinkedinSvg";

const iconHoverVariant = {
  rest: {
    fill: "rgb(190, 190, 190)",
  },
  hover: {
    fill: "#00e061",
  },
};

function Footer({ navLinks }) {
  const socialMedia = [
    {
      id: 0,
      name: "fb",
      url: "https://web.facebook.com/johnjuvi.devilla.9",
      component: FbSvg,
    },
    {
      id: 1,
      name: "github",
      url: "https://github.com/TheSciCoder3000",
      component: GithubSvg,
    },
    {
      id: 3,
      name: "linkedin",
      url: "https://www.linkedin.com/in/john-juvi-de-villa/",
      component: LinkedinSvg,
    },
  ];

  return (
    <div className="footer-cont">
      <div className="footer-content">
        <div className="logo-cont">
          <LogoSvg className="footer-logo" />
        </div>
        <div className="media-links">
          {socialMedia.map((media) => (
            <a
              target="_blank"
              href={media.url}
              rel="noopener noreferrer"
              key={media.id}
            >
              <media.component
                className={`media-icon ${media.name}-icon`}
                variants={iconHoverVariant}
                initial="rest"
                whileHover="hover"
              />
            </a>
          ))}
        </div>
        <div className="footer-col footer-links">
          {navLinks.map((nav, indx) => (
            <Link indx={indx} href={nav.path} className="footer-link">
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="copyright">@John Juvi De Villa. All rights reserved</p>
    </div>
  );
}

export default Footer;
