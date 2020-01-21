FROM gcr.io/google_appengine/nodejs
WORKDIR /
ADD . .
RUN npm install
EXPOSE 3001
RUN npm run build
CMD ["npm", "run", "start:prod"]