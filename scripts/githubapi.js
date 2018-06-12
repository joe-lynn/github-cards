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
            pri = '#' + pri;
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