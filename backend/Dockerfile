FROM node:14.15.1

# set working directory
WORKDIR /app

COPY package.json /app/package.json
RUN yarn install
COPY . .
CMD ["node", "index.js"]