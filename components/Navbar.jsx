import { useRouter } from "next/router";
import LogoSvg from "@svg/LogoSvg";
import MenuSvg from "@svg/MenuSvg";
import ScrollLink from "@utils/ScrollLink";
import Link from "next/link";
import { useWindowDimensions } from "@utils/hooks";

function Navbar({ navLinks }) {
  const { pathname } = useRouter();
  const { width } = useWindowDimensions();

  return (
    <div className="nav-cont">
      <LogoSvg className="nav-logo" />

      {width > 1000 ? 
      <>
        {navLinks.map((nav, indx) => {
          if ((pathname == "/" && nav.name == "Home") || pathname != "/") {
            return (
              <Link
                key={indx}
                className={`nav-link ${pathname == nav.path ? "disabled" : ""}`}
                href={nav.path}
              >
                {nav.name}
              </Link>
            )
          } else {
            return (
              <ScrollLink
                key={indx}
                className={`nav-link ${pathname == nav.path ? "disabled" : ""}`}
                href={nav.scroll}
              >
                {nav.name}
              </ScrollLink>
            )
          }
        })}
      </> 
      : 
      <>
        <MenuSvg  className="nav-menu" />
      </>}
      
    </div>
  );
}

Navbar.defaultProps = {
  navLinks: [],
};

export default Navbar;
