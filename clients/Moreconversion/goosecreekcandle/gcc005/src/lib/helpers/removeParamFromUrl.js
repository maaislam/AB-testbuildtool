const removeParamFromUrl = (url, paramToRemove) => {
    const urlObj = new URL(url);

    const { searchParams } = urlObj;

    if (searchParams.has(paramToRemove)) {
        searchParams.delete(paramToRemove);

        urlObj.search = searchParams.toString();
    }
    return urlObj.href;
};
export default removeParamFromUrl;
