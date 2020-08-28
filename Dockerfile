FROM node:10-alpine

RUN mkdir -p /home/node/pipeline

WORKDIR /home/node/pipeline

RUN chmod 777 /home/node/pipeline

COPY / ./

USER node

RUN ls
RUN apk add --no-cache udev ttf-freefont chromium git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser
RUN  npm install

RUN npx webdriver-manager update



RUN npm test