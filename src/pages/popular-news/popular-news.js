import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_POPULAR_NEWS } from "../../redux/constants";
import News from "../../components/news/news";

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_POPULAR_NEWS });
  }, [dispatch]);

  return(
    <div>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
