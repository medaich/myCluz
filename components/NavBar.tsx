"use client";

import Link from "next/link";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { cn } from "@/lib/utils";
import {
  AtSign,
  LogIn,
  LogOut,
  Map,
  Menu,
  Pen,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DropDownUser from "./DropDownUser";
import SearchBar from "./SearchBar";
import { Button, buttonVariants } from "./ui/button";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

const NavBar = () => {
  const isAdmin = true;
  const isAuthenticated = true;

  const pathname = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);

  return (
    <nav className="bg-slate-50 shadow-sm">
      <MaxWidthWrapper
        className={`flex ${isOpenMenu ? "flex-col" : ""} items-center justify-between p-4 sm:p-8 md:flex-row lg:p-0`}
      >
        <Link href="/">
          <Logo />
        </Link>

        <div
          className={cn({
            "p-6 max-md:relative max-md:m-6 max-md:w-full max-md:max-w-[400px] max-md:rounded-md max-md:bg-white max-md:shadow-sm":
              isOpenMenu,
          })}
        >
          <Button
            variant="ghost"
            className="relative left-full -ml-14 pt-6 md:hidden"
            onClick={() => setIsOpenMenu((isOpen) => !isOpen)}
          >
            {!isOpenMenu ? (
              <Menu strokeWidth={1} size={45} />
            ) : (
              <X strokeWidth={1} size={40} />
            )}
          </Button>

          {isOpenMenu && (
            <div className="flex flex-col items-center md:gap-4 lg:flex-row">
              <ul className="flex flex-col items-center gap-2 max-md:py-4 md:flex-row">
                <li>
                  <Link
                    className={cn(
                      "text-sm uppercase tracking-wider hover:text-primary",
                      {
                        "text-primary": pathname === "/products",
                      },
                    )}
                    href="/products"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "text-sm uppercase tracking-wider hover:text-primary",
                      {
                        "text-primary": pathname === "/cart",
                      },
                    )}
                    href="/cart"
                  >
                    Cart <span className="-ml-1 text-xs">(2)</span>
                  </Link>
                </li>

                {isAdmin && (
                  <li>
                    <Link
                      className={cn(
                        "text-sm uppercase tracking-wider hover:text-primary",
                        {
                          "text-primary": pathname === "/admin",
                        },
                      )}
                      href="/admin"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>

              <div className="hidden h-6 w-[1px] bg-foreground shadow-sm lg:block"></div>

              <div className="flex items-center justify-between gap-2 max-md:gap-4">
                <SearchBar />
                {isAuthenticated && <DropDownUser className="max-md:hidden" />}
              </div>
              {isAuthenticated ? (
                <>
                  <div className="mt-4 w-full md:hidden">
                    <div className="relative mb-2 mt-4 max-w-[300px]">
                      <Link
                        href="/account"
                        className="absolute right-0 top-0 mt-2"
                      >
                        <Pen className="size-4" />
                      </Link>
                      <div className="flex items-center gap-2">
                        <Image
                          alt="avatar"
                          height={40}
                          width={40}
                          src="/avatar.png"
                        />
                        <span className="text-lg">Mohammed Aich</span>
                      </div>

                      <DropdownMenuSeparator />

                      <div className="ml-4 mt-2 space-y-2">
                        <div className="flex items-center gap-2">
                          <AtSign className="size-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            mohammedaich.dev@gmail.com
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Phone className="size-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            0714362328
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Map className="size-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            Marrakech, Morocco
                          </span>
                        </div>
                      </div>

                      <DropdownMenuSeparator />

                      <ul className="ml-4">
                        <li>
                          <Link
                            href="/orders"
                            className="flex items-center space-x-2"
                          >
                            <ShoppingBag className="size-4" />
                            <span>Your orders</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/log-out"
                            className="flex items-center space-x-2"
                          >
                            <LogOut className="size-4" />
                            <span>Log out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex items-center gap-4 max-md:w-full",
                  )}
                  href="/login"
                >
                  <span className="block">Login</span>
                  <LogIn size={20} strokeWidth={1} />
                </Link>
              )}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
