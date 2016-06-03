# jasmine-seed

A simple seed TDD project set up with gulp and jasmine. There are no other bells or whistles, just Jasmine and gulp.

##Installation

If you don't already have it installed. You'll need to download and install [`nodeJS`](https://nodejs.org/). For this repo, there are no special options or settings to use with node's installation process. Just follow the instructions and go with the defaults, if you're not sure what else to do.

Clone this project and `cd` into its root directory. Then, run the `npm install` command in your terminal. This will download all of the necessary dependencies that the `jasmine-seed` project will need to work correctly.

Once the dependencies are downloaded, you're all set. Run `gulp test` to start the test watcher. Each time you save a `*.js` file, the watcher will find and run all tests.

If you want to add new files, add source files to the `javascript` folder and test files to the `spec` folder. Conventionally, your new test files should end with `*.spec.js`.