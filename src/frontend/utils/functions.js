export const isEmptyObject = function (obj) {
	return Object.getOwnPropertyNames(obj).length === 0;
}

export const isServer = function () {
	return !(typeof window !== 'undefined' && window.document);
}
