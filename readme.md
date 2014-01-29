## Quick Start
The source files for [Debugging in Node](http://www.summa-tech.com/blog/2014/01/21/debugging-in-node/) blog post.

#### Console Debugging

- `node debug console-debugging/program.js`

#### HTTP Debugging

- `npm install`
- `node --debug http-debugging/server.js` to start the web server in debug
- `node_modules/.bin/node-inspector` from a second console window
- visit [http://127.0.0.1:8080/debug?port=5858](http://127.0.0.1:8080/debug?port=5858) in Chrome and set a breakpoint on line 4
- visit [localhost:9000](localhost:9000) in a second Chrome tab to trigger the break point
