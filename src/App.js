import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/actions/actionCreator";

const App = () => {
  const count = useSelector(store => store?.counter?.count || 0);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  return(
    <div>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
