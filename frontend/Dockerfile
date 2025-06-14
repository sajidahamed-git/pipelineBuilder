# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve using simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 3000