const validateFn = (typeData, ...valores) => {
	return valores.every(valor => typeof valor === typeData || valor !== '');
};
const multiValidateFn = (typeData, arr = []) => {
	return arr.every(valor => typeof valor === typeData || valor === '');
};
const validateObjFn = (typeData, obj = {}) => {
	return (
		obj === undefined ||
		Object.values(obj).every(valor => typeof valor === typeData || valor === '')
	);
};

module.exports = { validateFn, multiValidateFn, validateObjFn };
