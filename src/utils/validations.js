/* eslint import/prefer-default-export: 0 */
/* eslint no-useless-escape: 0 */
/* eslint max-len: 0 */

export const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const urlRegex = /(https?:\/\/)((?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,16}\b)([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

export default {
  emailValidation,
  urlRegex,
};
