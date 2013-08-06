

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return detectRedirect(details);
}, {
    urls : ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {

    if(!!details.url.match('http://www.theguardian.com') && !details.url.match("\\?view=mobile")){
       return{
            redirectUrl : details.url + '?view=mobile'
       };
    }
}
