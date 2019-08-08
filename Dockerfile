FROM node:10-alpine

RUN apk add --no-cache tini 

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY . .

ENTRYPOINT ["tini", "--"]

RUN npm install -g typescript

RUN tsc

ENV NODE_ENV=development
ENV MONGO_URI=mongodb+srv://CDlogs:GAvV9YWssvJNpDx@cluster0-5qedj.mongodb.net/test?retryWrites=true&w=majority

CMD ["node", "dist/server.js"]