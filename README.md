![image](https://user-images.githubusercontent.com/8585011/109405409-14023b80-794f-11eb-95bc-b58f7a8e572a.png)

# Next.js + Adonis.js Full Typescript Starter Template


[Demo](https://www.youtube.com/watch?v=qRhMPseLNRI)

Welcome to this starter project that uses Next.JS and Adonis.JS v5

it demos a basic setup on which the typescript types are shared between the frontend and the backend.
You can still however deploy the Next.js and the Adonis.js as separate apps on different providers. (i.e: Vercel and Heroku respectively)



## Development 
0. open a terminal and cd into the projects' root directory directory and run 
```
yarn
```

1. open a terminal and run 
```
yarn build-watch
```

2. open a second terminal and run 
```
yarn start-server
```

The Next.js frontend will be running at localhost:3000

# First time DB setup

1. Open `packages/backend/.env` and set the `PG_USER`, `PG_PASSWORD` and `PG_DB_NAME` env vars.

2. cd into `packages/backend/` and run the migrations with `node ace migration:run`

# Deployment
To deploy the backend run the `./deploy_backend.sh` file and deploy the generated `deploy` folder to a service like Heroku. 


