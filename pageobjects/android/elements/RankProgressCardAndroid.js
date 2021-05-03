class RankProgressCardAndroid{

    get baseElement() {
        return $('~rank-progress-card');
    }

    get cardTitle() {
        return $('~rank-progress-title');
    }

    get infoIcon() {
        return $('~rank-6');
    }

    get rankProgressDescription() {
        return $('~rank-progress-description');
    }

    get rankSeeProgress() {
        return $('~rank-see-progress');
    }

    get rankProgressBar() {
        return $('~rank-progress-bar');
    }
}

module.exports = RankProgressCardAndroid;