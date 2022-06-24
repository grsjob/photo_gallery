FROM node:16.15.1-alpine
COPY package.json .
RUN npm install --quiet
COPY . .