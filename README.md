# betanyc screenshots

(Very poorly) modified version of [dotgov-screenshots](https://github.com/shawnbot/dotgov-screenshots), 
to capture screenshots of betanyc projects. Thanks and apologies to [shawnbot](https://twitter.com/shawnbot).

To run, clone the repository and:

```sh
$ npm install       # install dependencies
$ npm urls          # make a csv of betanyc project websites
$ npm run capture   # take screenshots of those websites
````

Screenshots are saved to the `screenshots` directory at 1280 pixels wide 
and variable height. 

The in-between step of making urls.csv could probably be removed.

See [the original readme](https://github.com/shawnbot/dotgov-screenshots/blob/master/README.md) 
for lots more about how this works.
