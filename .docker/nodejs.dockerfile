FROM node:19-bullseye AS build

WORKDIR /workspace
COPY ./nodejs .

RUN npm clean-install --only=production

FROM node:19-bullseye-slim AS deploy

ENV NODE_ENV=production
USER node

WORKDIR /workspace
COPY --chown=node:node --from=build /workspace/node_modules /workspace/node_modules
COPY --chown=node:node ./nodejs .

EXPOSE 3000
CMD [ "npm", "start" ]
