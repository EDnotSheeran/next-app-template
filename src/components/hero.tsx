import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { BackgroundPattern } from "@/components/background-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          NextJS Fullstack Template
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          A modern, production-ready Next.js fullstack template with Shadcn UI
          components. Build faster with pre-configured authentication, database
          integration, and responsive design patterns—everything you need to
          launch your next project.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg" asChild>
            <Link href="/auth/sign-up">
              Get Started <ArrowUpRight className="h-5! w-5!" />
            </Link>
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
          >
            <CirclePlay className="h-5! w-5!" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
