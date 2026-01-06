import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { vidyapeethOffline } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW Vidyapeeth Coupon TANBHO0002 | ₹1500 OFF Offline Centers',
  description: 'Get ₹1500 OFF on admissions to PW Vidyapeeth offline centers with coupon code TANBHO0002.',
};

export default function VidyapeethPage() {
  return (
    <CoursePageLayout
      title="Vidyapeeth (Offline Centers)"
      description="Enroll in PW's offline coaching centers for JEE, NEET, and Foundation."
      courses={vidyapeethOffline}
    />
  );
}
