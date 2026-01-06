
export const ambassador = {
  name: 'Campus Ambassador',
  role: 'Campus Ambassador',
  couponCode: 'TANBHO0002',
  validity: '14 October 2030',
};

export type OtherCourse = {
  batchCategory: string;
  couponCode: string;
  discount: string;
  description?: string;
  details?: string[];
};

export const upscBatches: OtherCourse[] = [
  {
    batchCategory: 'UPSC PRARAMBH 2028',
    couponCode: 'TANBHO0002',
    discount: 'Upto 25% OFF',
    description:
      'A comprehensive 4-year foundation course for UPSC aspirants starting early.',
    details: [
      'Ideal for 1st-year college students.',
      'Includes GS, CSAT, and optional subjects.',
      'Mentorship from top educators.',
    ],
  },
  {
    batchCategory: 'UPSC Sankalp 4.0 2027',
    couponCode: 'TANBHO0002',
    discount: 'Upto 25% OFF',
    description:
      'A 3-year integrated program for college students aiming for UPSC 2027.',
    details: [
      'Structured for holistic preparation.',
      'Live classes, doubt sessions, and test series.',
      'Focus on current affairs and answer writing.',
    ],
  },
  {
    batchCategory: 'UPSC Titan 3.0 2026',
    couponCode: 'TANBHO0002',
    discount: 'Upto 25% OFF',
    description:
      'A 2-year course designed for in-depth preparation for UPSC 2026.',
    details: [
      'Perfect for final year students and graduates.',
      'Comprehensive coverage of Prelims and Mains.',
      'Personalized study plan.',
    ],
  },
  {
    batchCategory: 'UPSC Prahar 2.0 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 25% OFF',
    description:
      'Intensive 1-year program for students targeting UPSC 2025 (Hinglish).',
    details: [
      'Rigorous daily schedule.',
      'Includes Prelims, Mains, and Interview guidance.',
      'Batch for Hindi and English medium students.',
    ],
  },
];

export const gateBatches: OtherCourse[] = [
  {
    batchCategory: 'Parakram 2.0 GATE 2025 (CS/DA)',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description:
      'Focused batch for Computer Science and Data Science aspirants for GATE 2025.',
    details: [
      'Covers all major CS/DA topics.',
      'Includes mock tests and previous year papers.',
      'Doubt solving by expert faculty.',
    ],
  },
  {
    batchCategory: 'Parakram 2.0 GATE 2025 (ECE)',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description:
      'Focused batch for Electronics & Communication Engineering aspirants for GATE 2025.',
    details: [
      'In-depth coverage of ECE syllabus.',
      'Practice questions and full-length tests.',
    ],
  },
  {
    batchCategory: 'Parakram 2.0 GATE 2025 (ME)',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description:
      'Focused batch for Mechanical Engineering aspirants for GATE 2025.',
    details: ['Syllabus coverage for ME.', 'Problem-solving sessions.'],
  },
  {
    batchCategory: 'Shreshth 2.0 GATE + ESE 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description:
      'Combined preparation for both GATE and ESE examinations in 2025.',
    details: [
      'Integrated curriculum for both exams.',
      'Technical and non-technical subjects covered.',
      'Special focus on ESE General Studies.',
    ],
  },
];

export const neetBatches: OtherCourse[] = [
  {
    batchCategory: 'Yakeen NEET 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Dedicated course for droppers and repeaters aiming for NEET 2025.',
    details: [
      'Intensive revision and practice.',
      'Focus on high-yield topics.',
      'Regular doubt clearing sessions.',
    ],
  },
  {
    batchCategory: 'Arjuna NEET 2026',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description: 'Foundation course for Class 11 students targeting NEET 2026.',
    details: [
      'Builds strong fundamentals in Physics, Chemistry, and Biology.',
      'Prepares for board exams alongside NEET.',
      'Step-by-step learning approach.',
    ],
  },
  {
    batchCategory: 'Lakshay NEET 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Full syllabus coverage for Class 12 students preparing for NEET 2025.',
    details: [
      'Covers Class 11 revision and Class 12 syllabus.',
      'NEET-pattern test series included.',
      'Time management and exam strategy sessions.',
    ],
  },
];

export const jeeBatches: OtherCourse[] = [
  {
    batchCategory: 'Arjuna JEE 2026',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'A 2-year program for Class 11 students preparing for JEE Main & Advanced 2026.',
    details: [
      'Comprehensive syllabus coverage for boards and JEE.',
      'Regular practice sheets (DPPs).',
      'Develops problem-solving skills from the start.',
    ],
  },
  {
    batchCategory: 'Lakshay JEE 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Comprehensive course for Class 12 students targeting JEE Main & Advanced 2025.',
    details: [
      'Focus on Class 12 syllabus with revision of Class 11.',
      'Extensive test series for Main and Advanced.',
      'Taught by experienced JEE faculty.',
    ],
  },
  {
    batchCategory: 'Prayas JEE 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Specialized course for droppers aiming to crack JEE Main & Advanced 2025.',
    details: [
      'Fast-paced and intensive program.',
      'Advanced problem-solving techniques.',
      'Personalized mentorship for droppers.',
    ],
  },
];

export const vidyapeethOffline: OtherCourse[] = [
  {
    batchCategory: 'Vidyapeeth Offline Centers',
    couponCode: 'TANBHO0002',
    discount: 'Upto 10% OFF',
    description: 'Admission to any PW Vidyapeeth offline center across India.',
    details: [
      'Available for JEE, NEET, and Foundation courses.',
      'Hybrid learning model with offline classes.',
      'State-of-the-art infrastructure.',
    ],
  },
];

export const school: OtherCourse[] = [
  {
    batchCategory: 'NEEV for Class 9th 2026',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description: 'Foundation batch for Class 9 students.',
    details: ['Build strong fundamentals.'],
  },
  {
    batchCategory: 'UDAAN for Class 10th 2026',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description: 'Course for Class 10 Board preparation.',
    details: ['Covers all subjects.'],
  },
  {
    batchCategory: 'Parishram Batch for Class 12th',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description: 'Batch for Class 12 Board exams.',
    details: ['Science, Commerce, and Arts streams.'],
  },
];

export const commerce: OtherCourse[] = [
  {
    batchCategory: 'Sampurna: CA Foundation',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description: 'Comprehensive batch for CA Foundation aspirants.',
    details: ['Covers all papers.'],
  },
  {
    batchCategory: 'CA Intermediate',
    couponCode: 'TANBHO0002',
    discount: 'Upto 20% OFF',
    description: 'Batch for CA Intermediate exams.',
    details: ['Group 1, Group 2, or both.'],
  },
  {
    batchCategory: 'MBA Pioneer 2024',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Preparation course for CAT, XAT, and other major MBA entrance exams.',
    details: [
      'Covers Quantitative Aptitude, DILR, and VARC.',
      'Includes GD-PI preparation.',
      'Mock interviews with industry experts.',
    ],
  },
];

export const books: OtherCourse[] = [
  {
    batchCategory: 'PW Official Books',
    couponCode: 'TANBHO0002',
    discount: 'Upto 10% OFF',
    description:
      'Get discounts on official PW publications and study material.',
    details: [
      'Books for JEE, NEET, GATE, UPSC, and more.',
      'Includes question banks, solved papers, and concept books.',
      'Available on the PW Store.',
    ],
  },
];

export const defence: OtherCourse[] = [
  {
    batchCategory: 'Shaurya 2.0 NDA 2025',
    couponCode: 'TANBHO0002',
    discount: 'Upto 10% OFF',
    description:
      'A dedicated course for aspirants preparing for the National Defence Academy 2025 exam.',
    details: [
      'Covers Mathematics and GAT papers.',
      'Physical fitness and SSB interview guidance.',
      'Taught by ex-defence personnel and expert faculty.',
    ],
  },
];

export const pwSkills: OtherCourse[] = [
  {
    batchCategory: 'Full Stack Web Development',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Become a job-ready Full Stack Developer with hands-on projects.',
    details: [
      'Learn MERN stack: MongoDB, Express, React, Node.js.',
      'Includes real-world projects and portfolio building.',
      'Job assistance and interview preparation.',
    ],
  },
  {
    batchCategory: 'Data Science & Analytics',
    couponCode: 'TANBHO0002',
    discount: 'Upto 15% OFF',
    description:
      'Master Data Science concepts and tools to build a career in analytics.',
    details: [
      'Learn Python, SQL, Machine Learning, and Power BI.',
      'Hands-on case studies and capstone projects.',
      'Career guidance and placement support.',
    ],
  },
];
