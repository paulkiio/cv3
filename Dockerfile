# For build React app
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json /app/package.json

# Copy app
COPY . /app

# Install dependancies
RUN npm install

# Build app
RUN npm build

# Start app
CMD ["npm", "preview"]

# Expose port
EXPOSE 3000
