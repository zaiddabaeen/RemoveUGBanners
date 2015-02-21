var classes = ['b-banner-bottom-default tp_hint', 'b bdrunion', 'd_l', 'recom_bl', 'adv_bottom', 'red_l', 'text-message-cont'];

var ids = ['r_a', 'get_app_tooltip'];

[].forEach.call(classes, function(entry) {
          var elements = document.getElementsByClassName(entry);
                [].forEach.call(elements, function(entry2) {
                    if(entry2 !== undefined) entry2.parentNode.removeChild(entry2);
                });
});

[].forEach.call(ids, function(entry) {
            var element = document.getElementById(entry);
            if(element !== null) element.parentNode.removeChild(element);
});