const customRadioButtonListener = () => {
  //Get the radio buttons
  const yesRadioButton = document.getElementById('yes');
  const noRadioButton = document.getElementById('no');

  //Function to handle the change event
  function handleRadioButtonChange(event) {
    if (event.target.value === 'Yes') {
      console.log('User selected Yes');
      document.querySelector('#formSection [name="prescribed_o2_patient_yes"]').click();
    } else if (event.target.value === 'No') {
      console.log('User selected No');
      document.querySelector('#formSection [name="prescribed_o2_patient_no"]').click();
    }
  }

  //Add event listeners for both radio buttons
  yesRadioButton.addEventListener('change', handleRadioButtonChange);
  noRadioButton.addEventListener('change', handleRadioButtonChange);
};

export default customRadioButtonListener;
