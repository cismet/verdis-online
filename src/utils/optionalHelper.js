export default function optional(cb) {
	try {
		return cb();
	} catch (e) {
		if (e instanceof TypeError) return null;
		else throw e;
	}
}
