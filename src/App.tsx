import { formatWithComma } from "@/utils/formatNumber";
import { overviewStats } from "@/assets/data/overviews.mock";
import { socialStats } from "@/assets/data/socials.mock";
import Stat_Grid from "@/components/stat-grid/StatGrid";
import Overviews from "@/components/overviews/Overviews";
import Switch_Theme from "@/components/switch-theme/SwitchTheme";
import '@/styles/App.scss'

function App() {

  const totalFollowers = socialStats.reduce(
    (sum, stat) => sum + stat.total, 0
  );
  
  return (
    <>
      <header className="dashboard-heade">
        <div>
          <h1 className="dashboard-title">Social Media Dashboard</h1>
          <p className="dashboard-total">
            Total Followers: {formatWithComma(totalFollowers)}
          </p>
        </div>
        <hr />
        <Switch_Theme />
      </header>
      <main>
        <Stat_Grid socialStats={socialStats} />
        <Overviews overviewStats={overviewStats} />
      </main>
    </>
  );
}

export default App;
