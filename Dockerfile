FROM  node:15.13-alpine
WORKDIR /textManipulator
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
