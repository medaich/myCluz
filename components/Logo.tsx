import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={cn("flex items-center justify-center gap-2")}>
      <Image
        width={50}
        height={50}
        className="block rounded-full"
        src="/logo.png"
        alt="logo"
      />
      <p>
        <span className={cn("block text-xl font-medium text-primary")}>
          MyCluz
        </span>

        <span className="block text-xs leading-none text-muted-foreground">
          Where your style meets you
        </span>
      </p>
    </div>
  );
};

export default Logo;
