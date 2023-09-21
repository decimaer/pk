FROM node

COPY ./package.json ./
COPY ./index.js ./
COPY ./public ./public

RUN npm install

EXPOSE 8081

CMD [ "node",  "index.js"]