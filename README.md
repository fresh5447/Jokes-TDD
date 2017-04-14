You will be tasked to write code to pass all of the tests inside of `test/jokes_test.js`

Mocha will automatically run any tests inside of the `test` directory.. you just have to run the command `mocha`

To begin, read through the tests, and try and get a better understanding of what they are asking for. Notice: If the `it` has an 'X', it is currently commented out. Once you pass a test, uncomment the next test, and try to write a bit of code to solve it.

To Begin:

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


For your convenince, there is a basic example of some passing tests in `mather` && `tests/mather_test.js`. You may want to start there and make sure you understand what is happening. Once you are over it, declutter your termnical by just commenting out the whole `tests/mather_test.js` file.

There are plenty of hints inside of `jokes.js` to get you to the finish line.
Your very last resort should be looking at the solutions branch: https://github.com/fresh5447/Jokes-TDD/tree/solution
