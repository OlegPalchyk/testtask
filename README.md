# Test project!

To run this project locally, you need

install node + npm -> https://nodejs.org/uk/

run commands :

	npm install

	npm start

to build production version, you need run command :

   npm run build

to connect with test data you need install locally simple server .

run command :

npm install -g json-server

then open terminal in the proj_folder/server and run

json-server --watch db.json --port 3004

now you have all data from file db.json in server folder