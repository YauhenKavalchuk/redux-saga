import { useSelector } from "react-redux";
import News from "../../components/news/news";

const App = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const { isDataLoading } = useSelector(store => store?.loader || {});

  return(
    <div>
    {isDataLoading ?
      <h3>Loading...</h3> :
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    }
    </div>
  );
};

export default App;
