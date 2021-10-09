import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../redux/actions/actionCreator";
import News from '../../components/news/news';

const LatestNews = () => {
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  return(
    <div>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
    </div>
  );
};

export default LatestNews;
