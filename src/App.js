import logo from './logo.svg';
import './App.css';
import PhotoContextProvider from './Context/PhotoContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Item from './components/Item';
function App() {
  const str = ["10000","00010"];
  const length = str[0].length;
  var result = '';
  (function(){
    var a=b=5
  }){};
  console.log(result);
  return (
    <PhotoContextProvider>
      <BrowserRouter >
        <Routes>
          <Route element={<Header />} path="/"> 
            <Route path='/:itemSearch' element={<Item />}/>
            <Route path='/search/:itemSearch' element={<Item />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
  );
}

export default App;
