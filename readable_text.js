
function BionicFont(paragraphElement) {
  //console.log(paragraphElement);
  //console.log(paragraphElement.innerHTML);
  if (paragraphElement == undefined) return;
  var temp = paragraphElement.innerHTML;
  if (temp == undefined) return;
  if (temp == null) return;

  paragraphElement.innerHTML = temp.split('\n').reduce((building_message, paragraph) => {
    var test1 = paragraph.split('.').reduce((building_paragraph, sentence) => {
      var test2 = "";

      if (sentence.includes('<') || sentence.includes('>')) {
        test2 = sentence;
      }
      else {
        test2 = sentence.split(' ').reduce((building_sentence, word) => {
          var length = Math.floor(word.length / 2);
          if (length == 0) length = 1;
          if (length > 6) length = 6;
          var test3 = "<b>" + word.slice(0, length) + "</b>" + word.slice(length);
          if (test3 == "") return building_sentence;
          if (building_sentence == "") return test3;
          return building_sentence + " " + test3;
        }, "");
      }

      if (test2 == "") return building_paragraph;
      if (building_paragraph == "") return test2;
      return building_paragraph + "." + test2;
    }, "");

    if (test1 == "") return building_message;
    if (building_message == "") return test1;
    return building_message + "<br/>" + test1;
  }, "");
  //console.log(paragraphElement.innerHTML);
}

var collection = document.getElementsByTagName('p');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h1');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h2');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h3');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h4');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h5');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('h6');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
collection = document.getElementsByTagName('span');
var length = collection.length;
for (var i = 0; i < length; i++) {
  //console.log(collection[i]);
  BionicFont(collection[i]);
}
