var editable = require("make-editable");
var pubsub = require("pubsub");
var debounce = require("debounce-fn");

var counter = 1;

module.exports = create;

function create (textarea) {
  var iframe = replace(textarea);
  var api = editable(iframe.contentWindow.document);

  api.iframe = iframe;
  api.onUpdate = pubsub();

  watch(api, function () {
    textarea.value = iframe.contentWindow.document.body.innerHTML;
    api.onUpdate.publish();
  });

  return api;
}

function replace (textarea) {
  var id = counter++;
  var iframe = document.createElement('iframe');
  iframe.setAttribute('class', 'wysiwyg wysiwyg-' + id);

  textarea.style.display = 'none';
  textarea.parentNode.insertBefore(iframe, textarea);

  iframe.contentWindow.document.body.innerHTML = textarea.value;

  return iframe;
}

function watch (api, callback) {
  api.iframe.contentWindow.document.body.addEventListener('input', debounce(callback, 500), false);
}
