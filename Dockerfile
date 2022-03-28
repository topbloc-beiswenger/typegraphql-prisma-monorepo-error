FROM node:14.17.4 as base
EXPOSE 3000
WORKDIR /node
COPY package*.json ./
COPY lerna.json ./
RUN npm install
ENV NODE_ENV=development
COPY ./api /node/api
COPY ./prisma /node/prisma
RUN npm run bootstrap
WORKDIR /node/prisma
RUN npm run build
WORKDIR /node/api
CMD ["npm", "run", "start"]