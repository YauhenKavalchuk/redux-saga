import { useSelector } from "react-redux";

const App = () => {
  const store = useSelector(store => store);
  console.log(store);

  return(<h1>Hello world!</h1>);
};

export default App;
