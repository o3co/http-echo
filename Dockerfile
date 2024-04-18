FROM node:alpine

ENV APP_DIR src

WORKDIR $APP_DIR

ADD package.json ./
RUN yarn install --production

ADD src ./src
ADD config ./config

CMD yarn run start
