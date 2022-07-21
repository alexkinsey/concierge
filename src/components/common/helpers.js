export function capitaliseFirstLetter(str) {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

export function formatPostcode(str) {
	str = str.toUpperCase();
	str = str.replace(/[^0-9a-z]/gi, '');
	var parts = str.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)\s*(\d[A-Z]{2})$/);
   parts.shift();
	str = parts.join(' ');
	return str;
}
