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
    selected: false,
    options: [
      {
        label: 'EMR/Practice Management',
        icon: monitorIcon,
        selected: false,
        value: 'EMR | PM'
      },
      {
        label: 'Insurance Follow-Up',
        icon: shieldIcon,
        selected: false,
        value: 'Insurance Follow-Up'
      },
      {
        label: 'Teleradiology',
        icon: teleradiologyIcon, //Use actual SVG in production
        selected: true,
        value: 'Teleradiology'
      },
      {
        label: 'Patient Engagement',
        icon: chatIcon,
        selected: false,
        value: 'Patient Engagement'
      }
    ]
  },
  {
    label: 'Talk to Sales',
    icon: salesIcon,
    selected: false,
    options: [
      {
        label: 'EMR/Practice Management',
        icon: monitorIcon,
        selected: false,
        value: 'EMR | PM'
      },
      {
        label: 'Insurance Follow-Up',
        icon: shieldIcon,
        selected: false,
        value: 'Insurance Follow-Up'
      },
      {
        label: 'Teleradiology',
        icon: teleradiologyIcon, //Use actual SVG in production
        selected: true,
        value: 'Teleradiology'
      },
      {
        label: 'Patient Engagement',
        icon: chatIcon,
        selected: false,
        value: 'Patient Engagement'
      }
    ]
  },
  {
    label: 'Help from Support',
    icon: supportIcon,
    selected: false,
    options: [
      {
        label: 'Teleradiology',
        icon: teleradiologyIcon, //Use actual SVG in production
        selected: true,
        value: 'Teleradiology'
      },
      {
        label: 'Patient Engagement',
        icon: chatIcon,
        selected: false,
        value: 'Patient Engagement'
      }
    ]
  },
  {
    label: 'I am a new or existing patient',
    icon: supportIcon,
    selected: false,
    options: []
  }
];

export const secondStepOptions = [
  {
    label: 'EMR/Practice Management',
    icon: monitorIcon,
    selected: false
  },
  {
    label: 'Insurance Follow-Up',
    icon: shieldIcon,
    selected: false
  },
  {
    label: 'Teleradiology',
    icon: teleradiologyIcon, //Use actual SVG in production
    selected: true
  },
  {
    label: 'Patient Engagement',
    icon: chatIcon,
    selected: false
  }
];
