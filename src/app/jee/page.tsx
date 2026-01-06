import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { jeeBatches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW JEE Coupon TANBHO0002 | ₹500 OFF All Batches 2026',
  description: 'Get ₹500 OFF on all PW JEE batches like Arjuna, Lakshya, and Prayas for 2026 with coupon code TANBHO0002.',
};

export default function JeePage() {
  return (
    <CoursePageLayout
      title="JEE Batches"
      description="Courses for students preparing for JEE Main & Advanced."
      courses={jeeBatches}
    />
  );
}
