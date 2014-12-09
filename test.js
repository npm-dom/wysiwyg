var wysiwyg = require("./");
var test = require("prova");

test('adding an editor', function (t) {
  t.plan(1);

  document.body.innerHTML = '<textarea class="foo">hello world</textarea>';

  var textarea = document.querySelector('textarea');

  var editor = wysiwyg(textarea);

  editor.onUpdate(function () {
    t.equal(textarea.value, '<b><i><font color=\"#ff0000\">hello world</font></i></b>');
  });

  editor.selectAll();
  editor.bold();
  editor.italic();
  editor.color('red');
});
