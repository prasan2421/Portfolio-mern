FROM node:18.10.0
WORKDIR /server
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", 'server.js']