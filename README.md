# Github Collaborator Adder
This tools allows you to keep a repository private and invite collaborators to join it. 
It can be usefull when trying to add a lot of people from a closed group to a private repository.

This tool is build using koa.

<p align="center">
  <kbd>
    <img src="/screenshot.png" alt="alt text" width="500">
  </kbd>
 </p>

## Preparation
Create a `.env` file in the root folder with the following content:
```
USER=MyUser
REPO=MyRepository
TOKEN=MyPersonnalAccessToken
```

To generate a token, go to `Settings`->`Developer Settings`->`Personnal access tokens` </br>
Direct link: [https://github.com/settings/tokens](https://github.com/settings/tokens)

## Usage
- Standalone: `npm install & npm start`
- Docker: `sudo docker build . & sudo docker run -p 80:8080 -d github`
