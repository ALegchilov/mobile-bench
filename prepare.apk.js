const axios = require('axios');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const DIR = 'app';
const APP_NAME = 'app-staging.apk'
const GOOGLE_DRIVE_PATH = 'https://drive.google.com/u/0'
const DOWNLOAD_APK_PATH = `${GOOGLE_DRIVE_PATH}/uc?id=1Lj8hQo8SNeoU_cpbXQ6Z65fljqTKpz-9&export=download`
const apkFilePath = path.join(DIR, APP_NAME);

async function downloadApk() {
    const response = await axios.get(DOWNLOAD_APK_PATH);
    const confirmationPath = response.data.match(/"(\/uc?.+?)"/)[1].replace(/&amp;/g, '&');
    const cookies = response.headers["set-cookie"][0]
    console.log('Downloading APK. The process may take up to 3 minutes')
    console.log(GOOGLE_DRIVE_PATH + confirmationPath);
    const {data} = await axios.request({
        url: GOOGLE_DRIVE_PATH + confirmationPath,
        method: "get",
        responseType: 'arraybuffer',
        headers: {
            Cookie: cookies
        }
    });
    return data;
}

fse.ensureDir(DIR).then(() => {
    if (!fs.existsSync(apkFilePath)) {
        downloadApk().then(apk => {
            console.log(`Downloading completed. File size: ${(Buffer.byteLength(apk) / 1048576).toFixed(2)} MB`);
            fs.writeFileSync(apkFilePath, apk);
        });
    }
});
