import { Routes, Route } from 'react-router-dom';
import Authentication from './components/routes/authentication/authentication.component';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import Shop from './components/routes/shop/shop.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;