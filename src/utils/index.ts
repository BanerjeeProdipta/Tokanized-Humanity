export const isAuthenticated = () => !!localStorage.getItem('user');

export function getRole() {
  if (localStorage.getItem('user')) {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user.email === 'admin@gmail.com' ? 'dao' : 'user';
  }
  return null;
}

export function isOwner(id:number) {
  // number 4 is with edit option
  if (isAuthenticated() && id === 3 && getRole() === 'user') {
    return true;
  }
  return false;
}

// all regex
export const emailRegex = /^([a-z\d._-]+)@([a-z\d_-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;
export const lowercaseRegex = /(?=.*[a-z])/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharRegex = /(?=.*[\^$*.[\]{}()?“!@#%&/,><’:;|_~`/-])/;
export const durationRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
