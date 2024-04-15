function emailNotValid(txt) {
  let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (txt.match(validRegex) === null) {
    return true;
  }
  return false;
}

export { emailNotValid };
