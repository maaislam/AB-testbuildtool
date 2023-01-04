const zipcodeWrapper = (ID) => `
    <div class="${ID}__mktoFormRow mktoFormRow form-row fe_step2">
    <div class="mktoFieldDescripto">
        
        <div class="${ID}__mktoRequiredField mktoRequiredField"><label for="Zipcode"
                   id="LblZipcode"
                   class="mktoLabel mktoHasWidth">
                <div class="mktoAsterix">*</div>Zipcode:
            </label>
            <div class="mktoGutter mktoHasWidth zipcode-anchor"></div>
            <datalist id="${ID}__searchsuggestions" class="${ID}__searchsuggestions"></datalist>   
        </div>
    </div>
  </div>`;

export default zipcodeWrapper;
