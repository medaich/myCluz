import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DropDownUser = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image alt="avatar" height={40} width={40} src="/avatar.png" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Hi, Mohammed</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile" className="flex items-center space-x-2">
              <User className="size-4" />
              <span>Manage your account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/orders" className="flex items-center space-x-2">
              <ShoppingBag className="size-4" />
              <span>Your orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/log-out" className="flex items-center space-x-2">
              <LogOut className="size-4" />
              <span>Log out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownUser;
