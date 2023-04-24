# 1. For build React app
FROM node:16-alpine
# Set working directory
WORKDIR /app
# Install yarn
RUN npm install yarn
# Copy package.json
COPY package*.json ./
# Copy app
COPY . ./
# Install dependancies
RUN yarn install
# EXPOSE port
EXPOSE 3000
# Start app
CMD [ "yarn", "dev" ]