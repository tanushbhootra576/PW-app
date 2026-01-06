import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { defence } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW Defence Coupon TANBHO0002 | NDA/SSB',
  description: 'Get discounts on PW Defence courses for NDA, SSB, and other defence exams with coupon code TANBHO0002.',
};

export default function DefencePage() {
  return (
    <CoursePageLayout
      title="Defence Exam Batches"
      description="Prepare for NDA, SSB, and other defence entrance exams."
      courses={defence}
    />
  );
}
