
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import AuthProvider from './component/Context/AuthProvider';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import Order from './component/Order/Order';
import MyOrders from './component/MyOrders/MyOrders';
import AddService from './component/AddService/AddService';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>
         <Route exact path='/'>
           <Home></Home>

         </Route>
         <Route path='/home'>
           <Home></Home>

         </Route>
         <Route path='/login'>
           <Login></Login>

         </Route>
         <PrivateRoute path='/manage'>
           <ManageAllOrders></ManageAllOrders>
         </PrivateRoute>
         <PrivateRoute path='/myorders'>
           <MyOrders></MyOrders>
         </PrivateRoute>
         <PrivateRoute path='/addservice'>
           <AddService></AddService>
         </PrivateRoute>
         <PrivateRoute path='/order/:serviceId'>
           <Order></Order>
         </PrivateRoute>
         <Route path='*'>
           <NotFound></NotFound>
         </Route>


       </Switch>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
