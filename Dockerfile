FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install dotenv --save-dev
RUN npm install stripe --save
RUN npm install body-parser
RUN npm install jsonwebtoken

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 52273
CMD [ "node", "server.js" ]
