//src/app/components/header.tsx

import Navbar from "./navbar"

const Header = () => {
  return (
    <>
        <div className="sticky margin-top-0 w-full bg-cyan-100 sticky top-0">
          <div className="flex flex-row-reverse">
            <Navbar />
          </div>
        </div>
    </>
  );
};

export default Header;