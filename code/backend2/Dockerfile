FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./ ./

EXPOSE 3001

CMD ["sh", "-c", "yarn migrate && yarn start"]