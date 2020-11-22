FROM node:14.15.1

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn install --silent
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]