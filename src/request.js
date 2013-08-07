

chrome.webRequest.onBeforeRequest.addListener(function(details) {
    return detectRedirect(details);
}, {
    urls : ["<all_urls>"]
}, ["blocking"]);

function detectRedirect(details) {

    if(!!details.url.match('http://www.theguardian.com') && !details.url.match("\\?view=mobile") && !details.url.match("#comments")){
        return{
            redirectUrl : details.url + '?view=mobile'
        };
    }else if(!!details.url.match('http://www.theguardian.com') && !details.url.match("\\?view=mobile") && !!details.url.match("#comments")){

        var url =  details.url.replace('#comments', '');
        return{
            redirectUrl : url + '?view=mobile#comments'
        };
   }
}
