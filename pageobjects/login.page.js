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
        await (await this.inputUsername).setValue('ed-domestic@medifastinc.com');
        await (await this.inputPassword).setValue('Medifast2017**');
        await (await this.buttonLogin).click();
        await (await this.buttonLogin).waitForExist({reverse: true});
    }
}

module.exports = LoginPage;
