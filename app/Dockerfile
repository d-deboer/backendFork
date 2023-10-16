FROM node

RUN apt update && apt upgrade && npm install -g @nestjs/cli

WORKDIR /app

COPY ./hackathon/package.json .

RUN npm install

CMD [ "npm", "start" ]
