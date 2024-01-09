const modifyData = (data) => {
    const modifiedData = [];

    data.forEach((operator) => {
        const operatorName = operator.Operator.toLowerCase().replace(/\s/g, '-');
        const features = [
            {
                'Withdrawal attempt 1': operator['Withdrawal attempt 1']
            },
            {
                'Withdrawal attempt 2': operator['Withdrawal attempt 2']
            },
            {
                'Withdrawal wagering': operator['Withdrawal wagering']
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
            bonusAmount: operator['Bonus amount'],
            spinsAmount: operator['Free spins amount'],
            name: operatorName,
            features,
            bonusWagering: operator['Bonus wagering'],
            spinsWagering: operator['Free spins wagering']
        });
    });
    return modifiedData;
};

export default modifyData;
