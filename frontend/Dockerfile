FROM alpine as builder

# update 
RUN apt-get update
# install curl 
RUN apt-get install curl
# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash
# and install node 
RUN apt-get install nodejs
# confirm that it was successful 
RUN node -v
# npm installs automatically 
RUN npm -v

WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install --no-optional

ARG REACT_APP_BUILD

ENV REACT_APP_BUILD $REACT_APP_BUILD

COPY ./frontend/ ./
RUN npm run build

COPY ./frontend/.env ./build

FROM nginx:stable

COPY ./frontend/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/build/.env /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD /bin/sh -c "cd /usr/share/nginx/html && nginx -g 'daemon off;'"