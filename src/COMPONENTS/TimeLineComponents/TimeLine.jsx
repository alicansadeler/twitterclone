import { CreatePost } from "./CreatePost";
import Header from "./Header";
import { Tweet } from "./Tweet";

// twittlerin listeleneceği ana sayfanın orta blogğu; sidebar ve trendlist ile Home'da listelenecek...
export const TimeLine = () => {
  return (
    <>
      <Header />
      <CreatePost />
      <Tweet />
    </>
  );
};
