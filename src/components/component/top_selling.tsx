import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function section_comp() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-10">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Top Selling pizzas
          </h1>
        </div>
        <div className="space-y-2">
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our amazing products and services. Learn more about our
            company and how we can help you.
          </p>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500">
            <Link href="/pizzas">Get started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
