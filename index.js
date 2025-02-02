require ('dotenv').config
const express = require('express')
const app = express()
const port = 4000

const githubdata={
    "login": "pratapmajge",
    "id": 175096420,
    "node_id": "U_kgDOCm_CZA",
    "avatar_url": "https://avatars.githubusercontent.com/u/175096420?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pratapmajge",
    "html_url": "https://github.com/pratapmajge",
    "followers_url": "https://api.github.com/users/pratapmajge/followers",
    "following_url": "https://api.github.com/users/pratapmajge/following{/other_user}",
    "gists_url": "https://api.github.com/users/pratapmajge/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pratapmajge/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pratapmajge/subscriptions",
    "organizations_url": "https://api.github.com/users/pratapmajge/orgs",
    "repos_url": "https://api.github.com/users/pratapmajge/repos",
    "events_url": "https://api.github.com/users/pratapmajge/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pratapmajge/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Pratap",
    "company": null,
    "blog": "",
    "location": "pune",
    "email": null,
    "hireable": null,
    "bio": "I'm intersted in web development and designing also. I've experties in it from 2 years",
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-09T07:24:35Z",
    "updated_at": "2025-02-01T18:56:40Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
  res.send("Pratap")
})

app.get('/login' , (req , res) => {
  res.send('<h1>Please Login</h1>')
})

app.get('/github' , (req , res) => {
  res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})