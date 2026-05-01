export const ADMIN_EMAIL = "karmugilan.2211029@srec.ac.in@gmail.com";

export function isAdmin(user: any) {
  return user?.email === ADMIN_EMAIL;
}