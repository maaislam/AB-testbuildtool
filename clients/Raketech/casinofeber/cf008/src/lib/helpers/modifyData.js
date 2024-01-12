import translationConfig from '../data/translationConfig';

const modifyData = (data) => {
  const modifiedData = [];
  const pageLang = document.querySelector('html').getAttribute('lang');
  const withdrawalAttempt1 = translationConfig['Withdrawal attempt 1'][pageLang];
  const withdrawalAttempt2 = translationConfig['Withdrawal attempt 2'][pageLang];
  const withdrawalWagering = translationConfig['Withdrawal wagering'][pageLang];

  data.forEach((operator) => {
    const operatorName = operator.Operator.toLowerCase().replace(/\s/g, '-');
    const features = [
      {
        [withdrawalAttempt1]: operator['Withdrawal attempt 1']
      },
      {
        [withdrawalAttempt2]: operator['Withdrawal attempt 2']
      },
      {
        [withdrawalWagering]: operator['Withdrawal wagering']
      },
      {
        'Min withdrawal': operator['Min withdrawal']
      },
      {
        'Live chat experience (avg)': operator['Live chat experience (avg)']
      },
      {
        'Speed experience (avg)': operator['Speed experience (avg)']
      }
    ];

    modifiedData.push({
      'A Link': operator['A Link'],
      'B Link': operator['B Link'],
      bonusAmount: operator['Bonus amount'],
      spinsAmount: operator['Free spins amount'],
      name: operatorName,
      features,
      bonusWagering: operator['Bonus wagering'],
      spinsWagering: operator['Free spins wagering'],
      operatorColor: operator.operatorColor
    });
  });
  return modifiedData;
};

export default modifyData;
