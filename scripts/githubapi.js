function callApi(username, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response_parse = JSON.parse(this.responseText);
            callback(response_parse);
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