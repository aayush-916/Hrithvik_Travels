import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom';
import Home from "./Home";
//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/home' exact Component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
