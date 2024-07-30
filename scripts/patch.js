// this is the code that is inserted in anoter site to change the sites behavior
// get the links from the videos and then send them to the sw
// the service worker then receives the message and updates some DS that the 
// plugin code has access to (State of all the downloads in an indexed database)
// the service worker sends periodic updates to the plugin to show how the the download is progressing
// Save the file to the indexeddb (This is persistent and thus less RAM is used)
// Once done, send a message to plugin to download the file
document.querySelector("body").style.background = "red";