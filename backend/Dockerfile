# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install

CMD ["node", "index.js"]  # Replace with your entry file if it's not index.js
EXPOSE 5000
