FROM 172.16.20.223/nodejs:latest

COPY . /usr/src/app/

ENV NODE_ENV=production

RUN cp .env.example .env \
    && yarn install --production \
    && chmod -R 777 /usr/src/app/logs \
    && groupadd -r node && useradd -r -g node node 

USER node

CMD ["node","server.js"]