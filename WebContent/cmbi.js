var cmbi = {
    isMobile : false,
    isQQ : false,
    is360 : false,
    isUC : false
};
cmbi.init = function() {
    var ua = navigator.userAgent.toLowerCase();

    // is mobile browser?
    if (ua.indexOf('mobile') != -1) {
        this.isMobile = true;

        // QQ Browser
        if (ua.indexOf('mqqbrowser') !=-1)
            this.isQQ = true;
        // 360 Browser
        if (ua.indexOf('360browser') !=-1)
            this.is360 = true;
        // UC Browser
        if (ua.indexOf(' uc ') !=-1)
            this.isUC = true;
    }
};
