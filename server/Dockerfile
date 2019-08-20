FROM node:12.8.1-alpine

RUN apk add python make gcc g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 9229

CMD npm run start:dev