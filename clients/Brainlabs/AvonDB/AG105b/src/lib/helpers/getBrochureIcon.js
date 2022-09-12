import { iconCongig } from '../data';

const getBrochureIcon = (title) => {
  const lowecasedTitle = title.toLowerCase();
  let iconName = 'star';

  if (lowecasedTitle.includes('digital')) {
    iconName = 'book';
  } else if (lowecasedTitle.includes('sale') || lowecasedTitle.includes('clearance')) {
    iconName = 'label';
  }
  return {
    icon: iconCongig[iconName],
    iconName
  };
};

export default getBrochureIcon;
