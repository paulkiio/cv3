FROM node:alpine3.12

WORKDIR /app

COPY package.json /app/package.json

COPY yarn.lock /app/yarn.lock

RUN npm install yarn

RUN yarn add react-scripts --save

RUN yarn

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

ENV PORT=8081

EXPOSE 8081

CMD ["yarn", "start"]