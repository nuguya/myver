const setCookie = (name, value) => {
  var date = new Date();
  date.setTime(date.getTime() + 1000000);
  document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

export default setCookie;
