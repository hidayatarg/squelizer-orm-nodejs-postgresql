FROM node:12.13.0-alpine

WORKDIR /src

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run dev

# TODO: add the process for the production here