import shared from '../shared/shared';

const { VARIATION } = shared;
export const casinoData = [
  {
    name: 'Exchmarket',
    logoImg:
      'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/Exchmarket-logo.png',
    title: '5% up to<br> ₹15,000',
    link:
      VARIATION === '1'
        ? 'https://go.affiliationcloud.com/0005J2'
        : 'https://go.affiliationcloud.com/0005J3',
    TCLink: 'https://go.affiliationcloud.com/57807d65-ceec-47b1-93c4-786aae30bd3a',
    bgColor: '#045e00'
  },
  {
    name: '1xBet',
    logoImg:
      'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/1xbet-logo.png',
    title: '330% up to<br> ₹65,000',
    link:
      VARIATION === '1'
        ? 'https://go.affiliationcloud.com/0005J9'
        : 'https://go.affiliationcloud.com/0005JB',
    TCLink: 'https://go.affiliationcloud.com/b40cf328-b1ec-11ed-9664-0050569e7c00',
    code: 'OCB2025',
    bgColor: '#1a5685'
  },
  {
    name: 'Dafabet',
    logoImg:
      'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/ocbscores/dafabet-logo.png',
    title: '200% up to<br> ₹20,000',
    link:
      VARIATION === '1'
        ? 'https://go.affiliationcloud.com/0005J0'
        : 'https://go.affiliationcloud.com/0005J1',
    TCLink: 'https://go.affiliationcloud.com/0005EZ',
    code: 'DSFDB200INR',
    bgColor: '#990000'
  }
];
