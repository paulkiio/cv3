# pull image
FROM node:17-alpine3.14

# set working dirctory
WORKDIR /app

# set ENV path
ENV PATH ./node_modules/.bin:$PATH

# set ENV port
ENV PORT=8081

# copy everything from local into the container
COPY . .

# install npm dependancies
RUN npm install

# build app
RUN npm run build

# start app
CMD ["serve", "-s", "build"]
