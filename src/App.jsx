import './App.scss'
import './partials/_reset.scss'

import { Header } from './Components/Header/Header'
import { Intro } from './Components/Intro/Intro'
import { Options } from './Components/Options/Options'
import { Final } from './Components/Final/Final'
import { Footer } from './Components/Footer/Footer'

const App = ()=>{
  return (
    <div className="App">
      <Header />
      <Intro />
      <Options />
      <Final />
      <Footer />
    </div>
  )
}

export default App