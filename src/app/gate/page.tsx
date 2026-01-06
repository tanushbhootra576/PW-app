import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { gateBatches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW GATE Coupon TANBHO0002 | ₹1800 OFF Batches 2025',
  description: 'Get ₹1800 OFF on PW GATE batches like Parakram 2.0 for 2025 with coupon code TANBHO0002.',
};

export default function GatePage() {
  return (
    <CoursePageLayout
      title="GATE Batches"
      description="Courses for postgraduate engineering entrance exams."
      courses={gateBatches}
    />
  );
}
