import { riskIcon, adviceIcon, treatmentIcon } from '../assets/icons';

export const appoinmentData = [
  {
    icon: riskIcon,
    text: 'Personal risk assessment',
    subtext:
      'To ensure all advice is tailored to you and your trip, our travel medical expert will discuss:',
    isKeyPoints: [
      'Your upcoming travel itinerary',
      'Your planned activities',
      'Your medical history'
    ]
  },
  {
    icon: adviceIcon,
    text: 'Expert advice',
    subtext: 'The nurse/pharmacist will explain:',
    isKeyPoints: [
      'The essential vaccines you need and what they protect against',
      'Your options for non-essential vaccines so you can decide whether to have them',
      'Other health risks at your destination and the precautions you can take'
    ]
  },
  {
    icon: treatmentIcon,
    text: 'Get your treatment on the day',
    subtext:
      'Usually you will receive your vaccinations and antimalarials during the appointment. You will also receive your yellow fever certificate if applicable.'
  }
];

export const vaccineData = {
  '/conditions/yellow-fever/': {
    Name: 'Yellow Fever',
    'About the heading': 'About the Yellow Fever vaccine',
    'When to get vaccinated': 'At least 10 days before travel.',
    Course: '1 dose.',
    Boosters: 'Lasts a lifetime for most travellers.',
    'How is it given':
      'The yellow fever vaccine consists of an injection usually given in your upper arm.',
    'How long does it last':
      'The yellow fever vaccine protect you for life (there are some exceptions, such as under 2 year olds who may need a booster).',
    'Side effects':
      'Serious side effects are rare, but common side effects include fever, headache and pain.',
    Children: 'Not for children under 9 months.',
    'Additional precautions': null,
    'Certificate requirements':
      'Some countries require a yellow fever certificate for entry which is issued once you have your vaccine.',
    'Risk if you contract':
      'Yellow fever in severe cases can cause organ faliure and internal bleeding.'
  },
  '/conditions/rabies/': {
    Name: 'Rabies',
    'When to get vaccinated': 'Ideally at least 4 weeks before travel to complete the course.',
    Course: '3 doses.',
    Boosters: 'Recommended for high risk travellers and those working with animals.',
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': 'If full course is given, you have lifetime protection unless bitten.',
    'Side effects': 'Common side effects are headache, fever and muscle aches.',
    Children: 'Can be given from birth.',
    'Additional precautions':
      'Avoid contact with animals while travelling. If bitten, scratched or licked on an open wound, by any mammal, wash with soap & water and seek immediate medical advice.',
    'Certificate requirements': null,
    'Risk if you contract': 'There is no cure for rabies and it is usually fatal.',
    'About the heading': 'About the Rabies vaccine'
  },
  '/conditions/hepatitis-a/': {
    Name: 'Hep A',
    'When to get vaccinated': 'Ideally at least 10 days before travel.',
    Course: '2 doses.',
    Boosters: '6-12 months apart.',
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': 'If 2 doses given, immunity will last 25 years.',
    'Side effects': 'Common side effects are soreness at the injection site and fever.',
    Children: 'Can be given from 1 years old.',
    'Additional precautions': 'Good hand and food hygiene should be followed.',
    'Certificate requirements': null,
    'Risk if you contract': 'Can cause digestive problems and in severe cases, liver failure.',
    'About the heading': 'About the Hepatitis A vaccine'
  },
  '/conditions/hepatitis-b/': {
    Name: 'Hep B',
    'When to get vaccinated': 'Ideally atleast 3-4 weeks before travel (accelerated course).',
    Course: '3 doses.',
    Boosters: '1 year.',
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': 'Lifetime for travel unless exposed to the disease.',
    'Side effects': 'Common side effects are soreness at the injection site and fever.',
    Children: 'Can be given from birth.',
    'Additional precautions':
      'Practice safe sex (use a condom). For high risk countries consider carrying a sterile kit.',
    'Certificate requirements': null,
    'Risk if you contract': 'Can cause jaundice and lead to liver failure.',
    'About the heading': 'About the Hepatitis B vaccine'
  },
  '/conditions/diphtheria-tetanus-polio-dtp/': {
    Name: 'DTP',
    'When to get vaccinated': 'Ideally at least 10 days before travel.',
    Course: '1 dose.',
    Boosters: null,
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': '10 years.',
    'Side effects': 'Common side effects are soreness at the injection site and mild fever.',
    Children: 'From the age of 16 years.',
    'Additional precautions': null,
    'Certificate requirements': 'In some countries a certificate is required.',
    'Risk if you contract': 'If contracted can cause serious health issues, which can be fatal.',
    'About the heading': 'About the DTP vaccine'
  },
  '/conditions/dengue-fever/': {
    Name: 'Dengue Fever',
    'When to get vaccinated': 'Ideally at least 3 months before travel.',
    Course: '2 doses.',
    Boosters: null,
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': null,
    'Side effects':
      'Common side effects include mild fever, headache, and pain at the injection site. Rare side effects might include severe allergic reactions.',
    Children: 'From 4 years.',
    'Additional precautions': 'Practice mosquito bite prevention.',
    'Certificate requirements': null,
    'Risk if you contract':
      'Severe dengue fever can lead to life-threatening complications such as severe bleeding, organ failure, and shock.',
    'About the heading': 'About the Dengue Fever vaccine'
  },
  '/conditions/japanese-encephalitis/': {
    Name: 'Jap E',
    'When to get vaccinated': 'Ideally at least 4 weeks before travel.',
    Course: '2 doses.',
    Boosters: '1 year.',
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': '10 years (after 1 year booster).',
    'Side effects':
      'Common side effects are soreness at the injection site and muscle pain and fever.',
    Children: 'From 2 months.',
    'Additional precautions': 'Practice mosquito bite prevention.',
    'Certificate requirements': null,
    'Risk if you contract':
      'There is no cure and can cause severe complications, including brain damage and death.',
    'About the heading': 'About the Japanese Encephalitis vaccine'
  },
  '/conditions/typhoid/': {
    Name: 'Typhoid',
    'When to get vaccinated': 'Ideally at least 2 weeks before travel.',
    Course: '1 dose.',
    Boosters: null,
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': '3 years.',
    'Side effects':
      'Common side effects are soreness at the injection site and muscle pain and fever.',
    Children: 'From 2 years.',
    'Additional precautions': 'Good hand and food hygiene should be followed.',
    'Certificate requirements': null,
    'Risk if you contract':
      'If not immediately diagnosed and treated it can be fatal or lead to severe disabilities.',
    'About the heading': 'About the Typhoid vaccine'
  },
  '/conditions/chicken-pox/': {
    Name: 'Chicken Pox',
    'When to get vaccinated':
      "If you're a parent or guardian bringing a child in for treatment, please remember to bring a photo ID to verify your legal guardianship. Without the necessary documentation, we may be unable to provide services on that day.",
    Course: '2 doses.',
    Boosters: '4-6 weeks apart.',
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': 'Lifetime after 2 doses.',
    'Side effects': 'Fever tiredness and can cause a mild rash.',
    Children: 'Over 1 year.',
    'Additional precautions': null,
    'Certificate requirements': null,
    'Risk if you contract': 'It can cause itchy spots and blisters, high fever, aches and pains.',
    'About the heading': 'About the Chicken Pox vaccine'
  },
  '/conditions/shingles/': {
    Name: 'Shingles',
    'When to get vaccinated': '50 years and over.',
    Course: '2 doses.',
    Boosters: null,
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': null,
    'Side effects': 'Pain at injection site, fever and tiredness.',
    Children: null,
    'Additional precautions': null,
    'Certificate requirements': null,
    'Risk if you contract':
      'Feeling generally unwell, Severe pain, blotchy rash on one side of the body.',
    'About the heading': 'About the Shingles vaccine'
  },
  '/conditions/whooping-cough/': {
    Name: 'Whooping Cough',
    'When to get vaccinated':
      'The whooping cough (Pertussis) vaccination is only available as a combined inoculation in the UK (Diphtheria, Tetanus, Pertussis and Polio). It is an inactivated vaccination.',
    Course: '1 dose.',
    Boosters: null,
    'How is it given': 'Injection in the upper arm.',
    'How long does it last': '10 years.',
    'Side effects': 'Pain at injection site, headache and muscle pain.',
    Children: null,
    'Additional precautions': null,
    'Certificate requirements': null,
    'Risk if you contract':
      'Can cause upper respiratory tract infection leading to severe cough, fever, headache and sore throat.',
    'About the heading': 'About the Whooping Cough vaccine.'
  },
  '/conditions/tuberculosis-testing/': {
    Name: 'Mantoux & TB Testing',
    'When to get vaccinated': 'Matoux test is injected under the skin of the forearm.',
    Course:
      'After 48-72 hours, the arm is checked at the clinic to see if there has been a reaction.',
    Boosters: 'Reaction at the site is measured and checked.',
    'How is it given': 'Mild reaction may mean that you have had the BCG vaccine previously.',
    'How long does it last':
      'Severe reaction would mean further investigation will be required, e.g., blood test and x-ray.',
    'Side effects':
      'A persistent cough with phlegm that may include blood, Chest pain, Night sweats, High temperature or fever, Unintentional weight loss, Poor appetite, Tiredness and fatigue.',
    Children: null,
    'Additional precautions': null,
    'Certificate requirements': null,
    'Risk if you contract':
      'TB can affect any organ of the body and symptoms relate to the infected organ. However, typical symptoms of TB include:',
    'About the heading': 'About the Mantoux & TB Testing'
  }
};

export const info = [
  'Friendly & knowledgable staff',
  'Full range of Vaccines in Stock',
  '92 Registered Yellow Fever Clinics',
  'Same-day appointments',
  'Weekend and evening appointments available',
  '150+ clinics nationwide'
];

export const images = [
  'https://www.citydoc.org.uk/wp-content/uploads/2021/12/s-globalsign.webp',
  'https://www.citydoc.org.uk/wp-content/uploads/2021/12/s-cqc.webp',
  'https://www.citydoc.org.uk/wp-content/uploads/2021/12/s-cqc.webp',
  'https://www.citydoc.org.uk/wp-content/uploads/2021/12/s-cqc.webp'
];

export const descriptionData = {
  '/conditions/yellow-fever/': [
    'It is a requirement on entry to provide a Yellow Fever vaccine certificate for some countries in Africa and South America'
  ],
  '/conditions/rabies/': [
    'Rabies is an acute and fatal viral infection that causes inflammation of the spinal cord and the brain (encephalomyelitis).'
  ],
  '/conditions/hepatitis-a/': [
    'The disease is commonly spread through contaminated food and water, making it strongly recommended for many adults planning to travel to specific countries to receive the Hepatitis A travel vaccine'
  ],
  '/conditions/hepatitis-b/': ['Hepatitis B is a viral infection that is found worldwide.'],
  '/conditions/diphtheria-tetanus-polio-dtp/': [
    'The three-in-one DTP vaccine provides effective immunisation against diphtheria, tetanus, and polio'
  ],
  '/conditions/dengue-fever/': [
    'Dengue fever is a viral illness transmitted through the bite of infected mosquitoes.'
  ],
  '/conditions/japanese-encephalitis/': [
    'Japanese encephalitis is a viral illness found throughout most parts of South and South East Asia.'
  ],
  '/conditions/typhoid/': [
    'Typhoid is an infectious disease caused by the bacteria Salmonella typhi which causes severe symptoms in the digestive system. It can be life-threatening, but if treated early antibiotics are effective.'
  ],
  '/conditions/chicken-pox/': [
    'Chickenpox is a common illness that primarily affects children, but individuals can contract it at any age.'
  ],
  '/conditions/shingles/': [
    'Shingles is a painful condition associated with a blistering rash affecting one side of the body.',
    'In the UK there is a 1 in 4 lifetime risk of developing shingles which is caused by the reactivation of the chickenpox virus.'
  ],
  '/conditions/whooping-cough/': ['Whooping Cough Vaccine - Repevax'],
  '/conditions/tuberculosis-testing/': [
    'Tuberculosis (TB) is an infectious bacterial infection, spread through inhaling tiny droplets from coughs or sneezes of an infected person.'
  ]
};
