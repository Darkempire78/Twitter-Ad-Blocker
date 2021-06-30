chrome.storage.sync.get(["blockPromotedTweets", "blockPromotedTrends"], function (obj) {
    window.setInterval(function() {
            let blockPromotedTweets = obj && typeof obj.blockPromotedTweets === 'boolean' ? obj.blockPromotedTweets : true;
            let blockPromotedTrends = obj && typeof obj.blockPromotedTrends === 'boolean' ? obj.blockPromotedTrends : true;

            // Get every path (from svg)
            for (const path of document.getElementsByTagName("path")) {
                // If it's the path of the promote svg
                if (path.getAttribute("d") == "M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z") {
                    
                    // REMOVE PROMOTED TWEET
                    console.log(blockPromotedTweets)
                    if (blockPromotedTweets) {
                        const promotedArticle = path.closest("article");
                        if (promotedArticle) promotedArticle.remove();
                    }
                    
                    // REMOVE PROMOTED TRENDS
                    if (blockPromotedTrends) {
                        const promotedTrend = path.closest("div[class='css-1dbjc4n r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l']");
                        if (promotedTrend) promotedTrend.remove();
                    }
                }
            }
    }, 1000);
});