FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 9229

RUN ["npm", "run", "generate-types"]

CMD npm install && npm run start:dev