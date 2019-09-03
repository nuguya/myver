const categoryInput = document.querySelector("#favorate");
const categoryList = document.querySelector(".signup__main__contents__catecory");
const CATEGORY_TEXT = {
  invalid: ["관심사는 3개 이상 선택해주세요", "red"],
  valid: ["", "green"]
};
categoryInput.addEventListener("input", function() {
  const contentsList = document.querySelector(".signup__main__contents__catecory__content");
  const categoryLength = categoryInput.value.length - 1;
  const comment = document.querySelector("#favorate__comment");
  const TEXT = 0,
    COLOR = 1;
  let prevHeight = contentsList.getBoundingClientRect().height;

  if (categoryInput.value[0] == ",") {
    categoryInput.value = "";
  } else if (categoryInput.value[categoryLength] == ",") {
    let insertedElement = document.createElement("li");
    let contents = document.createElement("span");
    let cancel = document.createElement("span");
    contents.setAttribute("class", "category_contents");
    cancel.setAttribute("class", "category_cancel");
    insertedElement.setAttribute("class", "category_container"); // added line
    contents.appendChild(document.createTextNode(categoryInput.value.substring(0, categoryLength)));
    cancel.appendChild(document.createTextNode("ⓧ"));
    let commentary =
      contentsList.childNodes.length + 1 < 3 ? CATEGORY_TEXT.invalid : CATEGORY_TEXT.valid;
    comment.innerHTML = commentary[TEXT];
    comment.style.color = commentary[COLOR];
    cancel.addEventListener("click", function() {
      let prevHeight = contentsList.getBoundingClientRect().height;
      insertedElement.remove();
      let currentHeight = contentsList.getBoundingClientRect().height;
      if (prevHeight < currentHeight) {
        categoryList.style.height = "2.5em";
      }
      let commentary =
        contentsList.childNodes.length < 3 ? CATEGORY_TEXT.invalid : CATEGORY_TEXT.valid;
      comment.innerHTML = commentary[0];
      comment.style.color = commentary[1];
    });
    insertedElement.appendChild(contents);
    insertedElement.appendChild(cancel);
    contentsList.appendChild(insertedElement);
    let currentHeight = contentsList.getBoundingClientRect().height;
    if (prevHeight > currentHeight) {
      categoryList.style.height = "3.5em";
    }
    categoryInput.value = "";
  }
});

categoryInput.addEventListener("keyup", function(event) {
  let keyID = event.keyCode;
  const comment = document.querySelector("#favorate__comment");
  switch (keyID) {
    case 8:
    case 46:
      if (categoryInput.value == "") {
        const ulElement = document.querySelector(".signup__main__contents__catecory__content");
        if (ulElement.lastChild != null) {
          let prevHeight = ulElement.getBoundingClientRect().height;
          const lastCategory = ulElement.lastChild.firstChild;
          ulElement.lastChild.remove();
          let commentary =
            ulElement.childNodes.length < 3 ? CATEGORY_TEXT.invalid : CATEGORY_TEXT.valid;
          comment.innerHTML = commentary[0];
          comment.style.color = commentary[1];
          let currentHeight = ulElement.getBoundingClientRect().height;
          if (prevHeight < currentHeight) {
            categoryList.style.height = "2.5em";
          }
          categoryInput.value = lastCategory.textContent;
        }
        console.log(ulElement.childNodes.length);
      }
      break;
    default:
      break;
  }
});
