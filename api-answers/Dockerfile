FROM node:12.4.0-alpine
ENV NODE_ENV=production
ENV APP_VERSION=1.0.0-answers-api

ENV DB_USERS_IP=1.0.0.0
ENV DB_USERS_USER=admin
ENV DB_USER_PASS=admin

RUN mkdir /work/
WORKDIR /work/

COPY ./package.json /work/package.json
COPY ./yarn.lock /work/yarn.lock

#RUN npm ci --only=production
RUN npm install --production --legacy-peer-deps
RUN npm audit fix

COPY ./src/ /work/

CMD node .

EXPOSE 5000