const axios = require('axios');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const DIR = 'app';
const APP_NAME = 'app-staging.apk'
const APK_GOOGLE_DRIVE_PATH = 'https://drive.google.com/u/0/uc?export=download&confirm=5aSY&id=1Lj8hQo8SNeoU_cpbXQ6Z65fljqTKpz-9'

async function downloadApk() {
    const buffer = await axios.get(APK_GOOGLE_DRIVE_PATH);
    return buffer;
}

fse.ensureDir(DIR);
if (!fs.existsSync(path.join(DIR, APP_NAME))) {
    downloadApk().then(apk => fs.writeFileSync(APP_NAME, apk));
}
