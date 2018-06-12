function selectEmbed() {
    document.getElementById('embed-text').select();
    document.execCommand("copy");
}


$(function() {
    $('#github-profile-form').on("submit",function(e) {
        e.preventDefault(); // cancel the actual submit
        document.getElementById('classique-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + document.getElementById("github-username").value + '&crd=' + 'classique';
        document.getElementById('obvert-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + document.getElementById("github-username").value + '&crd=' + 'obvert';
    });
});

$(document).ready(function(){
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    let user = getParameterByName('usr');
    let card = getParameterByName('crd');
    let primary_color = getParameterByName('pri');
    //TODO: Convert to crd: url dict for use in switch/case?
    //let cards = {"ryan": "cards/ryan-bower-card.html"};

    if (user != null) {
        if (card != null) {
            document.body.innerHTML = '';
            $('link[rel=stylesheet]').remove();
            $('script').remove();
            var hs = document.getElementsByTagName('style');
            for (var i=0, max = hs.length; i < max; i++) {
                hs[i].parentNode.removeChild(hs[i]);
            }
            let template_url = '';
            switch(card) {
                case 'classique':
                    template_url = 'cards/classique.html';
                    break;
                case 'obvert':
                    template_url = "cards/ryan-bower-card.html";
            }
            $.get(template_url, function( my_var ) {
                document.body.innerHTML += my_var;
            });
        }
        insertData(user, primary_color);
    } else {
        //insertData('joe-lynn', '#4078C0');
    }
});