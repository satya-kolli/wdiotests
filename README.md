# Setup

Clone the repo and install dependencies by running 

```npm install```

To run mocha tests using wdio test runner

```npm run wdioTests```

To run mocha tests as standalone

```npm run mochaTests```


# Issues noted:

Run wdio tests 
* Note the first test "Wdio test with invalid css in before hook" fails and the rest doesn't get executed
* The first test has waitForVisible command in before hook. it fails with following error:
```
/wdiotests/node_modules/webdriverio/build/lib/utils/ReporterStats.js:381
            if (!suiteStats.tests[uid]) throw Error(`Unrecognised test [${runner.title}] for suite [${runner.parent}]`);
                                        ^

Error: Unrecognised test ["before all" hook] for suite [Wdio test with invalid css in before hook, fails complaining 
about Unrecognised test:]
    at ReporterStats.getTestStats (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/utils/ReporterStats.js:381:47)
    at ReporterStats.testFail (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/utils/ReporterStats.js:450:30)
    at BaseReporter.<anonymous> (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/utils/BaseReporter.js:159:25)
    at emitOne (events.js:115:13)
    at BaseReporter.emit (events.js:210:7)
    at BaseReporter.handleEvent (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/utils/BaseReporter.js:300:27)
    at Launcher.messageHandler (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/launcher.js:646:28)
    at emitTwo (events.js:125:13)
    at ChildProcess.emit (events.js:213:7)
    at emit (internal/child_process.js:774:12)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ wdioTests: `wdio wdio.tests.conf.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the @ wdioTests script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/satya.kolli/.npm/_logs/2017-12-08T01_26_12_410Z-debug.log
SKolli-mac:wdiotests satya.kolli$ Error [ERR_IPC_CHANNEL_CLOSED]: channel closed
    at process.target.send (internal/child_process.js:590:16)
    at /Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/runner.js:498:25
    at execHook (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/wdio-sync/build/index.js:166:35)
Error [ERR_IPC_CHANNEL_CLOSED]: channel closed
    at process.target.send (internal/child_process.js:590:16)
    at /Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/runner.js:486:25
    at execHook (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/wdio-sync/build/index.js:166:35)
Error [ERR_IPC_CHANNEL_CLOSED]: channel closed
    at process.target.send (internal/child_process.js:590:16)
    at /Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/webdriverio/build/lib/runner.js:498:25
    at execHook (/Users/satya.kolli/Documents/GithubRepos/wdiotests/node_modules/wdio-sync/build/index.js:166:35)
(node:16683) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 4): channel closed
(node:16683) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.`
```
    
* If you comment out the first test and run the tests then the "Wdio test with valid css in before hook" test will pass and "Wdio test with invalid css in 'it'" will fail gracefully

# In comparision I created the same as standalone mocha tests

Run mocha tests
* Note the test "Standalone mocha test with invalid css in before hook" fails gracefully and continues running tests
* The next test "Standalone mocha test with valid css in before hook" test will pass
* And the last test "Standalone mocha test with invalid css in "it"" will fail gracefully
```
> mocha --colors --ui bdd --timeout 90000 --compilers js:babel-register test/mochaTests.js



  Standalone mocha test with invalid css in before hook, fails gracefully:
    1) "before all" hook

  Standalone mocha test with valid css in before hook, passes:
    ✓ Should display header (45ms)

  Standalone mocha test with invalid css in "it" - fails gracefully:
    2) Should display header


  1 passing (32s)
  2 failing

  1) Standalone mocha test with invalid css in before hook, fails gracefully: "before all" hook:
     Error: element ("h1.header123") still not visible after 5000ms
      at new WaitUntilTimeoutError (node_modules/webdriverio/build/lib/utils/ErrorHandler.js:150:12)
      at node_modules/webdriverio/build/lib/commands/waitUntil.js:29:19
      at <anonymous>

  2) Standalone mocha test with invalid css in "it" - fails gracefully: Should display header:
     Error: An element could not be located on the page using the given search parameters ("h1.header1").
      at new CommandError (node_modules/webdriverio/build/lib/utils/ErrorHandler.js:138:12)
      at Object.<anonymous> (node_modules/webdriverio/build/lib/commands/getText.js:23:19)
      at Object.exec (node_modules/webdriverio/build/lib/helpers/safeExecute.js:28:24)
      at Object.resolve (node_modules/webdriverio/build/lib/webdriverio.js:191:29)
      at node_modules/webdriverio/build/lib/webdriverio.js:540:32
      at _fulfilled (node_modules/q/q.js:854:54)
      at self.promiseDispatch.done (node_modules/q/q.js:883:30)
      at Promise.promise.promiseDispatch (node_modules/q/q.js:816:13)
      at node_modules/q/q.js:624:44
      at runSingle (node_modules/q/q.js:137:13)
      at flush (node_modules/q/q.js:125:13)
      at _combinedTickCallback (internal/process/next_tick.js:131:7)
      at process._tickDomainCallback (internal/process/next_tick.js:218:9)
```