

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return detectRedirect(details);
}, {
    urls : ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {

    if(details.url.match('http://www.guardian.co.uk')){
       return{
            redirectUrl : details.url.replace('www', 'm')
       };
    }
}
