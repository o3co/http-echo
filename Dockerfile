FROM node:alpine as production 

ENV APP_DIR /home/node 

WORKDIR $APP_DIR

ADD package.json ./
RUN yarn install --production

ADD src ./src
ADD config ./config

CMD ["yarn", "run", "start"]

FROM production as develop

RUN yarn install --development

CMD ["yarn", "run", "develop"]
