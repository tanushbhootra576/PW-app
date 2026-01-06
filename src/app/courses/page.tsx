import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  jeeBatches,
  upscBatches,
  gateBatches,
  neetBatches,
  vidyapeethOffline,
  books,
  defence,
  pwSkills,
  type OtherCourse,
  school,
  commerce,
} from '@/lib/data';
import {
  GraduationCap,
  Code,
  Rocket,
  Landmark,
  Shield,
  Briefcase,
  Book,
  School,
  Building,
} from 'lucide-react';
import Link from 'next/link';

interface CourseCategory {
  title: string;
  icon: React.ReactNode;
  courses: OtherCourse[];
  href: string;
  description: string;
}

const courseCategories: CourseCategory[] = [
  {
    title: 'JEE',
    href: '/jee',
    icon: <Rocket className="h-8 w-8" />,
    courses: jeeBatches,
    description: 'For engineering aspirants.',
  },
  {
    title: 'NEET',
    href: '/neet',
    icon: <Rocket className="h-8 w-8" />,
    courses: neetBatches,
    description: 'For medical aspirants.',
  },
  {
    title: 'UPSC',
    href: '/upsc',
    icon: <Landmark className="h-8 w-8" />,
    courses: upscBatches,
    description: 'For civil services aspirants.',
  },
  {
    title: 'GATE',
    href: '/gate',
    icon: <GraduationCap className="h-8 w-8" />,
    courses: gateBatches,
    description: 'For postgraduate engineering.',
  },
  {
    title: 'School',
    href: '/school',
    icon: <School className="h-8 w-8" />,
    courses: school,
    description: 'For classes 6-12.',
  },
  {
    title: 'Vidyapeeth',
    href: '/vidyapeeth',
    icon: <Building className="h-8 w-8" />,
    courses: vidyapeethOffline,
    description: 'Offline coaching centers.',
  },
  {
    title: 'Commerce',
    href: '/commerce',
    icon: <Briefcase className="h-8 w-8" />,
    courses: commerce,
    description: 'CA, CS, and MBA prep.',
  },
  {
    title: 'Defence',
    href: '/defence',
    icon: <Shield className="h-8 w-8" />,
    courses: defence,
    description: 'For NDA and other defence exams.',
  },
  {
    title: 'Books',
    href: '/books',
    icon: <Book className="h-8 w-8" />,
    courses: books,
    description: 'Official PW study material.',
  },
  {
    title: 'PW Skills',
    href: '/pw-skills',
    icon: <Code className="h-8 w-8" />,
    courses: pwSkills,
    description: 'For tech and software skills.',
  },
];

export default function CoursesPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          All Physics Wallah Courses
        </h1>
        <div className="text-lg text-muted-foreground mt-2">
          <span>
            Explore the wide range of courses offered by Physics Wallah. Use
            code{' '}
          </span>
          <Badge variant="destructive">TANBHO0002</Badge>
          <span> for exclusive discounts.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courseCategories.map(category => (
          <Link href={category.href} key={category.title}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:bg-primary/5">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
