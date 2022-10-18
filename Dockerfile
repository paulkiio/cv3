# BUILD ENVIRONMENT
FROM node:9.6.1 as builder
# make working directory
RUN mkdir /usr/src/app
# set working dirctory
WORKDIR /usr/src/app
# set ENV path
ENV PATH ./node_modules/.bin:$PATH
# copy everything from local into the container
COPY . /usr/src/app
# install npm dependancies
RUN npm install
# build app
RUN npm run build

# PRODUCTION ENVIRONMENT
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# expose port
EXPOSE 8081
# start app
CMD ["serve", "-s", "build"]

