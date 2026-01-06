import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { school } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW School Coupon TANBHO0002 | Classes 6-12',
  description: 'Get discounts on PW School tuition batches for classes 6-12 (Udaan, NEEV, Parishram) with coupon code TANBHO0002.',
};

export default function SchoolPage() {
  return (
    <CoursePageLayout
      title="School Batches (Classes 6-12)"
      description="Foundation and board exam preparation for school students."
      courses={school}
    />
  );
}
