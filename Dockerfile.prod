# pull official base image
FROM node:lts-bookworm

# set working directory
WORKDIR /shen_kang_ui_garden/

# install app dependencies
COPY public/ /shen_kang_ui_garden/public
COPY src/ /shen_kang_ui_garden/src
COPY package.json /shen_kang_ui_garden/
COPY . /shen_kang_ui_garden
RUN npm install

# start app
CMD ["npm", "run", "storybook"]