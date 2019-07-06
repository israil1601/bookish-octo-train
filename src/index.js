// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj = {}
	if (currency >= 10000) {
		return { error: "You are rich, my friend! We don't have so much coins for exchange" }
	}
	if (currency <= 0) {
		return {}
	}

	const onHalf = Math.floor(currency / 50)
	if (onHalf) {
		obj.H = Math.floor(currency / 50);
		currency = currency - obj.H * 50
	}
	if (currency / 25 >= 1) {
		obj.Q = Math.floor(currency / 25);
		currency = currency - obj.Q * 25
	}
	if (currency / 10 >= 1) {
		obj.D = Math.floor(currency / 10)
		currency = currency - obj.D * 10
	}
	if (currency / 5 >= 1) {
		obj.N = Math.floor(currency / 5)
		currency = currency - obj.N * 5
	}
	if (currency) {
		obj.P = currency
	}

	return obj
}
