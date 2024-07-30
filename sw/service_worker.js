// This is the service worker code that runs in the background
// There are some limitations to service workers, research on them to make sure that
// the chrome plugin is not killed prematurly

// After 30 seconds of no activity the service worker will be killed by chrome

// Since chrome will kill the service worker when it stays idle for a period of time
// you should use an alternative method to persist data across different sessions (e.g chrome.Storage)
console.log("Hello from service worker!!!")