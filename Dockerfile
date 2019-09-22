FROM node:latest
MAINTAINER Muhammed Taplamacı <muhammedtaplamaci@gmail.com>


WORKDIR /usr/src/node-app


COPY package.json ./


RUN npm install --only=production


COPY . .


EXPOSE 8080

ENTRYPOINT [ "node" ]

CMD [ "server.js" ]
