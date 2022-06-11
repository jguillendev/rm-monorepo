# FROM node:12.4.0-alpine as builder
# FROM alpine:3.16 as builder
FROM node:16.14.2-alpine as builder
#ENV NODE_VERSION 16.15.1


ENV NODE_ENV=production
ENV REACT_APP_VERSION=1.0.0-docker
ENV REACT_APP_API_ANSWERS=http://localhost:5000/api/answers
ENV REACT_APP_API_AIRPORTS=http://localhost:5000/api/airports

WORKDIR /app
COPY package.json  ./
COPY package-lock.json  ./
COPY ./ ./

# RUN apk add --update npm
RUN npm install --global rimraf 
RUN npm install --global parcel-bundler
RUN npm install --production --legacy-peer-deps
# RUN npm ci --only=production
# RUN npm ci
RUN npm audit fix
RUN npm run build

FROM nginx:alpine
WORKDIR /app

# COPY . /usr/share/nginx/html
# COPY ./dist/ /usr/share/nginx/html
COPY --from=builder node_modules node_modules
COPY . /usr/share/nginx/html
EXPOSE 80