
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
                    document.body.innerHTML += '<div class="card shadow-sm bg-white rounded" style="width: 400px; height: 200px">\n' +
                        '                            <div class="card-body">\n' +
                        '                                <div class="row">\n' +
                        '                                    <div class="col-md-2">\n' +
                        '                                        <a id="avatar-link" href=""><img class="img-thumbnail" id="avatar-url" height="100" width="100" src=""></a>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="col-md-5">\n' +
                        '                                        <div class="row">\n' +
                        '                                            <a href="" id="name" style="color: #292f33; font-weight: bold; font-size: 1.2em;">Joe Lynn</a>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="row">\n' +
                        '                                            <a href="" id="login" style="color: #808080;">@joe-lynn</a>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="col-md-0">\n' +
                        '\n' +
                        '                                    </div>\n' +
                        '                                    <div class="col-md-4">\n' +
                        '                                        <button class="follow-button" >Follow</button>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="row mt-3">\n' +
                        '                                    <div class="col-md-4 border-right border-top border-bottom py-2">\n' +
                        '                                        <a id="repos-link" href=""> <div style="color: black; font-weight: bold;" id="num-repos"></div> <div style="color: #808080; font-size: 0.9em;">REPOS</div></a>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="col-md-4 border-right border-top border-bottom py-2">\n' +
                        '                                        <a id="gists-link" href=""> <div style="color: black; font-weight: bold;" id="num-gists"></div> <div style="color: #808080; font-size: 0.9em;">GISTS</div></a>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="col-md-4 border-top border-bottom py-2">\n' +
                        '                                        <a id="followers-link" href=""> <div style="color: black; font-weight: bold;" id="num-followers"></div> <div style="color: #808080; font-size: 0.9em;">FOLLOWERS</div></a>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="row mt-2">\n' +
                        '                                    <div class="col-md-12">\n' +
                        '                                        <div id="bio-text" style="font-size: 0.8em; color: #808080;"></div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>\n' +
                        '                        </div>';
                    break;
                case 'obvert':
                    document.body.innerHTML += '<!DOCTYPE html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="UTF-8">\n' +
                        '</head>\n' +
                        '<style>\n' +
                        '    body {\n' +
                        '        display: inline-block;\n' +
                        '        margin:0;\n' +
                        '        padding:0;\n' +
                        '        font-family: Sans-Serif;\n' +
                        '    }\n' +
                        '    a {\n' +
                        '        text-decoration: none;\n' +
                        '    }\n' +
                        '    .card-body {\n' +
                        '        width: 300px;\n' +
                        '        height: 378px;\n' +
                        '        border-radius: 10px;\n' +
                        '        border: 2px solid lightgray;\n' +
                        '        background-color: white;\n' +
                        '    }\n' +
                        '    .card-top-section {\n' +
                        '        height: 40px;\n' +
                        '    }\n' +
                        '    .card-bottom-section{\n' +
                        '        margin-top: 80px; /* calc: img 75px + border 5px */\n' +
                        '        border-bottom-left-radius: 7px;\n' +
                        '        border-bottom-right-radius: 7px;\n' +
                        '        background-color: #4078C0; /* Github official blue */\n' +
                        '    }\n' +
                        '    .github-logo-holder {\n' +
                        '        background-color: transparent;\n' +
                        '    }\n' +
                        '    .github-logo-holder img {\n' +
                        '        padding: 5px;\n' +
                        '    }\n' +
                        '    .profile-img-holder {\n' +
                        '        position: relative;\n' +
                        '        width: 160px;\n' +
                        '        margin-left:auto;\n' +
                        '        margin-right:auto;\n' +
                        '    }\n' +
                        '    .profile-img-holder .profile-img {\n' +
                        '\n' +
                        '        width: 150px;\n' +
                        '        height: 150px;\n' +
                        '        border-radius: 100px;\n' +
                        '        background: no-repeat center\n' +
                        '        URL("https://avatars1.githubusercontent.com/u/13069486?s=400&u=6ab8ffd5b3bfed00aea69b070d141e2620fc6f7c&v=4");\n' +
                        '        background-size: cover;\n' +
                        '        border: 5px solid white;\n' +
                        '    }\n' +
                        '    .profile-desc .profile-full-name {\n' +
                        '        margin: 0px;\n' +
                        '        padding-top: 100px;\n' +
                        '        font-size: 32px;\n' +
                        '    }\n' +
                        '    .profile-desc .profile-user-name {\n' +
                        '        margin: 0px;\n' +
                        '        padding-top: 10px;\n' +
                        '        padding-bottom: 10px;\n' +
                        '        font-size: 23px;\n' +
                        '    }\n' +
                        '    .profile-stats {\n' +
                        '        border-top: 1px solid lightgray;\n' +
                        '    }\n' +
                        '    .stat {\n' +
                        '        display:inline-block;\n' +
                        '        width: 33.3333%;\n' +
                        '    }\n' +
                        '    .stat .stat-contents {\n' +
                        '        border-right: solid 1px lightgray;\n' +
                        '        margin-top: 10px;\n' +
                        '        margin-bottom: 10px;\n' +
                        '    }\n' +
                        '    .profile-stats .stat:last-child .stat-contents {\n' +
                        '        border-right: none;\n' +
                        '    }\n' +
                        '    .stat .stat-amount,\n' +
                        '    .stat .stat-name {\n' +
                        '        margin: 0px;\n' +
                        '    }\n' +
                        '    .profile-desc {\n' +
                        '        text-align:center;\n' +
                        '        color: white;\n' +
                        '    }\n' +
                        '    .profile-stats{\n' +
                        '        text-align:center;\n' +
                        '        color: #333;\n' +
                        '    }\n' +
                        '</style>\n' +
                        '<body>\n' +
                        '<div class="card-container">\n' +
                        '    <a href="https://github.com/ryan-bower" target="_blank" >\n' +
                        '        <div class="card-body">\n' +
                        '            <div class="card-top-section">\n' +
                        '                <div class="github-logo-holder">\n' +
                        '                    <img src="assets/GitHub-Mark-32px.png"\n' +
                        '                         alt="Github Logo" width="25px">\n' +
                        '                </div>\n' +
                        '                <div class="profile-img-holder">\n' +
                        '                    <div class="profile-img"></div>\n' +
                        '                    <!-- img src="https://avatars1.githubusercontent.com/u/13069486?s=400&u=6ab8ffd5b3bfed00aea69b070d141e2620fc6f7c&v=4"\n' +
                        '                         alt="Github Profile Picture" width="100px" -->\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '            <div class="card-bottom-section">\n' +
                        '                <div class="profile-desc">\n' +
                        '                    <h1 class="profile-full-name gc-name"></h1>\n' +
                        '                    <h1 class="profile-user-name gc-login"></h1>\n' +
                        '                </div>\n' +
                        '                <div class="profile-stats">\n' +
                        '                    <!-- TODO: Replace with dynamic js solution -->\n' +
                        '                    <div class="stat">\n' +
                        '                        <div class="stat-contents gc-repos-link">\n' +
                        '                            <h1 class="stat-amount gc-num-repos"></h1>\n' +
                        '                            <p class="stat-name">Repos</p>\n' +
                        '                        </div>\n' +
                        '                    </div><!--\n' +
                        '                    --><div class="stat">\n' +
                        '                        <div class="stat-contents gc-gists-links">\n' +
                        '                            <h1 class="stat-amount gc-num-gists"></h1>\n' +
                        '                            <p class="stat-name">Gists</p>\n' +
                        '                        </div>\n' +
                        '                    </div><!--\n' +
                        '                    --><div class="stat">\n' +
                        '                        <div class="stat-contents">\n' +
                        '                            <h1 class="stat-amount">5</h1>\n' +
                        '                            <p class="stat-name">Followers</p>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        '    </a>\n' +
                        '</div>\n' +
                        '</body>\n' +
                        '</html>';
            }
        }
        insertData(user);
    } else {
        insertData('joe-lynn');
    }
});

$(function() {
    $('#github-profile-form').on("submit",function(e) {
        e.preventDefault(); // cancel the actual submit
        insertData(document.getElementById("github-username").value);
    });
});

function insertData(username) {
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
            document.getElementById('embed-text').value = embed_string;
        }
    };
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