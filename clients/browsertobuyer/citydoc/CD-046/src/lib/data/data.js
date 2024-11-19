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
    'When to get vaccinated?':
      'Get the vaccine at least 10 weeks before travelling. It is a specific requirement for this vaccine to bring your passport to the appointment.',
    Course: 'To achieve the best possible immunity, 1 dose is required.',
    Boosters: 'A booster is not usually required, with some exceptions like under 2-year-olds.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'It usually provides protection for life.',
    'Side effects': 'Common side effects are fever, headache and pain.',
    Children: 'Suitable from 9 months of age.',
    'Additional precautions':
      'Some countries require a Yellow Fever certificate before entry which is issued with the vaccination.',
    'Certificate requirements':
      'Some countries require a Yellow Fever certificate before entry which is issued with the vaccination.',
    'Risk if you contract':
      'Severe cases of Yellow Fever can cause organ failure, internal bleeding and can be life-threatening.'
  },
  '/conditions/rabies/': {
    Name: 'Rabies',
    'When to get vaccinated?': 'Complete the full course at least 4 weeks before travelling.',
    Course: 'To achieve the best possible immunity, 3 doses are required.',
    Boosters: 'Recommended for high-risk travellers and those working with animals.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course offers lifetime protection, unless bitten.',
    'Side effects': 'Common side effects are headache, fever and muscle aches.',
    Children: 'Suitable from birth.',
    'Additional precautions':
      'Avoid contact with animals while travelling. If bitten, scratched or licked on an open wound, by any mammal, wash with soap & water and seek immediate medical advice.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract': 'There is no cure for rabies and it is usually fatal.',
    'About the heading': 'About the Rabies vaccine'
  },
  '/conditions/hepatitis-a/': {
    Name: 'Hep A',
    'When to get vaccinated?': 'Get the first dose at least 10 days before travelling.',
    Course: 'To achieve the best possible immunity, 2 doses are required.',
    Boosters:
      '2nd dose should be given ideally 6-12 months after first. The 2nd dose can be given up to 3 years after the 1st dose.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course offers protection for 20+ years.',
    'Side effects': 'Common side effects are soreness at the injection site and fever.',
    Children: 'Suitable from 1 years of age.',
    'Additional precautions': 'Good hand and food hygiene should be followed.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract': 'Can cause digestive problems and in severe cases, liver failure.',
    'About the heading': 'About the Hepatitis A vaccine'
  },
  '/conditions/hepatitis-b/': {
    Name: 'Hep B',
    'When to get vaccinated?':
      'Get the first dose at least 8 weeks before travelling (Accelerated course).',
    Course: 'To achieve the best possible immunity, 3 doses are required.',
    Boosters:
      'If 3 doses given before travel (accelerataed course) a booster can be given at 1 year.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?':
      'The full course offers lifetime protection unless exposed to the disease.',
    'Side effects': 'Common side effects are soreness at the injection site and fever.',
    Children: 'Suitable from birth.',
    'Additional precautions':
      'Practice safe sex (use a condom). For high risk countries consider carrying a sterile kit.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract': 'Can cause jaundice and lead to liver failure.',
    'About the heading': 'About the Hepatitis B vaccine'
  },
  '/conditions/diphtheria-tetanus-polio-dtp/': {
    Name: 'DTP',
    'When to get vaccinated?': 'Get the vaccine at least 10 days before travelling.',
    Course: 'To achieve the best possible immunity, 1 dose is required.',
    Boosters: 'A booster is not usually required.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course offers protection for 10 years.',
    'Side effects': 'Common side effects are soreness at the injection site and mild fever.',
    Children: 'Suitable from 10 years of age.',
    'Additional precautions': 'N/A',
    'Certificate requirements': 'In some countries a certificate is required.',
    'Risk if you contract': 'If contracted can cause serious health issues, which can be fatal.',
    'About the heading': 'About the DTP vaccine'
  },
  '/conditions/dengue-fever/': {
    Name: 'Dengue Fever',
    'When to get vaccinated?': 'Get the first dose at least 3 months before travelling.',
    Course: 'To achieve the best possible immunity, 2 doses are required.',
    Boosters: 'A booster is not usually required.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'Research is ongoing to confirm its duration of immunity.',
    'Side effects':
      'Common side effects include mild fever, headache, and pain at the injection site. Rare side effects might include severe allergic reactions.',
    Children: 'Suitable from 4 years of age.',
    'Additional precautions': 'Practice mosquito bite prevention.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract':
      'Severe dengue fever can lead to life-threatening complications such as severe bleeding, organ failure, and shock.',
    'About the heading': 'About the Dengue Fever vaccine'
  },
  '/conditions/japanese-encephalitis/': {
    Name: 'Jap E',
    'When to get vaccinated?': 'Get the first dose at least 4 weeks before travelling.',
    Course: 'To achieve the best possible immunity, 2 doses are required.',
    Boosters: 'Recommended after 1 year.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course offers protection for 10 years.',
    'Side effects':
      'Common side effects are soreness at the injection site and muscle pain and fever.',
    Children: 'Suitable from 2 months of age.',
    'Additional precautions': 'Practice mosquito bite prevention.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract':
      'There is no cure and can cause severe complications, including brain damage and death.',
    'About the heading': 'About the Japanese Encephalitis vaccine'
  },
  '/conditions/typhoid/': {
    Name: 'Typhoid',
    'When to get vaccinated?': 'Get the vaccine at least 2 weeks before travelling.',
    Course: 'To achieve the best possible immunity, 1 dose is required.',
    Boosters: 'No boosters are required. A new vaccination should be given every 3 years.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The vaccine offers protection for 3 years. ',
    'Side effects':
      'Common side effects are soreness at the injection site, muscle pain and fever.',
    Children: 'Suitable from 2 years of age.',
    'Additional precautions': 'Good hand and food hygiene should be followed.',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract':
      'If not immediately diagnosed and treated it can be fatal or lead to severe disabilities.',
    'About the heading': 'About the Typhoid vaccine'
  },
  '/conditions/chicken-pox/': {
    Name: 'Chicken Pox',
    'When to get vaccinated?':
      "If you're a parent or guardian bringing a child in for treatment, please remember to bring a photo ID to verify your legal guardianship. Without the necessary documentation, we may be unable to provide services on that day.",
    Course: 'To achieve the best possible immunity, 2 doses are required.',
    Boosters: 'Allow 4-6 weeks between doses.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The vaccine offers lifetime protection after 2 doses.',
    'Side effects': 'Common side effects are fever, tiredness and can cause a mild rash.',
    Children: 'Suitable from 1 years of age.',
    'Additional precautions': 'N/A',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract': 'It can cause itchy spots and blisters, high fever, aches and pains.',
    'About the heading': 'About the Chicken Pox vaccine'
  },
  '/conditions/shingles/': {
    Name: 'Shingles',
    'When to get vaccinated?':
      'Recommended for adults over 50 years to prevent the shingles infection.',
    Course: 'To achieve the best possible immunity, 2 doses are required.',
    Boosters: 'A booster is not usually required.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course usually offers protection for 5 years.',
    'Side effects': 'Common side effects are pain at injection site, fever and tiredness.',
    Children: 'Not suitable for children.',
    'Additional precautions': 'N/A',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract':
      'Feeling generally unwell, Severe pain, blotchy rash on one side of the body.',
    'About the heading': 'About the Shingles vaccine'
  },
  '/conditions/whooping-cough/': {
    Name: 'Whooping Cough',
    'When to get vaccinated?':
      'The vaccine is administered as a booster dose only for individuals who have had the full course of 3  doses of the vaccine during childhood or had prior infection with whooping cough.',
    Course: 'To achieve the best possible immunity, 1 dose is required.',
    Boosters: 'A booster is not usually required.',
    'How is it given?': 'Injection in the upper arm.',
    'How long does it last?': 'The full course offers protection for 10 years.',
    'Side effects': 'Pain at injection site, headache and muscle pain.',
    Children: 'Suitable from 10 years of age.',
    'Additional precautions': 'N/A',
    'Certificate requirements': 'No certification required.',
    'Risk if you contract':
      'Can cause upper respiratory tract infection leading to severe cough, fever, headache and sore throat.',
    'About the heading': 'About the Whooping Cough vaccine.'
  },
  '/conditions/tuberculosis-testing/': {
    Name: 'Mantoux & TB Testing',
    'When to get vaccinated?': 'Matoux test is injected under the skin of the fore arm.',
    Course:
      'After 48-72 hours, the arm is checked at the clinic to see if there has been a reaction.',
    Boosters: 'Reaction at the site is measured and checked.',
    'How is it given?': 'Mild reaction may mean that you have had the BCG vaccine previously.',
    'How long does it last?':
      'Severe reaction would mean further investigation will be required ie. blood test and xray.',
    'Side effects':
      'A persistent cough with phlegm that may include blood, chest pain, night sweats, high temperature or fever unintentional weight loss poor appetite tiredness and fatigue.',
    Children: 'N/A',
    'Additional precautions': 'N/A',
    'Certificate requirements': 'N/A',
    'Risk if you contract':
      'TB can affect any organ of the body and symptoms relate to the infected organ. However typical symptoms of TB include-:',
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
  'https://cdn-3.convertexperiments.com/uf/10021806/10025581/Frame%201028.png',
  'https://cdn-3.convertexperiments.com/uf/10021806/10025581/Frame%201029.png'
];

export const descriptionData = {
  '/conditions/yellow-fever/': [
    'Yellow fever is a potentially life-threatening viral illness transmitted by mosquitoes.'
  ],
  '/conditions/rabies/': [
    'Rabies is a deadly viral disease that affects the central nervous system, causing inflammation of the brain and spinal cord'
  ],
  '/conditions/hepatitis-a/': [
    'Hepatitis A is a contagious liver infection caused by the hepatitis A virus (HAV), typically transmitted through contaminated food or water.'
  ],
  '/conditions/hepatitis-b/': [
    'Hepatitis B is a serious viral infection that affects the liver, transmitted through contact with infected bodily fluids, and can lead to both acute and chronic liver disease.'
  ],
  '/conditions/diphtheria-tetanus-polio-dtp/': [
    'The DTP vaccination is a combination vaccine that protects against three serious and potentially life-threatening diseases caused by bacterial and viral infections.'
  ],
  '/conditions/dengue-fever/': [
    'Dengue fever is a viral illness transmitted through the bite of infected mosquitoes.'
  ],
  '/conditions/japanese-encephalitis/': [
    'Japanese encephalitis is a viral illness found throughout most parts of South and South East Asia.'
  ],
  '/conditions/typhoid/': [
    'Typhoid is an infectious disease caused by the bacteria Salmonella typhi which causes severe symptoms in the digestive system.'
  ],
  '/conditions/chicken-pox/': [
    'Chickenpox is a common illness that primarily affects children, but individuals can contract it at any age.'
  ],
  '/conditions/shingles/': [
    'Shingles is a painful condition associated with a blistering rash affecting one side of the body.'
  ],
  '/conditions/whooping-cough/': [
    'Whooping cough (pertussis) is a highly contagious bacterial infection that causes severe coughing fits, which can be especially dangerous for infants and young children.'
  ],
  '/conditions/tuberculosis-testing/': ['']
};
