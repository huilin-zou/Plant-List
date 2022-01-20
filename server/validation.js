const passwordValidation=(password)=>{
    const regEx2 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regEx2.test(password)) {
    return true;
  }
  return false;
}

module.exports = { passwordValidation };