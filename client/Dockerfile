# Base
FROM node:14-alpine as base
WORKDIR /app
RUN npm install -g http-server@0.11.1
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./

# Dependencies
FROM base as dependencies
WORKDIR /app
RUN yarn install --frozen-lockfile
COPY src src
COPY public public
COPY "@types" "@types"

# Build
FROM dependencies as builder
WORKDIR /app
RUN yarn build -s

# STAGE 2 => SETUP NGINX and Run
FROM nginx:1.17.8-alpine
COPY proxy/nginx.conf /etc/nginx/conf.d/default.conf.template
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 5001
ENV APPSETTING_ENV=local

# Copy .env file and shell script to container to handle
# runtime environment variables
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
RUN apk add --no-cache bash
RUN chmod +x env.sh

CMD ["/bin/bash", "-c", "./env.sh && nginx -g \"daemon off;\""]
