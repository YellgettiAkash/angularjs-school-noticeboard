function localStorageService() {

	var setItem = function (key, value) {
		return localStorage.setItem(key, JSON.stringify(value));
	}

	var getItem = function (key) {
		// return JSON.parse(localStorage.getItem(key) || '{}');
		return JSON.parse(localStorage.getItem(key));
	}

	var deleteItem = function (key) {
		return localStorage.removeItem(key);
	}

	return {
		get 		: getItem,
		set 		: setItem,
		remove 		: deleteItem
	};
}

