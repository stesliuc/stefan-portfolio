//src/app/components/header.tsx
import Link from "next/link";
import { NavigationMenuHeader } from "./navbar"
import { Logo } from "./logo"

const Header = () => {
  return (
    <>
        <div className="sticky bg-background p-4 margin-top-0 w-full sticky top-0">
          <div className="flex flex:1 flex-row justify-between">
            <Logo />
            <NavigationMenuHeader />
          </div>
        </div>
    </>
  );
};

export default Header;