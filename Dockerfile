FROM node:10-alpine

RUN mkdir -p /home/node/pipeline

WORKDIR /home/node/pipeline

RUN chmod 777 /home/node/pipeline

COPY / ./

USER node

RUN ls

RUN  npm install

RUN npm test