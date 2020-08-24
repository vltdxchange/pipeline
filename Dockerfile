FROM node:10-alpine

RUN mkdir -p /home/node/pipeline

WORKDIR /home/node/pipeline

COPY / ./

USER node

RUN npm install

RUN npm test