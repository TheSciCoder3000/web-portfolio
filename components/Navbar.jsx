import { useRouter } from "next/router";
import Link from "next/link";
import LogoSvg from "@svg/LogoSvg";

function Navbar({ navLinks }) {
  const { pathname } = useRouter();
  return (
    <div className="nav-cont">
      <LogoSvg className="nav-logo" />
      {navLinks.map((nav, indx) => (
        <Link
          key={indx}
          className={`nav-link ${pathname == nav.path ? "disabled" : ""}`}
          href={nav.path}
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
}

Navbar.defaultProps = {
  navLinks: [],
};

export default Navbar;
