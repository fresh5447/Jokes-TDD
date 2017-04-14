Clone repository and npm install.

`git clone https://github.com/fresh5447/Jokes-TDD.git`

`cd Jokes-TDD && npm install`

About the project:

colors
https://www.npmjs.com/package/colors
So we can make our console output pretty.

chai
http://chaijs.com/api/bdd/
So we can use their expect/assertions

mocha (should be installled globaly)
if not `npm i -g mocha` or `sudo npm -g mocha`

The data inside of `jokes.json` is just a big blob of `JSON`

I just pulled the data using this API:
http://api.icndb.com/jokes/random/100
