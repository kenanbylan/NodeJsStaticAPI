FROM node:18-alpine 
RUN apk update && apk upgrade

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm ci swagger-ui-express

COPY . /app/


EXPOSE 3000
CMD ["node", "start"]


