import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { commerce } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW Commerce Coupon TANBHO0002 | CA, CS, MBA',
  description: 'Get discounts on PW Commerce courses for CA, CS, and MBA (Sampurna, Ignite) with coupon code TANBHO0002.',
};

export default function CommercePage() {
  return (
    <CoursePageLayout
      title="Commerce Batches"
      description="Courses for CA, CS, MBA, and other commerce professional exams."
      courses={commerce}
    />
  );
}
