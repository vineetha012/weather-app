import './App.css';
import { WeatherAppContextProvider } from './components/context';
import { Home } from './components/home';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Search } from './components/searchpage';
import './components/style.css'
import { Details } from './components/details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WeatherAppContextProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/details' element={<Details/>}/>
          </Routes>
          

        </WeatherAppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
