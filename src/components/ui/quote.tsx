import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface QuoteProps {
  children?: ReactNode;
}

export function Quote({
  children,
  ...props
}: QuoteProps) {
  return (
    <div
        {...props}
    >
        <div>
            <blockquote className="text-center mt-6 border-l-2 pl-6 italic">
            &quot;{children}&quot;
            </blockquote>
        </div>
    </div>
  );
}