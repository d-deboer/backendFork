FROM node

RUN apt update && apt upgrade && npm install -g @nestjs/cli

WORKDIR /app

COPY ./init.sh /tmp

CMD [ "bash", "/tmp/init.sh"]

ENTRYPOINT [ "npm", "start" ]
