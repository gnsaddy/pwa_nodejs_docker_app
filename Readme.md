# Progressive Web App with express server, nodejs application with docker Conatiner

```ProgressiveWebApp

Progressive Web App using vanilla js, HTML, bootstrap, css.

Implementation of Progressive Web App

Name - Aditya Raj

```


# Installation


```javascript

    // then install the npm modules using
     
    npm install


```


# Running the application


```javascript


    node server.js


```


# Building docker image

```bash

    docker build -t <imagename:version> .
    example :-  docker build -t testing_pwa_node:latest

```


# Docker Installation
```
Step 1 — Installing Docker
First, update your existing list of packages:
    $ sudo apt update
Next, install a few prerequisite packages which let apt use packages over HTTPS:
    $ sudo apt install apt-transport-https ca-certificates curl software-properties-common
Then add the GPG key for the official Docker repository to your system:
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
Add the Docker repository to APT sources:
    $ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
Next, update the package database with the Docker packages from the newly added repo:
    $ sudo apt update
Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:
    $ apt-cache policy docker-ce
Finally install docker
    $ sudo apt install docker-ce
Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:
    $ sudo systemctl status docker

```
# Running docker container


```bash

    // 9005 port is given since the docker file contains 9005 port
    docker run -it -d -p <outside-port-of-your-choice>:9005 <imagename:version>

    example: - docker run -it -d -p 5000:9005 testing_pwa_node:latest

```

# Open Chrome browser and run

```browser

    localhost:5000

```


# Topic Covered :-

```Topics

1. Introduction to Progressive Web App
2. Accelerated Mobile Pages
3. AMP vs PWA vs Native Apps
4. PWA Advantages
5. What exactly the service worker is?
6. Working of service worker
7. Web Manifest file
8. Creation of mainifest file
9. Working with the JSON
10. DOM and service worker thread
11. Life cycle of service worker
12. Javascript Promise
13. navigator object
14. Chrome dev tools
15. Audit with lighthouse tool
16. Web app to device home screen
17. service worker fetch event
18. Pre-caching and shell model approch
19. Getting caching assets

```

# Tools and technology used:
``` 
1. HTML5
2. CSS3
3. vanilla Javascript
4. Http server
5. VS code
6. Git
7. Github
8. Express server
9. Nodejs and npm
10.Docker Container
11.Service Worker
12.Manifest
13.Android SDK

```