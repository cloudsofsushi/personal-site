/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'BCH Electric Limited, Faridabad',
    position: 'Engineer',
    url: 'https://bchindia.com',
    startDate: '2024-07-01',
    summary: `BCH Electric Limited, based in Faridabad, is a leading Indian manufacturer of low-voltage switchgear and electrical control products.
      Established in 1965, it serves industrial and commercial sectors nationwide. I spend
    >70% of my time writing code.`,
    highlights: [
      'Developed custom reports smartform, and enhancements in ABAP; confidently handled end-to-end SAP technical tasks including debugging and performance improvements.',
      'Worked on key company projects like Samar., DMS, and Salesforce, gaining hands-on experience in SAP system processes and understanding of real-time business requirements.',
      'Created detailed technical documentation and collaborated with teams to deliver reliable SAP solutions while building strong functional and business knowledge.',
    ],
  },
  {
    name: 'Aditya Birla Management Corporation Pvt Ltd, Mumbai',
    position: 'SDE (Intern)',
    url: 'https://www.adityabirla.com/en/',
    startDate: '2023-01-01',
    endDate: '2013-06-01',
    summary: `Aditya Birla Management Corporation Pvt. Ltd., based in Mumbai, is the apex corporate center of the Aditya Birla Group. 
    It provides strategic direction and centralized services across the Group's global businesses.`,
    highlights: [
      'Worked as a Software Developer Intern for 6 months, developing two projects - an Attendance Management System and an Online Training App using Mobilous (a no-code platform).',
      'As a part of Startup Ecosystem project, researched and analyzed startups incubated at IITs and IM4s, explorrng rnnovative technologies and business models aimed at solving real-world problems.',
    ],
  },
];

export default work;
