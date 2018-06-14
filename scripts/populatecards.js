function populateCards(response_parse, pri) {
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
}