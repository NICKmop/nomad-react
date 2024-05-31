import { Home } from './routes/Home';
import { Detail } from './routes/Detail';
import {
  BrowserRouter,
  Route, 
  Routes,
  Link
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello:id" element={
          <h1>hello</h1>
        }/> 
        {/* :id -> parameter로 URL변수 받기 가능 */}
        <Route path="/movie/:id" element={
          <Detail />
        }/> 

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
