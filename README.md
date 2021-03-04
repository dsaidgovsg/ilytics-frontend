<img src="logo.png" width="200">

## Frontend    

This repo contains the frontend(vue.js) for ilytics.sg 

## Update local IP address in .env file    

- Change directory to the repo
- View hidden files in repo
- Edit .env file and include the following
> `VUE_APP_IP=<LOCAL_IP_ADDRESS>`

## Local Run Instruction (Docker)  

> The following commands must be executed whenever the *<Local_IP_ADDRESS>* is updated.  

- `docker build . --tag ilytics-fe`
 
- `docker run -itd --name ilytics-frontend-container -p 8080:8080 ilytics-fe`  

## Check if the container is running 

- `docker logs ilytics-frontend-container`

The output should be similar to the following:
> `Starting up http-server, serving dist  
Available on:  
  http://127.0.0.1:8080  
  http://172.17.0.2:8080  
Hit CTRL-C to stop the server`  


## Ilytics Frontend is now up and running @<LOCAL_IP_ADDRESS>:8080!




