FROM node:10.15.3-alpine

RUN apk add --no-cache git yarn \
    && yarn global add @vue/cli

WORKDIR "/var/www"

EXPOSE 8080

CMD sleep 1000000000
