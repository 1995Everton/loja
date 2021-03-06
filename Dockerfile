FROM node:latest

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install -g @angular/cli \
    && npm install

COPY . .

EXPOSE 4200

CMD npm install \ 
    && ng serve --host=0.0.0.0 --port=4200
