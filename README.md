## wysiwyg

A tiny module to turn your textarea into a WYSIWYG editor.

[Demo @RequireBin](http://requirebin.com/?gist=0819767d580c1f049b34)

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
editor.link("foobar.com")

editor.read()
// => <b><a href="foobar.com" style="color: pink">hello world</a></b>
```

When you call it passing a textarea element, it'll:

* Hide the textarea element
* Create an editable wysiwyg element (a.k.a [content-editable iframe](http://github.com/npm-dom/make-editable))
* Copy the current value of the textarea element to the wysiwyg box
* Update the textarea value as make changes on the editor

**Listening Updates**

```js
editor.onUpdate(function () {
  console.log('content updated')
})
```

## Reference

See [make-editable](http://github.com/npm-dom/make-editable)
