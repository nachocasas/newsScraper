# News Wrapper API

This is a simple Express.js API that gets headlines from Infobae news site (from Argentina)
On this version this is the only site supported

## Endpoints

** GET: /getnews/:keyword **

This returns the headlines in which keywords appear

** GET: /wk **

(weigted keywords)
This returns the repeated words on all headlines as key with a weight associated.

### Dependencies 

- axios
- cheerio
- express

### Install

- npm install
- npm start

Will listen on http://localhost:8080. If you want to setup another port you can edit server.js