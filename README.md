## wysiwyg

A tiny module to turn your textarea into a WYSIWYG editor.

## Install

```bash
$ npm install wysiwyg
```

## Usage

```js
var wysiwyg = require('wysiwyg')

var editor = wysiwyg(document.querySelector('textarea'))

editor.selectAll()
editor.bold()
editor.color("pink")
editor.link("hello world!")
```

When you call it passing a textarea element, it'll:

* Hide the textarea element
* Copy the current value of the textarea element to the wysiwyg box
* Update the textarea value as make changes on the editor

## Reference

See [make-editable](http://github.com/npm-dom/make-editable)
