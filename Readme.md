[![Coveralls – test coverage
](https://img.shields.io/coveralls/studio-b12/doxie.append.svg?style=flat-square)
](https://coveralls.io/r/studio-b12/doxie.append)
 [![Travis – build status
](https://img.shields.io/travis/studio-b12/doxie.append/master.svg?style=flat-square)
](https://travis-ci.org/studio-b12/doxie.append)
 [![David – status of dependencies
](https://img.shields.io/david/studio-b12/doxie.append.svg?style=flat-square)
](https://david-dm.org/studio-b12/doxie.append)
 [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-yellow.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




<h1                                                                 id="/"><pre>
doxie --append
</pre></h1>

A plugin for **[doxie][]**.  
**Add a string at the end of your docs.**

[doxie]:  https://github.com/studio-b12/doxie




<p align="center"><a
  title="Graphic by the great Justin Mezzell"
  href="http://justinmezzell.tumblr.com/post/89957156723"
  >
  <br/>
  <br/>
  <img
    src="Readme/Balls.gif"
    width="400"
    height="300"
  />
  <br/>
  <br/>
</a></p>




<div                                                               >&nbsp;</div>

CLI Usage
---------

`doxie --append` is a plugin for the command-line tool **[doxie][]**. Install both if you haven’t already:

```sh
$ npm install --global dox doxie doxie.append
```


Any string you `--append` will be appended at the end of your docs:

```sh
$ echo '[]' | doxie --append 'a b c\n' --append 'def\n' --output
a b c
def
```


[dox]:                http://npm.im/dox




<div                                                               >&nbsp;</div>

Programmatic usage
------------------

`doxie.append` can be used directly with **[doxie-core][]** – the backend of **[doxie][]**. Install both if you haven’t already:

```sh
$ npm install doxie-core doxie.append
```


Pass a single string to `doxie.append` to instantiate the plugin:

```js
const doxie = require('doxie-core');
const render = require('doxie.render');
const append = require('doxie.append');
const output = require('doxie.output');

const myDoxData = [{isPrivate: true}, {isPrivate: false}, {isPrivate: false}];

doxie([
  render(({data}) => `${data.isPrivate ? 'Sshhh…' : 'Boom!'}\n`),
  append('AAAAAAA!\n'),
  output(),
])(myDoxData).output;
//» "Sshhh…\nBoom!\nBoom!\nAAAAAAA!\n"
```


[doxie-core]:  http://npm.im/doxie-core




<div                                                               >&nbsp;</div>

License
-------

[MIT][] © [Studio B12 GmbH][]

[MIT]:              ./License.md
[Studio B12 GmbH]:  http://studio-b12.de
