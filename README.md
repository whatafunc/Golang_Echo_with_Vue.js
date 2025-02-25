# Vue.js and Golang Monolithic Application

This is a monolithic application that combines a Vue.js frontend with a Golang backend using the Echo framework. The frontend uses Vuetify for Material Design components.

## Project Structure

```
vue-project/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── plugins/
│   │   └── vuetify.js
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
├── dist/ (generated after running `npm run build`)
├── package.json
├── vue.config.js
└── main.go
```

## Prerequisites

- Node.js and npm
- Vue CLI
- Golang


## Compatibility with macOS Big Sur (11.7.10)

We are using Vue.js version 2.6.12 and other related dependencies to ensure compatibility with macOS Big Sur (version 11.7.10). This specific version of Vue.js and its ecosystem are known to work well with older versions of macOS and npm (such as version 6.13.4). By using these versions, we can avoid potential compatibility issues and ensure a smoother development experience on macOS Big Sur. But it's strognly advised to use the most recent packages by simply using @latest

## Getting Started

Why this demo can make sense? Using Echo to serve static files for a Vue.js application in production is a common practice, especially when the backend is written in Golang. However, it is important to understand the context and the requirements of your application. So, here are the quick tips to get started:

### 1. Install `nvm` (Node Version Manager)

If you don't have `nvm` installed, follow the instructions from the official [nvm repository](https://github.com/nvm-sh/nvm) to install it.

### 2. Install Node.js Version 14

Use `nvm` to install Node.js version 14:

```sh
nvm install 14
```

### 3. Use Node.js Version 14

Switch to Node.js version 14 using `nvm`:

```sh
nvm use 14
```

### 4. Install Vue CLI

If you don't have Vue CLI installed, install it globally:

```sh
npm install -g @vue/cli@4.5.15
```

### 5. Install Dependencies

Navigate to the project's root directory and install the dependencies:

```sh
npm install
```

### 6. Install `@mdi/font` and `sass-loader@10`

Install the required packages:

```sh
npm install @mdi/font sass-loader@10 sass --save
```

### 7. Build the Vue.js Project

Build the Vue.js project to generate the `dist` directory:

```sh
npm run build
```

### 8. Run the Golang Server

Run the following command to initialize a new Go module in your project directory:
```sh
go mod init vue-project
```

Run the following command to download and add the required packages to your go.mod file:
```sh
go get github.com/labstack/echo/v4
go get github.com/labstack/echo/v4/middleware
```

Verify the Go Module:
```sh
go mod tidy
```

Run the Golang server to serve the frontend and provide API endpoints:

```sh
go run main.go
```

### 9. Access the Application

Open your browser and navigate to `http://localhost:8080`. You should see the Vue.js application served by the Golang server.

## Other Helpful Files

### Deployment script `deploy.sh`

``` 
#!/bin/bash

# Navigate to the project directory
cd /path/to/your/project

# Install dependencies
npm install

# Build the Vue.js application
npm run build

# Ensure that the Go server uses the generated dist directory
# No need to copy files to a public directory since the Go server already serves from dist

#compile the Go app & run: 
go build -o app

```

note the bash script required permisions are ``

### CI/CD pipeline `.github/workflows/deploy.yml`

``` 

name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Dependencies
      run: npm install

    - name: Build Vue.js Application
      run: npm run build

    - name: Set up Go
      uses: actions/setup-go@v2
      with:
        go-version: '1.16'

    - name: Build Go Application
      run: go build -o app

    - name: Deploy to Server
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      run: |
        mkdir -p ~/.ssh
        echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan your-server.com >> ~/.ssh/known_hosts
        scp -r dist/* user@your-server:/path/to/your/deployment/directory
        scp app user@your-server:/path/to/your/deployment/directory
        ssh user@your-server 'bash -s' << 'EOF'
          cd /path/to/your/deployment/directory
          screen -dmS go_app ./app
        EOF
```

### NGINX config `nginx.conf`

``` server {
    listen 80;
    server_name yourdomain.com;

    location / {
        root /path/to/your/vuejs/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

### Other links to my Golang apps



## License

This project is licensed under the MIT License.