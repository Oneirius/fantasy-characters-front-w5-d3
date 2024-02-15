import { Routes, Route } from 'react-router-dom'
import './App.css'
import CharacterList from './pages/CharacterList'
import NavBar from './components/NavBar'
import NewCharacterPage from './pages/NewCharacterPage'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<CharacterList/>}/>
        <Route path='/new' element={<NewCharacterPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
