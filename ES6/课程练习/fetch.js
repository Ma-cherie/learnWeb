(async ()=>{
    const url = 'https://api.github.com/users';
    const resp = await fetch(url);
    const users = await resp.json();
    const username = users[1].login;
    console.log(username)
    const url2 = `https://api.github.com/users/${username}/repos`;
    const resp2 = await fetch(url2);
    const repos = await resp2.json();
    console.log(repos)
})()