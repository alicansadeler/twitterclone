import { Sidebar } from "../COMPONENTS/SidebarComponents/Sidebar";
import { TimeLine } from "../COMPONENTS/TimeLineComponents/TimeLine";
import { TrendList } from "../COMPONENTS/TimeLineComponents/TrendList";
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
