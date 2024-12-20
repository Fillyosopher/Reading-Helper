javascript: (() => {
  /* Insert one Node after another Node */
  const insertAfter = (newNode, existingNode) => {
    if (existingNode.nextSibling != undefined)
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    else
      existingNode.parentNode.appendChild(newNode);
  };

  /* process all children of a Node*/
  const HalfBold = (parentElement) => {
    /* iterating through all children of the parent*/
    for (var i = 0; parentElement.childNodes[i] != undefined; i++) {
      /* if the child is a text element*/
      if (parentElement.childNodes[i].nodeName == "#text" &&
        parentElement.childNodes[i].textContent.trim().length != 0
      ) {
        var recentNode = parentElement.childNodes[i];
        var newNodeCount = 0;
        /* add bold and non-bold elements*/
        parentElement.childNodes[i].textContent.split(/(\s+|\S+)/).forEach(
          word => {
            if (word.length == 0) return;
            var trimmedWordLength = word.trim().length;
            if (trimmedWordLength == 0) {
              var textNode = document.createTextNode(word);
              insertAfter(textNode, recentNode);
              newNodeCount++;
              recentNode = textNode;
              return;
            }

            var length = Math.floor(trimmedWordLength / 2);
            if (length == 0) length = 1;

            const bold = document.createElement('b');
            bold.innerHTML = word.slice(0, length);
            bold.classList.add("readingHelper");
            insertAfter(bold, recentNode);
            newNodeCount++;
            recentNode = bold;

            if (word.length == 1) return;
            var textNode = document.createTextNode(word.slice(length));
            insertAfter(textNode, recentNode);
            newNodeCount++;
            recentNode = textNode;
          });
        /* and remove the original text element*/
        parentElement.removeChild(parentElement.childNodes[i]);
        i += newNodeCount - 1;
      }
    }
  };

  /* a way to stop from processing certain nodes*/
  var ignoreTags = {
    B: true,
    META: true,
    LINK: true,
    SCRIPT: true,
    STYLE: true,
  };

  const processDocumentBody = (element) => {
    /* we check all Nodes in the body*/
    if (element == null) return;
    if (element.body == undefined) return;

    var existingHelperElements = element.body.getElementsByClassName("readingHelper");
    if (existingHelperElements.length > 0) {
      for (var i = existingHelperElements.length - 1; existingHelperElements[i] != undefined; i--) {
        var start = existingHelperElements[i];
        var end = existingHelperElements[i].nextSibling;
        var parent = existingHelperElements[i].parentNode;
        var plain = start.innerHTML + (end ? end.textContent : "");
        plain = plain.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        start.replaceWith(document.createTextNode(plain));
        if (end) end.remove();
        parent.normalize();
      }
    } else {
      var collection = element.body.getElementsByTagName("*");

      for (var i = 0; collection[i] != undefined; i++) {
        if (ignoreTags[collection[i].nodeName]) continue;
        if (collection[i].nodeType != 1) continue;
        if (collection[i].nodeName == "IFRAME") {
          processDocumentBody(collection[i].contentDocument);
        } else {
          if (collection[i].childNodes.length == 0) continue;
          HalfBold(collection[i]);
        }
      }
    }
  };

  processDocumentBody(document);

})();