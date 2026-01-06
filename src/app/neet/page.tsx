import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { neetBatches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW NEET Coupon TANBHO0002 | ₹500 OFF All Batches 2026',
  description: 'Get ₹500 OFF on all PW NEET batches like Yakeen and Arjuna for 2026 with coupon code TANBHO0002.',
};

export default function NeetPage() {
  return (
    <CoursePageLayout
      title="NEET Batches"
      description="Courses for students preparing for the NEET medical entrance exam."
      courses={neetBatches}
    />
  );
}
