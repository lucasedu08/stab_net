(function() {
    var adImages = $('#ad-carousel img');
    var currentAd = 0;
    var progressIntervalId;
    var intervalId = setInterval(function() {
        progressIntervalId = setInterval(function() {
            var barWidth = $('#ad-carousel .progress .bar').width();
            var maxWidth = $('#ad-carousel .progress').width();
            if (barWidth >= maxWidth) {
                clearInterval(progressIntervalId);
                $('#ad-carousel .progress .bar').css('width', '0');
            }}}
            

