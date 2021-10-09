import { useSelector, useDispatch } from "react-redux";
import { getNews } from "./redux/actions/actionCreator";
import News from './components/news/news';

const App = () => {
  const { latestNews, popularNews } = useSelector(store => store?.news || {});
  const { latestNewsError, popularNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return(
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
