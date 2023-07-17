FROM node:alpine
RUN mkdir /App
WORKDIR /App
COPY ./package*.json ./ 
RUN npm install
COPY . .

EXPOSE $port
CMD ["npm","start"]