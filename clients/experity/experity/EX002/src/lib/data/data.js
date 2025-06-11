import {
  chatIcon,
  chatPieSliceIcon,
  demoIcon,
  monitorIcon,
  salesIcon,
  shieldIcon,
  supportIcon,
  teleradiologyIcon
} from '../assets/icons';

export const firstStepOptions = [
  {
    label: 'Get a Demo',
    icon: demoIcon, //Use actual SVG in production
    selected: true
  },
  {
    label: 'Talk to Sales',
    icon: salesIcon,
    selected: false
  },
  {
    label: 'Help from Support',
    icon: supportIcon,
    selected: false
  },
  {
    label: 'I am a new or existing patient',
    icon: supportIcon,
    selected: false
  }
];

export const secondStepOptions = [
  {
    label: 'Teleradiology',
    icon: teleradiologyIcon, //Use actual SVG in production
    selected: true
  },
  {
    label: 'EMR/Practice Management',
    icon: monitorIcon,
    selected: false
  },
  {
    label: 'Streamlined Charting',
    icon: chatPieSliceIcon,
    selected: false
  },
  {
    label: 'Insurance Follow-Up',
    icon: shieldIcon,
    selected: false
  },
  {
    label: 'Patient Engagement',
    icon: chatIcon,
    selected: false
  }
];
