
// Insert one Node after another Node
function insertAfter(newNode, existingNode) {
  if (existingNode.nextSibling != undefined)
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  else
    existingNode.parentNode.appendChild(newNode);
}

// process all children of a Node
function HalfBold(parentElement) {
  // iterating through all children of the parent
  for (var i = 0; parentElement.childNodes[i] != undefined; i++) {
    // if the child is a text element
    if (parentElement.childNodes[i].nodeName == "#text" &&
      parentElement.childNodes[i].textContent.trim().length != 0
    ) {
      var recentNode = parentElement.childNodes[i];
      var newNodeCount = 0;
      // add bold and non-bold elements
      parentElement.childNodes[i].textContent.split(/(\s+|\S+)/).forEach(
        word => {
          if (word.length == 0) return;
          var trimmedWordLength = word.trim().length;
          if (trimmedWordLength == 0) {
            var textNode = document.createTextNode(word)
            insertAfter(textNode, recentNode);
            newNodeCount++;
            recentNode = textNode;
            return;
          }

          var length = Math.floor(trimmedWordLength / 2);
          if (length == 0) length = 1;

          const bold = document.createElement('b');
          bold.innerHTML = word.slice(0, length)
          insertAfter(bold, recentNode);
          newNodeCount++;
          recentNode = bold

          if (word.length == 1) return;
          var textNode = document.createTextNode(word.slice(length))
          insertAfter(textNode, recentNode);
          newNodeCount++;
          recentNode = textNode;
        });
      // and remove the original text element
      parentElement.removeChild(parentElement.childNodes[i])
      i += newNodeCount;
    }
  }
}

// both a way to stop from processing certain nodes and
// causes an convenient error to prevent running the script multiple times on a page
const ignoreTags = {
  B: true,
  META: true,
  LINK: true,
  SCRIPT: true,
  STYLE: true,
};

// we check all Nodes in the body
var collection = document.body.getElementsByTagName("*");

for (var i = 0; collection[i] != undefined; i++) {
  if (ignoreTags[collection[i].nodeName]) continue;
  if (collection[i].nodeType != 1) continue;
  if (collection[i].childNodes.length == 0) continue;
  HalfBold(collection[i]);
}
