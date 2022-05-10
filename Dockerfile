FROM node:16.3.0-alpine

WORKDIR /app

COPY src ./src
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

RUN yarn
RUN yarn build-ts
RUN yarn watch-js