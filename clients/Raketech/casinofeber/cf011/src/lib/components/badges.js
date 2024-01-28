const badges = (id) => {
    const htmlStr = `<ul class='${id}__badgeLists'>
        <li>
            <img loading="lazy" src="https://media.casinofeber.se/icons/spelinspektionen.png?h=54&amp;q=100&amp;auto=format"> 
            <span data-svelte-h="svelte-dp2gsy">Licens</span>
        </li>
        <li>
            <img loading="lazy" src="https://media.casinofeber.se/icons/bankid.png?h=54&amp;q=100&amp;auto=format"> 
            <span data-svelte-h="svelte-1p6n4jh">BankID</span>
        </li>
        <li>
            <img style='width:16px' loading="lazy" src="https://media.casinofeber.se/icons/swish.png?h=54&amp;q=100&amp;auto=format"> 
            <span data-svelte-h="svelte-aua2l8">Swish</span>
        </li>
        <li>
            <img loading="lazy" src="https://media.casinofeber.se/icons/trustly.png?h=54&amp;q=100&amp;auto=format"> 
            <span data-svelte-h="svelte-18soav1">Trustly</span>
        </li>
    </ul>`;

    return htmlStr;
};
export default badges;
