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
  return (
    <div className="footer-cont">
      <div className="footer-content">
        <div className="footer-col footer-media">
          <div className="logo-cont">
            <LogoSvg className="footer-logo" />
          </div>
          <div className="media-links">
            <FbSvg
              className="media-icon fb-icon"
              variants={iconHoverVariant}
              initial="rest"
              whileHover="hover"
            />
            <GithubSvg
              className="media-icon github-icon"
              variants={iconHoverVariant}
              initial="rest"
              whileHover="hover"
            />
            <LinkedinSvg
              className="media-icon linkedin-icon"
              variants={iconHoverVariant}
              initial="rest"
              whileHover="hover"
            />
          </div>
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
