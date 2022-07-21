import { fix } from 'postcode';

export function capitaliseFirstLetter(str) {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

export function formatPostcode(str) {
  str = str.toUpperCase();
  str = str.replace(/[^0-9a-z]/gi, '');
  str = fix(str);
  return str;
}
