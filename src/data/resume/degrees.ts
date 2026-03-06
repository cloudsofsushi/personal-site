export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'National Institute of Technology Kurukshetra',
    degree: 'B.Tech. in Information & Technology',
    link: 'https://nitkkr.ac.in/',
    year: 2024,
  },
  {
    school: 'Central Board of Secondary Education (CBSE)',
    degree: '12th Grade (Intermidiate)',
    link: 'https://www.cbse.gov.in/',
    year: 2019,
  },
  {
    school: 'Board of School Education Haryana',
    degree: '10th Grade (High School)',
    link: 'https://bseh.org.in',
    year: 2017,
  },
];

export default degrees;
