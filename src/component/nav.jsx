import {  puma } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <div><img className="w-[120px] h-[32px]" src={puma} alt="logo" /></div>
        <ul className="list-none flex justify-center flex-1 items-center gap-16 max-lg:hidden ">
          {navLinks.map(navLink => (
            <li
              className="font-montserrat leading-normal text-lg text-slate-gray"
              key={navLink.label}
            >
              <a href={navLink.href}>{navLink.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <img src={hamburger} width={32} height={32} className="hidden max-lg:block" alt="mobile show" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
