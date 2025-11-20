import { portfolioContent } from './content';

const patentFocusMap = {
  'An Artificial Intelligence Based Integrated IoT & Machine Learning Healthcare System for Cancer Care and Method Thereof': 'AI-assisted treatment pathways that personalize oncology care plans.',
  'A Machine Learning Based Intelligent Model for an Autonomous Vehicle System for Data Selection On Board': 'Edge intelligence that prioritizes sensor fusion workloads inside autonomous fleets.',
  'An Intelligent Wireless Signal Noise Reduction Method and System Based on Machine Learning': 'Signal-processing techniques that improve connectivity reliability in noisy environments.',
  'Method and System for Supply Chain Management Risk Prediction Based on Convolution Neural Network': 'Predictive analytics that surfaces supplier disruptions before they impact operations.'
};

const inventorshipMap = {
  'An Artificial Intelligence Based Integrated IoT & Machine Learning Healthcare System for Cancer Care and Method Thereof': 'Co-Inventor',
  'A Machine Learning Based Intelligent Model for an Autonomous Vehicle System for Data Selection On Board': 'Co-Inventor',
  'An Intelligent Wireless Signal Noise Reduction Method and System Based on Machine Learning': 'Co-Inventor',
  'Method and System for Supply Chain Management Risk Prediction Based on Convolution Neural Network': 'Co-Inventor'
};

const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date);
};

const toTitleCase = (value) =>
  value
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const patentsSource = portfolioContent.publicationsIp?.itemsDetailed?.patents ?? [];
const researchSource = portfolioContent.publicationsIp?.itemsDetailed?.research ?? [];

// Local asset + link mapping for patent visuals and external references
const patentAssets = {
  '202241031893': {
    image: 'public/pt1.png',
    link:
      'https://patentscope.wipo.int/search/en/detail.jsf?docId=IN366095072&_cid=P10-MAU83F-42458-1'
  },
  '202241047484': {
    image: 'public/pt2.png',
    link:
      'https://patentscope.wipo.int/search/en/detail.jsf?docId=IN372954743&_cid=P10-MAU851-43467-1'
  },
  '202241047466': {
    image: 'public/pt3.png',
    link:
      'https://patentscope.wipo.int/search/en/detail.jsf?docId=IN372954243&_cid=P10-MAU85E-43660-1'
  },
  '202241050428': {
    image: 'public/pt4.png',
    link:
      'https://patentscope.wipo.int/search/en/detail.jsf?docId=IN374031198&_cid=P10-MAU85S-43895-1'
  }
};

export const patents = patentsSource.map((patent) => {
  const status = `Filed ${formatDate(patent.filingDate)} • ${inventorshipMap[patent.title] ?? 'Inventor'}`;
  const focus = patentFocusMap[patent.title] ?? 'Filed patent; detailed description available upon request.';
  const assets = patentAssets[patent.applicationNumber] || {};

  return {
    title: toTitleCase(patent.title),
    applicationId: patent.applicationNumber,
    status,
    focus,
    image: assets.image,
    link: assets.link
  };
});

export const researchPapers = researchSource.map((paper) => ({
  title: paper.title,
  venue: paper.venue,
  year: paper.year,
  doi: paper.doi,
  summary: `${paper.authors}. Presented in ${paper.location}.`,
  link: paper.link
}));
