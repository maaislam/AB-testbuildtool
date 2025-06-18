import {
  chatIcon,
  demoIcon,
  monitorIcon,
  salesIcon,
  shieldIcon,
  supportIcon,
  teleradiologyIcon,
  providerIcon,
  revenueIcon
} from '../assets/icons';

export const firstStepOptions = [
  {
    label: 'Get a Demo',
    icon: demoIcon, //Use actual SVG in production
    selected: false,
    value: 'Get a Demo',
    options: [
      {
        label: 'Teleradiology',
        icon: teleradiologyIcon, //Use actual SVG in production
        selected: true,
        value: 'Teleradiology'
      },
      {
        label: 'EMR/Practice Management',
        icon: monitorIcon,
        selected: false,
        value: 'EMR | PM'
      },
      {
        label: 'Insurance Follow-Up',
        icon: revenueIcon,
        selected: false,
        value: 'Insurance Follow-Up'
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
    value: 'Talk to an Expert',
    options: [
      {
        label: 'Teleradiology',
        icon: teleradiologyIcon, //Use actual SVG in production
        selected: true,
        value: 'Teleradiology'
      },
      {
        label: 'EMR/Practice Management',
        icon: monitorIcon,
        selected: false,
        value: 'EMR | PM'
      },
      {
        label: 'Insurance Follow-Up',
        icon: revenueIcon,
        selected: false,
        value: 'Insurance Follow-Up'
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
    value: 'Help from Support',
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
    label: 'Help From a Care Provider',
    icon: providerIcon,
    selected: false,
    value: 'Help From a Care Provider',
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
