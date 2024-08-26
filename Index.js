require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "uditbro",
  "id": 110079684,
  "node_id": "U_kgDOBo-uxA",
  "avatar_url": "https://avatars.githubusercontent.com/u/110079684?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/uditbro",
  "html_url": "https://github.com/uditbro",
  "followers_url": "https://api.github.com/users/uditbro/followers",
  "following_url": "https://api.github.com/users/uditbro/following{/other_user}",
  "gists_url": "https://api.github.com/users/uditbro/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/uditbro/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/uditbro/subscriptions",
  "organizations_url": "https://api.github.com/users/uditbro/orgs",
  "repos_url": "https://api.github.com/users/uditbro/repos",
  "events_url": "https://api.github.com/users/uditbro/events{/privacy}",
  "received_events_url": "https://api.github.com/users/uditbro/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dev Poonia",
  "company": "Safiertech pvt. ltd.",
  "blog": "safier.tech",
  "location": "Rajnagar Extension, Ghaziabad",
  "email": null,
  "hireable": null,
  "bio": "Passionate and goal driven.",
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2022-07-27T04:04:42Z",
  "updated_at": "2024-08-26T17:31:43Z"
}

app.get('/', (req, res) =>{
  res.send('<h1>Where There is solar, There is SafierTech Solar</h1>')
})
app.get('/youtube', (req, res) =>{
  res.send('<h1>Welcome at SafierTech</h1>')
})

app.get('/github', (req, res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`)
})