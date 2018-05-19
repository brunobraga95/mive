export default function slugify(str) {
  let slugString = str.replace(/^\s+|\s+$/g, '').toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâãèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaaeeeeiiiioooouuuunc------';

  from.split('').forEach((char, index) => {
    slugString = slugString.replace(new RegExp(char, 'g'), to.charAt(index));
  });

  slugString = slugString
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return slugString;
}
