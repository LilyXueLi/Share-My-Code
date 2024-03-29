console.log("from background")

chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        console.log(changeInfo.status);
        if (changeInfo.status != 'complete')
            return;

        chrome.tabs.get(tabId, current_tab_info => {
            if (/^https:\/\/leetcode\.com\/problems/.test(current_tab_info.url)) {
                chrome.tabs.executeScript(null, { file: './foreground.js' }, () => {
                    console.log("triggering onActivated scirpt");
                })
            }
        });
    }
);
