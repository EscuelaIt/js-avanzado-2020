
export const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export function validateEmail(email) {
  if(!email || email == '') {
    return false;
  }
  return emailReg.test( email );
}