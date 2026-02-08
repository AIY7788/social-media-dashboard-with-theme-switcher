import { formatWithComma } from "./utils/formatNumber";
import { socialStats, overviewStats } from "./assets/data";
import Stat_Grid from "./components/Stat_Grid";
import Overviews from "./components/Overviews";
import Switch_Theme from "./components/Switch_Theme";
import './styles/App.scss'

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
