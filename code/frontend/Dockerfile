FROM node:18 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

FROM node:18-alpine AS dev

WORKDIR /app

COPY --from=builder /app ./

COPY ./ ./

ARG VITE_CLERK_PUBLISHABLE_KEY

ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

RUN yarn build

FROM nginx:alpine AS prod

WORKDIR /app

COPY --from=dev /app/dist /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx","-g","daemon off;"]
