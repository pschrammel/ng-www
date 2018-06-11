FROM 858049876441.dkr.ecr.eu-west-1.amazonaws.com/metoda_spa_nginx:latest

#COPY . /spa_template
WORKDIR /code

ENV APP_DIR=/code
WORKDIR $APP_DIR

ADD package.json package.json
ADD yarn.lock yarn.lock

RUN yarn install

ADD . $APP_DIR
RUN yarn run build

#RUN cp -R ./dist/* /usr/share/nginx/html

#for testing
#ADD nginx.conf /etc/nginx/conf.d/default.conf
#CMD ["./bin/run", "static"]
CMD /bin/bash
