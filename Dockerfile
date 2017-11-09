FROM node:7
WORKDIR /usr/src/app
#COPY package.json .
#COPY package.json package-lock.json ./
COPY . .
RUN npm install
EXPOSE 8081
CMD [ "npm", "start" ]
