const newContent = (ID) => {
  const htmlStr = `<h4>Dice is the better way to hire in tech.</h4>
    <p class="FE-${ID}__subheading">Hiring tech talent in a competitive market is a lot easier when you have a partner who really understands tech.
        With Dice's tech recruitment package, you get:</p><p class="FE-${ID}__hotfix ${ID}__hide"></p>
    <ul class="FE-${ID}__lists">
        <li>Access to more than 5 million of the best technology professionals available</li>
        <li>Tools you need to find the right fit for your roles, needs and culture</li>
        <li>Best-in-class, white glove support from our hiring specialists, who know tech professionals inside and out</li>
    </ul>
    <div class="FE-${ID}__freemonthpromo">
        <div class="left-wrapper">
            <h4>WIN TECH TALENT IN 2023 WITH A FREE MONTH FROM DICE</h4>
            <div class="subheading">We’re offering one month of our annual tech recruitment services package for free to help you win skilled tech candidates in a tight market next year. Buy an annual recruitment package by December 31 and get 12 months for the price of 11.
            </div>
        </div>
        <div class="right-wrapper">
            <span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512"
                     nighteye="disabled">
                    
                    <path
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                    </path>
                </svg></span>
        </div>
        
    </div>`;
  return htmlStr;
};

export default newContent;
