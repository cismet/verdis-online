/**
 * STORE
 * 
 * Holds the state, and when a new action arrives runs the 
 * dispatch -> middleware -> reducers pipeline, 
 * and notifies subscribers when the state is replaced by a new one.
 */

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
