const credentialsManager = require('../../support/credentials.manager');

class LoginPageAndroid {
    get inputUsername() {
        return $('~login-username-input');
    };

    get inputPassword() {
        return $('~login-password-input');
    };

    get buttonLogin() {
        return $('~login-login-button');
    }

    async login() {
        await (await this.inputUsername).setValue(credentialsManager["Jessee Baldwin"].login);
        await (await this.inputPassword).setValue(credentialsManager["Jessee Baldwin"].password);
        await (await this.buttonLogin).click();
        await (await this.buttonLogin).waitForExist({reverse: true});
    }
}

module.exports = LoginPageAndroid;
