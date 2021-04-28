const credentialsManager = require('../support/credentials.manager')

class LoginPage {
    get inputUsername() {
        return {android: '~login-username-input', ios: ''}
    };

    get inputPassword() {
        return {android: '~login-password-input', ios: 'dummie'}
    };

    get buttonLogin() {
        return {android: '~login-login-button', ios: 'dummie'}
    }

    async login() {
        await (await this.inputUsername).setValue(credentialsManager["Jessee Baldwin"].login);
        await (await this.inputPassword).setValue(credentialsManager["Jessee Baldwin"].password);
        await (await this.buttonLogin).click();
        await (await this.buttonLogin).waitForExist({reverse: true});
    }
}

module.exports = LoginPage;
