
$(document).ready(function(){
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var user = getParameterByName('usr');
    document.body.innerHTML = '';
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
        '                                        <button class="follow-button" >Follow on Github</button>\n' +
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
        '                        </div>'
    insertData('joe-lynn');
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
            console.log(response_parse);

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

            document.getElementById('login').innerHTML = username_at;
            document.getElementById('login').href = profile_url;
            document.getElementById('name').innerHTML = name;
            document.getElementById('name').href=profile_url;
            document.getElementById("avatar-url").src=avatar_url;
            document.getElementById("avatar-link").href=profile_url;
            document.getElementById('num-repos').innerHTML = num_repos;
            document.getElementById('repos-link').href = repos_url;
            document.getElementById('num-gists').innerHTML = num_gists;
            document.getElementById('gists-link').href = gists_url;
            document.getElementById('num-followers').innerHTML = num_followers;
            document.getElementById('followers-link').href = followers_url;
            document.getElementById('bio-text').innerHTML = bio_text;
        }
    };
    let username_url = 'https://api.github.com/users/' + username;
    xhttp.open("GET", username_url, true);
    xhttp.send();
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