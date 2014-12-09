var editable = require("make-editable");
var pubsub = require("pubsub");
var debounce = require("debounce-fn");
var classes = require("dom-classes");

var counter = 1;

module.exports = create;

function create (textarea) {
  var iframe = replace(textarea);
  var api = editable(iframe.contentWindow.document);

  api.iframe = iframe;
  api.onUpdate = pubsub();
  api.read = read;

  watch(api, function () {
    textarea.value = read();
    api.onUpdate.publish();
  });

  return api;

  function read () {
    return iframe.contentWindow.document.body.innerHTML;
  };
}

function replace (textarea) {
  var id = counter++;
  var iframe = document.createElement('iframe');
  iframe.setAttribute('class', 'wysiwyg wysiwyg-' + id);

  textarea.style.display = 'none';
  textarea.parentNode.insertBefore(iframe, textarea);

  iframe.contentWindow.document.body.innerHTML = textarea.value;

  iframe.contentWindow.addEventListener('focus', function () {
    classes.add(iframe, 'focus');
  }, false);

  iframe.contentWindow.addEventListener('blur', function () {
    classes.remove(iframe, 'focus');
  }, false);

  return iframe;
}

function watch (api, callback) {
  api.iframe.contentWindow.document.body.addEventListener('input', debounce(callback, 500), false);
}
