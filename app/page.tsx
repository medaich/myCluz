import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="md:mt-8">
        <MaxWidthWrapper className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          <div className="relative aspect-[2/3] w-[300px] object-cover">
            <Image
              className="rounded-md shadow-sm"
              src="/portrait.jpg"
              alt="portrait"
              fill
            />
          </div>

          <div className="flex max-w-[600px] flex-col gap-4">
            <h1 className="text-balance text-2xl font-bold max-md:text-center lg:text-4xl">
              Welcome to our store, where your style meets you
            </h1>
            <ul className="space-y-2 max-md:space-y-1 max-md:text-center">
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Diversity of dresses and styles for men, women and children
                </span>
              </li>
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Commitment to quality craftsmanship in every garment
                </span>
              </li>
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Regular updates with the latest fashion trends and seasonal
                  collections
                </span>
              </li>
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Inclusive sizing options to cater to all body types
                </span>
              </li>
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Affordable luxury - premium quality at accessible price points
                </span>
              </li>
              <li>
                <Check className="mr-2 inline h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground md:text-base">
                  Responsive to customer feedback, continuously improving
                  designs and fit
                </span>
              </li>
            </ul>
            <Link
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "w-fit self-center capitalize max-md:w-full max-md:max-w-[400px]",
              )}
              href="/products"
            >
              Discover your style
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <h1 className="sr-only">Popular products</h1>
      </section>
    </>
  );
};

export default Page;
