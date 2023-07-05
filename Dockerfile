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

# # Build app
# RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "dev"]
