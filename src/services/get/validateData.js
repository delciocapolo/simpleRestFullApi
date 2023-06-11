const validateFn = (typeData, ...valores) => {
	return valores.every(valor => typeof valor === typeData);
};
const multiValidateFn = (typeData, arr = []) => {
	return arr.every(valor => typeof valor === typeData);
};

module.exports = { validateFn, multiValidateFn };
