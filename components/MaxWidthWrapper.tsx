import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("m-auto size-full max-w-screen-xl p-8", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
