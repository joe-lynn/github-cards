function selectEmbed(idString) {
    document.getElementById(idString).select();
    document.execCommand("copy");
}


$(function() {
    $('#github-profile-form').on("submit",function(e) {
        e.preventDefault(); // cancel the actual submit
        let username = document.getElementById("github-username").value;
        document.getElementById('classique-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + username + '&crd=' + 'classique';
        document.getElementById('obvert-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + username + '&crd=' + 'obvert';
        populateEmbedTexts(username)
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
    //let cards = {"ryan": "cards/obvert.html"};

    if (user != null) {
        if (card != null) {
            document.body.innerHTML = '';
            $('link[rel=stylesheet]').remove();
            $('script').remove();
            let hs = document.getElementsByTagName('style');
            for (let i=0, max = hs.length; i < max; i++) {
                hs[i].parentNode.removeChild(hs[i]);
            }
            let template_url = '';
            switch(card) {
                case 'classique':
                    template_url = 'cards/classique.html';
                    break;
                case 'obvert':
                    template_url = "cards/obvert.html";
            }
            $.get(template_url, function( my_var ) {
                document.body.innerHTML += my_var;
            });
        }
        callApi(user, populateCards);
    } else {
        populateEmbedTexts(user);
    }
});

function populateEmbedTexts(username) {
    if(username == null){
        username = 'joe-lynn'
    }
    let classique_embed_string = '<iframe src="https://joe-lynn.github.io/github-cards/?usr=' + username + '?crd=' + 'classique' + '" height="200" width="400"></iframe>';
    let obvert_embed_string = '<iframe src="https://joe-lynn.github.io/github-cards/?usr=' + username + '?crd=' + 'obvert' + '" height="400" width="300"></iframe>';
    document.getElementById('classique-embed-text').value = classique_embed_string;
    document.getElementById('obvert-embed-text').value = obvert_embed_string;

}