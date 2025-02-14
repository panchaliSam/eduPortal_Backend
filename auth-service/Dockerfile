# Use the node image to avoid re-installing Node.js and npm
FROM node:22.13.1 AS build

WORKDIR /usr/src/auth-service

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

RUN npm rebuild bcrypt --build-from-source

# Expose the port your app runs on
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
