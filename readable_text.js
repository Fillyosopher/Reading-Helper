
function HalfBold(parentElement) {
  if (parentElement == undefined) return;

  var length = parentElement.childNodes.length;
  var resultInnerHTML = "";
  for (var i = 0; i < length; i++) {
    if (parentElement.childNodes[i].nodeType == 3
      && parentElement.childNodes[i].nodeName != "B"
      && parentElement.childNodes[i].textContent != "") {

      resultInnerHTML += parentElement.childNodes[i].textContent.split(/(\s+|\S+)/).reduce(
        (building_message, word) => {
          var trimmedWordLength = word.trim().length;
          if (trimmedWordLength == 0) return building_message + word;

          var length = Math.floor(trimmedWordLength / 2);
          if (length == 0) length = 1;

          var test1 = "<b>" + word.slice(0, length) + "</b>" + word.slice(length);

          return building_message + test1;
        }, "");
    } else {
      if (parentElement.childNodes[i].outerHTML != undefined)
        resultInnerHTML += parentElement.childNodes[i].outerHTML;
    }
  }

  if (resultInnerHTML == null) return;
  if (resultInnerHTML == undefined) return;
  parentElement.innerHTML = resultInnerHTML;
}

var collection = document.body.getElementsByTagName("*");

const ignoreTags = {
  B: true,
  META: true,
  LINK: true,
  SCRIPT: true,
  STYLE: true,
};

for (var i = 0; collection[i] != undefined; i++) {
  if (collection[i] == undefined) continue;
  if (ignoreTags[collection[i].nodeName]) continue;
  if (collection[i].nodeType != 1) continue;
  if (collection[i].childNodes.length == 0) continue;
  HalfBold(collection[i]);
}
