/**
 * The function changes classes' properties structure to resolve which platform locators to use
 * @param {Object} page page object to be processed
 * @return {Object} page object with modified getters
 */
function proxifyPage(page) {
    return new Proxy(page, {
        get(target, prop) {
            return typeof target[prop] === 'object'
                ? $(target[prop][driver.capabilities.platformName.toLowerCase()])
                : target[prop];
        }
    });
}

module.exports = proxifyPage;