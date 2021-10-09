import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../redux/actions/actionCreator";
import News from '../../components/news/news';

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  return(
    <div>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
