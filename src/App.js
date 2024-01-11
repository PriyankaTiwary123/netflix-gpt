import { Provider } from "react-redux";
import Body from "./pages/Landing";
import appStore from "./appStrore";

// const appRouter = createBrowserRouter([
//   {
//   path:'/',
//   element:<Login/>
// },
// {
//   path:'/browse',
//   element:<Browse/>
// },
// ]);


const App = () => {
  
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
