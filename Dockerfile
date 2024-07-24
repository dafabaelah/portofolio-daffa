# Stage 1: Build React App
FROM node:18.20.3-slim AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN apk add --no-cache bash

# Stage 2: Setup Nginx and copy build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
