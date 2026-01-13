import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src="/src/assets/devbysaad.png" alt="" className="w-16 h-16"/>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
