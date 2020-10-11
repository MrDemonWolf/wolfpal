FROM node:12.18.4-alpine as builder

COPY package*.json ./

RUN npm ci

FROM node:12.18.4-alpine

WORKDIR /usr/src/app/

COPY --from=builder node_modules node_modules

COPY . /usr/src/app/

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
