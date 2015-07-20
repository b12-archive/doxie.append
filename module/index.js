const assign = require('object-assign');

export default (input) => {
  return (data) => assign({}, data,
    {docs: data.docs.append(String(input))}
  );
};
