export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'MelCochleaGram-DeepCNN',
    subtitle: 'MelCochleaGram-DeepCNN',
    link: 'https://drive.google.com/file/d/1CCXPdm4mS8j8Sjy59Z8pMFjPeu5QPOUC/view?usp=drive_link',
    image: '/images/projects/project1.png',
    date: '2024-05-01',
    desc:
      'Sequentially Fused Spectrogram and the DeepCNN Classifiers-based ' +
      'Audio Spoof Detection System. This project introduces a novel ' +
      'approach MCG spectrogram by fusing the Mel Spectrogram and Cochleagram ' +
      'sequentially. For the classification, three pretrained models ' +
      'ResNet50, ResNet50V2, and InceptionV3 have been used.',
  },
  {
    title: 'Traffic System Controller using Big Data Analytics',
    subtitle: 'Traffic System Controller using Big Data Analytics',
    link: 'https://drive.google.com/file/d/1vSunrVeb2cbYyI88ZqskAR6yVi7mvcUt/view?usp=drive_link',
    image: '/images/projects/project2.jpg',
    date: '2024-05-01',
    desc:
      'Focused on advancement of Traffic System Controllers, contributing to safer, ' +
      'more efficient urban transportation systems. The project implements the three ' +
      'layers of the Lambda Architecture- Batch layer, Serving layer, Speed layer.',
  },
  {
    title: 'NIT Kurukshetra Website',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    link: 'https://cloudsofsushi.github.io/nitk/',
    image: '/images/projects/project3.jpg',
    date: '2021-12-01',
    desc:
      'Designed and developed a comprehensive college website featuring ' +
      'multiple interactive sections, providing structured access to ' +
      'academic, administrative, and campus-related information.',
  },
];

export default data;
