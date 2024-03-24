//Parse
const getDecodedString = (str) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
};

export { getDecodedString };
