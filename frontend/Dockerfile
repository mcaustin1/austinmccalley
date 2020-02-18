FROM node:12.15.0-alpine

# Create destination directory
RUN mkdir -p /usr/src/blog
WORKDIR usr/src/blog

# Update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/blog
RUN yarn install

# Build is necessary
RUN yarn build

# Expose 3000 on container
EXPOSE 3000

# Set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# Set app port
ENV NUXT_PORT=3000

# Start the app
CMD ["yarn", "start"]
