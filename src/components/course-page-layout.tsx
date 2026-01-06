'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OtherCourse } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import { CouponCard } from './coupon-card';
import { ambassador } from '@/lib/data';

interface CoursePageLayoutProps {
  title: string;
  description: string;
  courses: OtherCourse[];
}

export function CoursePageLayout({
  title,
  description,
  courses,
}: CoursePageLayoutProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
          <span>{description} Use code </span>
          <Badge variant="destructive">{ambassador.couponCode}</Badge>
          <span> for the maximum available discount.</span>
        </div>
        <div className="max-w-xl mx-auto">
          <CouponCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <Card
            key={course.batchCategory}
            className="flex flex-col hover:shadow-xl transition-shadow duration-300 bg-card"
          >
            <CardHeader>
              <CardTitle>{course.batchCategory}</CardTitle>
              {course.description && (
                <CardDescription>{course.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2 text-sm text-muted-foreground">
                {course.details?.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center gap-2 bg-muted/50 p-4 rounded-b-lg">
               <Badge
                variant="outline"
                className="text-sm border-primary/50 text-primary font-bold"
              >
                {course.couponCode}
              </Badge>
              <Badge
                variant="default"
                className="text-sm bg-primary text-primary-foreground"
              >
                {course.discount}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
