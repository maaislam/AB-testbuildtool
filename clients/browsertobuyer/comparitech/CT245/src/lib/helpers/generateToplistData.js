const generateToplistData = (id) => {
    const listItems = document.querySelectorAll('.entry-content ol li');
    const dataList = [];

    listItems.forEach((li, index) => {
        const anchor = li.querySelector('a[href*="/go/"][href*="/l/list"]');

        //Case 1: No anchor means no link → Handle differently
        const link = anchor ? anchor.getAttribute('href') : null;
        const nameWithSpan = anchor ? anchor.innerText : li.querySelector('b')?.innerText || 'Unknown Provider';
        const name = nameWithSpan.replace(/\(.*?\)/, '').replace(/EDITOR’S CHOICE/i, '').trim();
        const isEditorChoice = anchor?.innerHTML.includes('EDITOR’S CHOICE');

        //Case 2: Extract description & remove last sentence
        const fullText = li.textContent.replace(/\s+/g, ' ').trim();
        let description = fullText.replace(nameWithSpan, '').trim();
        const lastSentenceMatch = description.match(/Start a .*$/);
        if (lastSentenceMatch) {
            description = description.replace(lastSentenceMatch[0], '').trim();
        }

        //Case 3: Extract free trial link (from last <a>, excluding `/l/list`)
        let trialLink = null;
        let trialText = null;
        const allLinks = [...li.querySelectorAll('a')];

        allLinks.forEach((a) => {
            if (!a.href.includes('/l/list')) {
                trialLink = a.href;
                trialText = a.textContent;
            }
        });

        //Case 4: If no trial link found, check name for "trial" or "demo"
        if (!trialLink && /trial|demo/i.test(nameWithSpan)) {
            trialLink = link;
            trialText = 'Free Trial';
        }

        dataList.push({
            id,
            index: index + 1,
            name,
            link,
            isEditorChoice,
            description,
            trialLink,
            trialText
        });
    });

    return dataList;
};

export default generateToplistData;
