const cookieParse = str => {
  const getCookieName = /^.+(?==)/gi;
  const getCookieKey = /"([^"]*)":/gi;
  const getCookieValue = /:"([^"]*)"/gi;

  let match;
  let keys = [];
  let values = [];
  let name;
  name = getCookieName.exec(str)[0];
  while ((match = getCookieKey.exec(str)) != null) {
    keys.push(match[1]);
  }
  while ((match = getCookieValue.exec(str)) != null) {
    values.push(match[1]);
  }

  return { [keys[0]]: values[0], [keys[1]]: values[1], [keys[2]]: values[2] };
};

export default cookieParse;
