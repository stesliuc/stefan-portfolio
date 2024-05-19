import Link from "next/link";

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About Me',
  },
  '/blog': {
    name: 'Blog',
  },
};

const Navbar = () => {
  return (
    <>
      <div className="flex">
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-stone-500 relative py-1 px-2"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;