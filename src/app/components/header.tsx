//src/app/components/header.tsx

import { NavigationMenuHeader } from "./navbar"

const Header = () => {
  return (
    <>
        <div className="sticky margin-top-0 w-full sticky top-0">
          <div className="flex flex-row">
            <NavigationMenuHeader />
          </div>
        </div>
    </>
  );
};

export default Header;