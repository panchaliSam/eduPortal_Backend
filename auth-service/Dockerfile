FROM ubuntu:latest
LABEL authors="panchali"

ENTRYPOINT ["top", "-b"]

#Base image
FROM node:22.13.1

#Set the working directory in the container
WORKDIR /usr/src/auth-service

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the entire application code
COPY . .

#Expose the port your app runs on
EXPOSE 3001

#Command to run the application
CMD ["npm", "start"]