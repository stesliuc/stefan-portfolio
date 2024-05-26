//src/app/components/footer.tsx

import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

const Footer = () => {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <a target="_blank" rel="noreferrer" href="mihaitesliuc@gmail.com">
                        <span className="sr-only">Mail</span>
                        <Mail className="h-5 w-5" />
                    </a>
                    <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                        <span className="sr-only">GitHub</span>
                        <Icons.gitHub className="h-5 w-5" />
                    </a>
                    <p className="text-sm">Made by Stefan Tesliuc</p>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer;