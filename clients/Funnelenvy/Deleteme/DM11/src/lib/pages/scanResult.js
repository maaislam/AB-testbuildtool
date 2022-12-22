import header from '../components/header';

const scanResult = (id) => {
  const fullname = sessionStorage.getItem(`${id}__fullname`);
  const scanCount = sessionStorage.getItem(`${id}__count`);

  const htmlStr = `
    ${header(id)}
    <div class="${id}__scanresults ${id}__container site">
        <div class="${id}__page-wrapper">
            <div class="${id}__scanresults--fullname">${fullname}</div>
            <div class="${id}__scanresults--scancount">
                <div class="count">
                    <span>${scanCount}</span>
                    <span>Profiles found</span>
                </div>
                <div class="text">
                    <span>?</span>
                </div>
            </div>
            <div class="${id}__scanresults--why"> 
                <a href="">Why my private info is public?</a>
            </div>
            <div class="${id}__scanresults--resultheader">
                <div class="col1 mobile-view">RECORDS</div>
                <div class="col1 desktop-view">WAS FOUND ON</div>
                <div class="col2 desktop-view">PEOPLE</div>
                <div class="col3 desktop-view">LOCATION</div>
                <div class="col4 desktop-view">AGE</div>
                <div class="col5">REMOVAL TIME</div>
            </div>
            <div class="${id}__scanresults--resultrows"></div>
            <div class="${id}__scanresults--resultfooter">
                <div class="copy">
                    <p class="small">
                        Our initial scan found at least ${scanCount} more data records containing your personal information.<br/>
                        DeleteMe's privacy experts remove you from Google and 100+ Data Brokers all year long. Let us get to work.
                    </p>
                    <div class="test__button"></div>
                </div>
            </div>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default scanResult;
