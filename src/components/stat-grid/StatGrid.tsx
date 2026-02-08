import iconDown from "@/assets/images/icon-down.svg";
import iconUp from "@/assets/images/icon-up.svg";
import { formatNumber } from "@/utils/formatNumber";
import "./StatGrid.scss";


type SocialStats = {
  platform: string;
  icon: string;
  username: string;
  metric: string;
  total: number;
  change: number;
  trend: string;
}[];

interface StatGridProp {
  socialStats: SocialStats;
}

function StatGrid({ socialStats }: StatGridProp) {
  return (
    <div className="stats-grid">
      {socialStats.map((stat, idex) => (
        <div key={idex} className={`stat-card ${stat.platform}`}>
          <div className="stat-header">
            <img src={stat.icon} alt="" />
            <span className="username">{stat.username}</span>
          </div>
          <div className="stat-numbers">{formatNumber(stat.total)}</div>
          <div className="stat-label">{stat.metric}</div>
          <div className={`stat-delta ${stat.trend}`}>
            {stat.trend == "up" ? (
              <img src={iconUp} alt="iconUp" />
            ) : (
              <img src={iconDown} alt="iconDown" />
            )}
            {stat.change} Today
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatGrid;
