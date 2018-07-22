# native-es-modules-example

An example of using ES modules natively in the DOM!

In a perfect world you would be able to just open up index.js and it would
work, but because of "security reasons" this is not the case. You will probably
get some kind of error message about CORS or somthing. The solution is to host
the files on a webserver. Yes it's stupid and anoying, but that's how this
thing works.

You are free to use any webserver you want, personally i used the npm
http-server package.

```bash
npm install -g http-server
cd ../where/ever/you/cloned/native-es-modules-example
http-server
```

Then go to localhost:8080 (or whatever port your local server is running on),
and open up the console.
