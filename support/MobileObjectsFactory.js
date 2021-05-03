const LoginPageAndroid = require('../pageobjects/android/LoginPageAndroid');
const DashboardPageAndroid = require('../pageobjects/android/DashboardPageAndroid');
const RankProgressCardAndroid = require('../pageobjects/android/elements/RankProgressCardAndroid');
const CoachesSectionAndroid = require('../pageobjects/android/elements/CoachesSectionAndroid');
const TeamsOverviewSectionAndroid = require('../pageobjects/android/elements/TeamsOverviewSectionAndroid');
const SlidingCardAndroid = require('../pageobjects/android/elements/SlidingCardAndroid');

class MobileObjectsFactory {
    platform = process.argv[3];

    storage = {
        android:
            {
                rankProgressCard: RankProgressCardAndroid,
                slidingCard: SlidingCardAndroid,
                coachesSection: CoachesSectionAndroid,
                teamsOverviewSection: TeamsOverviewSectionAndroid,
                loginPage: LoginPageAndroid,
                dashboardPage: DashboardPageAndroid
            }
    }

    initObject(className, ...args) {
        const classReference = this.storage[this.platform][className];
        if (!classReference) throw new Error(`Storage object does not have corresponding property for '${className}' argument.`);
        return new classReference(...args);
    };
}

module.exports = new MobileObjectsFactory();