FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm i

ENV PORT=2888

EXPOSE 2888

CMD ["node", "app"]
