const scanRecordRow = (id, records) => {
  const recordRow = (record) => {
    const { address, age, name } = record.personInfoList[0];
    const { site } = record;
    const removalTimes = {
      addresses: '3-5 Days',
      peoplefinders: '10 Days',
      instantcheckmate: '7 Days',
      inforver: '7 Days',
      nuwber: '24 Hours',
      ussearch: 'Up to 6 Weeks',
      idtrue: 'Instant',
      beenverified: '10 Days',
      spokeo: '3-5 Days',
      intelius: 'Up to 14 Days'
    };

    const htmlStr = `
    <div class="${id}__scanresults--resultrow" data-site="${site}">
        <div class="mobile-view">
          <div class="record-site">${site}</div>
          <div class="record-profile">${name}</div>
          <div class="record-location">${address}</div>
          <div class="record-age">${age}</div>
          
        </div>
        <div class="record-site desktop-view">${site}</div>
        <div class="record-profile desktop-view">${name}</div>
        <div class="record-location desktop-view">${address}</div>
        <div class="record-age desktop-view">${age}</div>
        <div class="record-removaltime ">${removalTimes[site]}</div>
    </div>
  `;
    return htmlStr.trim();
  };

  return records
    .map((record) => {
      return recordRow(record);
    })
    .join('');
};

//window.feDm11ScanRecordRow = scanRecordRow;

export default scanRecordRow;
