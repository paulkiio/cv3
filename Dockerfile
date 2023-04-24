# 1. For build React app
FROM node:16-alpine
# Set working directory
WORKDIR /app
# Install yarn
RUN npm install yarn
# Copy package.json
COPY package.json /app/package.json
# Copy app
COPY . /app
# Install dependancies
RUN yarn install
# Start app
CMD [ "yarn", "dev" ]