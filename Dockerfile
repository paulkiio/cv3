# For build React app
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
# Build app
RUN yarn build
# Start app
CMD [ "yarn", "run" "start" ]
# Expose port
EXPOSE 3000
# For Nginx setup
FROM nginx:alpine
# Copy config nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]