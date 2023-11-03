// Function to parse query parameters from the URL
function getQueryParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
}
    const queryParams = getQueryParameters();
    const queryParamValue = queryParams.get("q");
