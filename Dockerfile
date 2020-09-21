# Dockerfile
FROM node:8.14 As builder
LABEL maintainer="6fedClub"
COPY . .
RUN yarn install
RUN yarn build
CMD yarn prod
