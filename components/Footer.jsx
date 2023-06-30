import Link from "next/link";
import LogoSvg from "@svg/LogoSvg";
import { socialMedia } from "@utils/content";
import { useRouter } from "next/router";

const iconHoverVariant = {
  rest: {
    fill: "rgb(190, 190, 190)",
  },
  hover: {
    fill: "#00e061",
  },
};

function Footer({ navLinks }) {
  const { pathname } = useRouter();
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
            <Link key={indx} indx={indx} href={nav.path} className={`footer-link${pathname == "/" && nav.name == "Home" ? " disabled" : ""}`}>
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
