const titleElement = '/android.widget.TextView[@content-desc="metric-title"';
const valueElement = '/android.widget.TextView[@content-desc="metric-value"';

class MetricWidget {
    constructor(metricName) {
        this._commonMetricRow = `//android.view.ViewGroup[@content-desc="${metricName}"]`;
    }

    get title() {
        return $(this._commonMetricRow + titleElement);
    };

    get value() {
        return $(this._commonMetricRow + valueElement);
    };
}

module.exports = MetricWidget;