import { Sidebar } from "../COMPONENTS/HomeComponents/Sidebar";
import { TimeLine } from "../COMPONENTS/HomeComponents/TimeLine";
import { TrendList } from "../COMPONENTS/HomeComponents/TrendList";
export const Home = () => {
  return (
    <>
      <div className="homepage-container">
        <section className="homepage-sidebar">
          <Sidebar />
        </section>
        <section className="homepage-timeline">
          <TimeLine />
        </section>
        <section className="homepage-trend">
          <TrendList />
        </section>
      </div>
    </>
  );
};
