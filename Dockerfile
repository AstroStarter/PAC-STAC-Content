FROM node:18-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=Target/payload.config.js

WORKDIR /home/node/app
COPY package*.json ./

RUN npm install --omit dev
COPY --from=builder /home/node/app/Target ./Target
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "Target/server.js"]
