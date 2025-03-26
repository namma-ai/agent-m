FROM node:22
WORKDIR /app
COPY . /app

# Install dependencies with --legacy-peer-deps
RUN npm install --legacy-peer-deps && npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000