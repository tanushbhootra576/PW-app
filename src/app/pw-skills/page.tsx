import { Metadata } from 'next';
import { CoursePageLayout } from '@/components/course-page-layout';
import { pwSkills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'PW Skills Coupon TANBHO0002 | Web Dev, Data Science',
  description: 'Get discounts on PW Skills courses like Full Stack Web Development and Data Science with coupon code TANBHO0002.',
};

export default function PwSkillsPage() {
  return (
    <CoursePageLayout
      title="PW Skills"
      description="Upskilling courses for technology and software development."
      courses={pwSkills}
    />
  );
}
