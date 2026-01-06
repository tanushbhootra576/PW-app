import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { upscBatches } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW UPSC Coupon TANBHO0002 | ₹6000 OFF Batches 2026',
  description: 'Get ₹6000 OFF on PW UPSC batches like Sankalp and Prahar for 2026 with coupon code TANBHO0002.',
};

export default function UpscPage() {
  return (
    <CoursePageLayout
      title="UPSC Batches"
      description="Comprehensive courses for civil services aspirants."
      courses={upscBatches}
    />
  );
}
