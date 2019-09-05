const modalPopup = {
  isActive: false,
  addModalEvent: function() {
    const checkArea = document.querySelector(".signup__main__checkarea__text");
    const modal = document.querySelector(".modal");
    const modalClose = document.querySelector(".modal__contents__close");
    const modalBox = document.querySelector(".modal__contents__box");
    const modalBtn = document.querySelector(".modal__contents__btn");
    const checkbox = document.querySelector("#agreement");

    checkArea.addEventListener("click", function() {
      modal.style.display = "block";
    });
    modalClose.addEventListener("click", function() {
      modal.style.display = "none";
    });
    modalBox.addEventListener(
      "scroll",
      function() {
        if (modalBox.offsetHeight + modalBox.scrollTop >= modalBox.scrollHeight) {
          modalBtn.style.backgroundColor = "#2db400";
          this.isActive = true;
        }
      }.bind(this)
    );
    modalBtn.addEventListener(
      "click",
      function() {
        if (this.isActive) {
          modal.style.display = "none";
          checkbox.checked = true;
        }
      }.bind(this)
    );
  }
};

export default modalPopup;
