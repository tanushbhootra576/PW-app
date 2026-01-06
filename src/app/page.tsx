"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  GraduationCap,
  Code,
  Rocket,
  Landmark,
  Shield,
  Briefcase,
  Book,
  School,
  Building,
  Target,
  FlaskConical,
  TestTube,
  Atom,
  Orbit,
} from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { ambassador } from "@/lib/data";
import { CouponCard } from "@/components/coupon-card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface CourseCategory {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}

const courseCategories: CourseCategory[] = [
  {
    title: "JEE",
    href: "/jee",
    icon: <Rocket className="h-8 w-8" />,
    description: "For engineering aspirants.",
  },
  {
    title: "NEET",
    href: "/neet",
    icon: <TestTube className="h-8 w-8" />,
    description: "For medical aspirants.",
  },
  {
    title: "UPSC",
    href: "/upsc",
    icon: <Landmark className="h-8 w-8" />,
    description: "For civil services aspirants.",
  },
  {
    title: "GATE",
    href: "/gate",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "For postgraduate engineering.",
  },
  {
    title: "School",
    href: "/school",
    icon: <School className="h-8 w-8" />,
    description: "For classes 6-12.",
  },
  {
    title: "Vidyapeeth",
    href: "/vidyapeeth",
    icon: <Building className="h-8 w-8" />,
    description: "Offline coaching centers.",
  },
  {
    title: "Commerce",
    href: "/commerce",
    icon: <Briefcase className="h-8 w-8" />,
    description: "CA, CS, and MBA prep.",
  },
  {
    title: "Defence",
    href: "/defence",
    icon: <Shield className="h-8 w-8" />,
    description: "For NDA and other defence exams.",
  },
  {
    title: "Books",
    href: "/books",
    icon: <Book className="h-8 w-8" />,
    description: "Official PW study material.",
  },
  {
    title: "PW Skills",
    href: "/pw-skills",
    icon: <Code className="h-8 w-8" />,
    description: "For tech and software skills.",
  },
];

export default function HomePage() {
  const { toast } = useToast();
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  const copyCode = () => {
    navigator.clipboard.writeText(ambassador.couponCode);
    toast({
      title: "Copied!",
      description: `Coupon code ${ambassador.couponCode} copied to clipboard.`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-20 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-2 text-primary">
                  PW Coupon Code
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {ambassador.couponCode}
                </h2>
                <p className="max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground mb-8">
                  Get the maximum available discount on all Physics Wallah
                  courses.
                </p>
                <div className="max-w-lg mx-auto md:mx-0 mb-8">
                  <CouponCard />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <Link href="/courses">
                    <Button
                      size="lg"
                      variant="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                    >
                      Explore All Courses
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a
                    href="https://pw.live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-primary border-primary hover:bg-primary/10 w-full sm:w-auto"
                    >
                      Use at pw.live NOW →
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="relative w-96 h-96">
                  <Atom
                    className="absolute w-full h-full text-primary/10 animate-spin-slow"
                    style={{ animationDuration: "20s" }}
                  />
                  <Orbit
                    className="absolute w-2/3 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/20 animate-spin-slow"
                    style={{ animationDuration: "15s" }}
                  />
                  <TestTube className="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/40 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About PW Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Use Our PW Coupon Code?
              </h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                Our coupon code{" "}
                <code className="font-bold text-primary bg-primary/10 p-1 rounded-sm">
                  {ambassador.couponCode}
                </code>{" "}
                provides you with the best possible discount on any course
                offered by Physics Wallah, helping you achieve your academic
                goals without financial stress.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4">Quality Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access top-tier educational content from expert instructors
                    at a reduced price.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Target className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4">Comprehensive Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From competitive exams like JEE & NEET to skill development,
                    PW has a course for everyone.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <FlaskConical className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4">Maximum Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our coupon guarantees the highest available discount, making
                    learning more affordable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Explore All PW Categories
              </h2>
              <p className="text-muted-foreground mt-2">
                Find the perfect course for you and apply code{" "}
                {ambassador.couponCode} for a discount.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {courseCategories.map((category) => (
                <Link href={category.href} key={category.title}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center hover:bg-primary/5">
                    <CardHeader className="flex flex-col items-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-full text-primary">
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
