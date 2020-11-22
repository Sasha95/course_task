FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install --silent
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]