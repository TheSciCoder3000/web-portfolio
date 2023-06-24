import { useRouter } from "next/router";
import LogoSvg from "@svg/LogoSvg";
import ScrollLink from "@utils/ScrollLink";

function Navbar({ navLinks }) {
  const { pathname } = useRouter();
  return (
    <div className="nav-cont">
      <LogoSvg className="nav-logo" />
      {navLinks.map((nav, indx) => (
        <ScrollLink
          key={indx}
          className={`nav-link ${pathname == nav.path ? "disabled" : ""}`}
          href={nav.path}
        >
          {nav.name}
        </ScrollLink>
      ))}
    </div>
  );
}

Navbar.defaultProps = {
  navLinks: [],
};

export default Navbar;
