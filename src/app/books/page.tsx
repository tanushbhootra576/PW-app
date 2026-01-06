import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { books } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW Books & Modules Coupon TANBHO0002',
  description: 'Get discounts on official PW Store books and study modules with coupon code TANBHO0002.',
};

export default function BooksPage() {
  return (
    <CoursePageLayout
      title="PW Books & Study Material"
      description="Official publications and study modules from the PW Store."
      courses={books}
    />
  );
}
