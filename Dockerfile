# Use node 9.8.0 LTS
FROM node:9.8.0
ENV LAST_UPDATED 20180311T152000

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
 
# runs npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

# Install dependencies
RUN npm install -g -s --no-progress npm && \
    npm install -g -s --no-progress yarn && \
    npm install -g -s --no-progress @angular/cli

# Change working directory
COPY /client /client
WORKDIR /client

USER root

# Install client dependencies and build client
RUN yarn install
RUN ng build --prod --build-optimizer

# Expose Container Port
EXPOSE 4200

# Change working directory
COPY /server /server
WORKDIR /server

# Install server dependencies
RUN yarn add express

# Launch application
CMD ["yarn","start"]
