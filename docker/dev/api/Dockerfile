FROM node:10.15.3-alpine

RUN npm install -g json-server

WORKDIR "/var/www"

EXPOSE 3000

CMD json-server --host 0.0.0.0 --watch data/db.json
