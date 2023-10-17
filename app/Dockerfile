FROM node

RUN apt update && apt upgrade && npm install -g @nestjs/cli

WORKDIR /app

COPY init.sh /tmp

ENTRYPOINT [ "bash", "/tmp/init.sh"]

EXPOSE 3333

CMD [ "npm", "start" ]