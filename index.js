const lighthouse = require('lighthouse');

function launchLighthouse(url, opts, config = null) {
  return lighthouse(url, opts, config);
  //.then(results => {
  // use results.lhr for the JS-consumable output
  // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
  // use results.report for the HTML/JSON/CSV output as a string
  // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
  //    return results.lhr
  // });
}

const config = {
  extends: 'lighthouse:default',
  settings: {
    output: 'html',
  },
};

const opts = {
  port: 9222,
  //  hostname: 'ws://0.0.0.0',
  chromeFlags: ['--no-sandbox', '--headless', '--show-paint-rects'],
};

// Usage:
launchLighthouse('https://habito.com', opts, config).then(results => {
  // Use results!
  console.log(results.report);
});
