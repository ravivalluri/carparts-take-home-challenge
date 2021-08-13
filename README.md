# Car parts Take home Coding Challenge

> Example on using create-react-app with a Node Express Backend

## Usage

Install server and client dependencies

```bash
npm i
cd client && npm i && cd ..
```

To start the server and client at the same time (from the root of the project)

```bash
npm run dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on <http://localhost:5000>

```bash
NODE_ENV=production npm run dev:server
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```bash
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**
