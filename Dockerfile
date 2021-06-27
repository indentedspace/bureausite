FROM node:16-alpine

WORKDIR /usr/app/src

COPY . .

RUN yarn build

EXPOSE 80

CMD ["node", "./server/build/index.js"]