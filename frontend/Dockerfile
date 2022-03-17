#### Denise

### Stage 1: build ###

FROM node:16-alpine3.12 as builder

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package.json
RUN npm install

COPY . /app

RUN npm run build -- --output-path=./dist/out

### Stage 2: deploy ###

FROM nginx:1.21.4-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/out /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

####