FROM node:19-bullseye AS build

WORKDIR /workspace
COPY ./nodejs .

RUN npm clean-install

CMD [ "npm", "start" ]
