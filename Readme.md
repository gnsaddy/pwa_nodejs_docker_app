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


