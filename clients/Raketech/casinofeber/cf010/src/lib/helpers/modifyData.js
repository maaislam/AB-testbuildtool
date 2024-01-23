import translationConfig from '../data/translationConfig';

const modifyData = (data) => {
  const modifiedData = [];
  const pageLang = document.querySelector('html').getAttribute('lang');
  const withdrawalAttempt1 = translationConfig['Withdrawal attempt 1'][pageLang];
  const withdrawalAttempt2 = translationConfig['Withdrawal attempt 2'][pageLang];
  const withdrawalWagering = translationConfig['Withdrawal wagering'][pageLang];
  const speedExperience = translationConfig['Speed experience (avg)'][pageLang];
  const liveChatExperience = translationConfig['Live chat experience (avg)'][pageLang];
  const combinedRatings = translationConfig['Combined ratings from other affiliates'][pageLang];

  data.forEach((operator) => {
    const operatorName = operator.Operator.toLowerCase().replace(/\s/g, '-');
    const features = [
      {
        [withdrawalWagering]: operator['Withdrawal wagering']
      },
      {
        [withdrawalAttempt1]: operator['Withdrawal attempt 1']
      },
      {
        [withdrawalAttempt2]: operator['Withdrawal attempt 2']
      },
      {
        [speedExperience]: operator['Speed experience (avg)']
      },
      {
        [liveChatExperience]: operator['Live chat experience (avg)']
      },
      {
        [combinedRatings]: operator['Combined ratings from other affiliates']
      }
    ];

    modifiedData.push({
      'A Link': operator['A Link'],
      'B Link': operator['B Link'],
      bonusAmount: operator['Bonus amount'],
      spinsAmount: operator['Free spins amount'],
      name: operatorName,
      displayName: operator.Operator,
      features,
      bonusWagering: operator['Bonus wagering'],
      spinsWagering: operator['Free spins wagering'],
      operatorColor: operator.operatorColor
    });
  });
  return modifiedData;
};

export default modifyData;
