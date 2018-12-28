$(document).ready(function () {
    var v = 1;
    var bar = new ldBar("#circleBar", {
        "stroke": '#0e103d',
        "stroke-width": 5
    }).set(v);
    $('#load').on('click', function () {
        v += 10;
        var bar = new ldBar("#circleBar", {
            "stroke": '#0e103d',
            "stroke-width": 5
        }).set(v);
    });
});
