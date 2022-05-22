
function HalfBold(parentElement) {
  if (parentElement == undefined) return;

  var length = parentElement.childNodes.length;
  var resultInnerHTML = "";
  for (var i = 0; i < length; i++) {
    if (parentElement.childNodes[i].nodeType == 3
      && parentElement.childNodes[i].nodeName != "B"
      && parentElement.childNodes[i].textContent != "") {
      resultInnerHTML += parentElement.childNodes[i].textContent.split('\n').reduce(
        (building_message, paragraph) => {
          if (paragraph.trim().length == 0) return building_message + paragraph;

          var test1 = paragraph.split(' ').reduce(
            (building_paragraph, word) => {
              if (word.trim().length == 0) return building_paragraph + word;

              var length = Math.floor(word.length / 2);
              if (length == 0) length = 1;
              if (length > 6) length = 6;
              var test2 = "<b>" + word.slice(0, length) + "</b>" + word.slice(length);

              if (test2 == "") return building_paragraph;
              if (building_paragraph == "") return test2;
              return building_paragraph + " " + test2;
            }, "");

          if (test1 == "") return building_message;
          if (building_message == "") return test1;
          return building_message + "\n" + test1;
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

for (var i = 0; collection[i] != undefined; i++) {
  if (collection[i] == undefined) continue;
  if (collection[i].nodeName == "B") continue;
  if (collection[i].nodeType != 1) continue;
  if (collection[i].nodeName == "SCRIPT") continue;
  if (collection[i].nodeName == "STYLE") continue;
  if (collection[i].childNodes.length == 0) continue;
  HalfBold(collection[i]);
}
