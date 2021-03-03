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
 
- `docker run -itd -p 8080:8080 ilytics-fe`  

## Ilytics Frontend is now up and running!




