import { freeDeliveryIcon, roomVisualizerIcon } from '../assets/icons';

export const uspsData = [
  {
    icon: freeDeliveryIcon,
    iconType: 'svg',
    title: 'Free Samples',
    subtitle: 'Next-day delivery',
    link: 'https://www.luxuryflooringandfurnishings.co.uk/order-free-samples.html'
  },
  {
    icon: roomVisualizerIcon,
    iconType: 'image',
    title: 'Room Visualiser',
    subtitle: 'Try our floors in your home',
    //eslint-disable-next-line no-script-url
    link: 'javascript: roomvo.startStandaloneVisualizer();'
  }
];
