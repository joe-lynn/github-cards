
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
    let cards = {"ryan": "cards/ryan-bower-card.html"}

    if (user != null) {
        if (card != null) {
            document.body.innerHTML = '';
            $('link[rel=stylesheet]').remove();
            $('script').remove();
            var hs = document.getElementsByTagName('style');
            for (var i=0, max = hs.length; i < max; i++) {
                hs[i].parentNode.removeChild(hs[i]);
            }
            switch(card) {
                case 'classique':
                    document.body.innerHTML += '<!DOCTYPE html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="UTF-8">\n' +
                        '\n' +
                        '    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>\n' +
                        '    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>\n' +
                        '    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>\n' +
                        '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">\n' +
                        '\n' +
                        '</head>\n' +
                        '<style>\n' +
                        '\n' +
                        '</style>\n' +
                        '<body>\n' +
                        '    <div class="card shadow-sm rounded mx-auto card-body-container">\n' +
                        '        <div class="card-body">\n' +
                        '            <div class="row">\n' +
                        '                <div class="col-md-2 avatar-container">\n' +
                        '                    <a id="" class="gc-avatar-link" href="">\n' +
                        '                        <img class="img-thumbnail gc-avatar-url" height="100" width="100" src="">\n' +
                        '                    </a>\n' +
                        '                </div>\n' +
                        '                <div class="col-md-5">\n' +
                        '                    <div class="row">\n' +
                        '                        <a href="" class="gc-name"></a>\n' +
                        '                    </div>\n' +
                        '                    <div class="row">\n' +
                        '                        <a href="" class="gc-login"></a>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '                <div class="col-md-0">\n' +
                        '\n' +
                        '                </div>\n' +
                        '                <div class="col-md-4">\n' +
                        '                    <button class="follow-button">Follow</button>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '            <div class="row mt-2">\n' +
                        '                <div class="col-md-4 border-right border-top border-bottom py-2 link-section">\n' +
                        '                    <a class="gc-repos-link" href="">\n' +
                        '                        <div class="gc-num-repos"></div>\n' +
                        '                        <div class="num-label">REPOS</div>\n' +
                        '                    </a>\n' +
                        '                </div>\n' +
                        '                <div class="col-md-4 border-right border-top border-bottom py-2 link-section">\n' +
                        '                    <a class="gc-gists-link" href="">\n' +
                        '                        <div class="gc-num-gists"></div>\n' +
                        '                        <div class="num-label">GISTS</div>\n' +
                        '                    </a>\n' +
                        '                </div>\n' +
                        '                <div class="col-md-4 border-top border-bottom py-2 link-section">\n' +
                        '                    <a class="gc-followers-link" href="">\n' +
                        '                        <div class="gc-num-followers"></div>\n' +
                        '                        <div class="num-label">FOLLOWERS</div>\n' +
                        '                    </a>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '            <div class="row mt-2">\n' +
                        '                <div class="col-md-12">\n' +
                        '                    <div class="gc-bio-text"></div>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '    </div>\n' +
                        '</div>\n' +
                        '</body>\n' +
                        '</html>';
                    break;
                case 'obvert':
                    $.get("cards/ryan-bower-card.html", function( my_var ) {
                        document.body.innerHTML += my_var;
                    });
            }
        }
        insertData(user, primary_color);
    } else {
        //insertData('joe-lynn', '#4078C0');
    }
});

$(function() {
    $('#github-profile-form').on("submit",function(e) {
        e.preventDefault(); // cancel the actual submit
        document.getElementById('classique-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + document.getElementById("github-username").value + '&crd=' + 'classique';
        document.getElementById('obvert-iframe').src = 'https://joe-lynn.github.io/github-cards/?usr=' + document.getElementById("github-username").value + '&crd=' + 'obvert';
    });
});

function insertData(username, pri) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response_parse = JSON.parse(this.responseText);

            let username = response_parse['login'];
            let username_at = '@' + username;
            let name = response_parse['name'];
            let avatar_url = response_parse['avatar_url'];
            let profile_url = response_parse['html_url'];
            let num_repos = response_parse['public_repos'];
            let num_followers = response_parse['followers'];
            let num_gists = response_parse['public_gists'];
            let bio_text = response_parse['bio'];

            let repos_url = 'https://github.com/' + username + '?tab=repositories';
            let followers_url = 'https://github.com/' + username + '?tab=followers';
            let gists_url = 'https://gist.github.com/' + username;

            let embed_string = '<iframe src="https://joe-lynn.github.io/github-cards/?usr=' + username + '?crd=' + 'classique' + '" height="200" width="400"></iframe>';

            let logins = document.getElementsByClassName('gc-login');
            for(let i = 0; i < logins.length; i++){
                logins[i].innerHTML = username_at;
                logins[i].href = profile_url;
            }
            let names = document.getElementsByClassName('gc-name');
            for(let i = 0; i < names.length; i++){
                names[i].innerHTML = name;
                names[i].href=profile_url;
            }
            let avatarUrls = document.getElementsByClassName("gc-avatar-url");
            for(let i = 0; i < avatarUrls.length; i++){
                avatarUrls[i].src=avatar_url;
            }
            let avatarLinks = document.getElementsByClassName("gc-avatar-link");
            for(let i = 0; i < avatarLinks.length; i++){
                avatarLinks[i].href=profile_url;
            }
            let numRepos = document.getElementsByClassName('gc-num-repos');
            for(let i = 0; i < numRepos.length; i++){
                numRepos[i].innerHTML = num_repos;
            }
            let reposLinks = document.getElementsByClassName('gc-repos-link');
            for(let i = 0; i < reposLinks.length; i++){
                reposLinks[i].href = repos_url;
            }
            let numGists = document.getElementsByClassName('gc-num-gists');
            for(let i = 0; i < numGists.length; i++){
                numGists[i].innerHTML = num_gists;
            }
            let gistsLinks = document.getElementsByClassName('gc-gists-link');
            for(let i = 0; i < gistsLinks.length; i++){
                gistsLinks[i].href = gists_url;
            }
            let numFollowers = document.getElementsByClassName('gc-num-followers');
            for(let i = 0; i < numFollowers.length; i++){
                numFollowers[i].innerHTML = num_followers;
            }
            let followersLinks = document.getElementsByClassName('gc-followers-link');
            for(let i = 0; i < followersLinks.length; i++){
                followersLinks[i].href = followers_url;
            }
            let bioTexts = document.getElementsByClassName('gc-bio-text');
            for(let i = 0; i < bioTexts.length; i++){
                bioTexts[i].innerHTML = bio_text;
            }
            let primaries = document.getElementsByClassName('gc-primary');
            for(let i = 0; i < primaries.length; i++){
                    primaries[i].style.backgroundColor = pri;
            }
            //document.getElementById('embed-text').value = embed_string;
        }
    };
    let access_token = '?access_token=215e5a221f3310884f9f0b3142fa724a23e4bb70';
    let username_url = 'https://api.github.com/users/' + username;
    xhttp.open("GET", username_url, true);
    xhttp.send();
}

function selectEmbed() {
    document.getElementById('embed-text').select();
    document.execCommand("copy");
}
// relevant Response:
// {
//     "login": "joe-lynn",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/18252709?v=4",
//     "html_url": "https://github.com/joe-lynn",
//     "name": null,
//     "company": null,
//     "hireable": true,
//     "bio": "Software Engineering Student at Rochester Institute Of Technology",
//     "public_repos": 14,
//     "public_gists": 0,
//     "followers": 3,
//     "following": 5,
// }

// Response:
// {
//     "login": "joe-lynn",
//     "id": 18252709,
//     "node_id": "MDQ6VXNlcjE4MjUyNzA5",
//     "avatar_url": "https://avatars2.githubusercontent.com/u/18252709?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/joe-lynn",
//     "html_url": "https://github.com/joe-lynn",
//     "followers_url": "https://api.github.com/users/joe-lynn/followers",
//     "following_url": "https://api.github.com/users/joe-lynn/following{/other_user}",
//     "gists_url": "https://api.github.com/users/joe-lynn/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/joe-lynn/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/joe-lynn/subscriptions",
//     "organizations_url": "https://api.github.com/users/joe-lynn/orgs",
//     "repos_url": "https://api.github.com/users/joe-lynn/repos",
//     "events_url": "https://api.github.com/users/joe-lynn/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/joe-lynn/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": "United States",
//     "email": null,
//     "hireable": true,
//     "bio": "Software Engineering Student at Rochester Institute Of Technology",
//     "public_repos": 14,
//     "public_gists": 0,
//     "followers": 3,
//     "following": 5,
//     "created_at": "2016-04-04T00:57:43Z",
//     "updated_at": "2018-06-06T17:30:42Z"
// }