# a base stage for all future stages
# with only prod dependencies and
# no code yet
FROM node:10-alpine as base
RUN apk add --no-cache tini 
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production \
    && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH

# a dev and build-only stage. we don't need to 
# copy in code since we bind-mount it
FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=development
ENTRYPOINT ["tini", "--"]
CMD ["/app/node_modules/.bin/nodemon"]

# build stage only
FROM dev as build
COPY . .
RUN tsc
# tests are also ran here
# 
# this only has minimal deps and files
FROM base as prod
COPY --from=build /app/dist/ .
CMD ["node", "server.js"]
