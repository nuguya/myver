const getCookieName = /^.+(?==)/;
const getCookieKey = /"([^"]*)":/g;

const str = `myverCookie={"sesssion_id":"5efc3a30-d0bf-11e9-bc0d-3b6c32df7527","username":"김근영","user_id":"emsud12"}`;

let match;
console.log(getCookieName.exec(str)[0]);
while ((match = getCookieKey.exec(str)) != null) {
  console.log(match[1]);
}
