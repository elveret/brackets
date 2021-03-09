module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let counter = '';

  for (i = 0; i < bracketsConfig.length; i++) {
      open.push(bracketsConfig[i][0]);
      close.push(bracketsConfig[i][1]);
  }

  for (let char of str) {
      if (open.includes(char) && (open.indexOf(char) !== close.indexOf(char))) {
          counter += char;
      } else if (open.includes(char) && (open.indexOf(char) === close.indexOf(char))) {
          if (counter.length !== 0 && (counter[counter.length - 1] === char)) {
              counter = counter.slice(0, (counter.length - 1));
          } else {
              counter += char;
          }
      } else {
          if (close.includes(char) && (close.indexOf(char) == open.indexOf(counter[counter.length - 1]))) {
              counter = counter.slice(0, (counter.length - 1));
          } else {
              return false;
          }
      }
  }
  return (counter.length === 0) ? true : false;
}
