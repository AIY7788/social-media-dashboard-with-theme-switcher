import iconDown from "@/assets/images/icon-down.svg";
import iconUp from "@/assets/images/icon-up.svg";
import { formatNumber } from "@/utils/formatNumber";
import './Overviews.scss';

type OverviewStats = {
  platform: string;
  icon: string;
  label: string;
  value: number;
  changePercent: number;
  trend: string;
}[];

function Overviews({ overviewStats }: { overviewStats: OverviewStats }) {
  return (
    <section className="overview">
      <h2 className="overview-title">Overview - Today</h2>

      <div className="overview-grid">
        {overviewStats.map((overview, index) => (
          <div key={index} className="overview-card">
            <div className="overview-header">
              <span className="overview-label">{overview.label}</span>
              <img src={overview.icon} alt={overview.platform} />
            </div>
            <div className="overview-change">
              <div className="overview-value">
                {formatNumber(overview.value)}
              </div>
              <div className={`overview-trend ${overview.trend}`}>
                {overview.trend == "up" ? (
                  <img src={iconUp} alt="iconUp" />
                ) : (
                  <img src={iconDown} alt="iconDown" />
                )}
                {overview.changePercent}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Overviews;
