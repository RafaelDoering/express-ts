FROM node:alpine

# Set working directory
WORKDIR /app/backend

# Copy both package.json and package-lock.json
COPY ./package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 8080
EXPOSE 8080

# And run 'npm start' script
CMD [ "npm", "start" ]
