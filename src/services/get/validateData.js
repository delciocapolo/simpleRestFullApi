const simpleValidateFn = (...arr) => {
	return arr.every(
		valor =>
			typeof valor !== 'undefined' &&
			valor !== undefined &&
			valor !== 'undefined' &&
			valor !== ''
	);
};
const multiValidateFn = (arr = []) => arr.every(valor => validateObjFn(valor));
const validateObjFn = (obj = {}) =>
	obj !== undefined &&
	obj !== '' &&
	Object.values(obj).every(
		valor =>
			typeof valor !== 'undefined' &&
			valor !== undefined &&
			valor !== 'undefined' &&
			valor !== ''
	);

module.exports = { simpleValidateFn, multiValidateFn, validateObjFn };
