<img src="./nextadonis.jpg"/>

# Next.js + Adonis.js Full Typescript Starter Template

Welcome to this starter project that uses Next.JS and Adonis.JS v5

it demos a basic setup on which the typescript types are shared between the frontend and the backend.
You can still however deploy the Next.js and the Adonis.js as separate apps on different providers. (i.e: Vercel and Heroku respectively)



## Development
1. open a terminal and cd into the `packages/shared` directory and run 
```
yarn build:watch
```

2. open a second terminal and  cd into the `packages/backend` directory and run 
```
yarn build:watch
```

3. open a third terminal cd into the `packages/backend` directory and run 
```
yarn dev
```

4. open a fourth terminal cd into the `packages/frontend` directory and run 
```
yarn dev
```

# Deployment
To deploy the backend run the `./deploy_backend.sh` file and deploy the generated `deploy` folder to a service like Heroku. 


