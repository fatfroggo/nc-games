
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Users from './components/Users'
import Reviews from './components/Reviews'
import SingleReview from './components/SingleReview'
import ErrorMsg from './components/ErrorMsg'

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Reviews />}
        />
        <Route
          path="/users"
          element={<Users/>}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview />}
        />
        <Route
          path="/*"
          element={<ErrorMsg />} />
      </Routes>
    </div>
  );
}

export default App;
