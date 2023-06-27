import './App.css'
import Hero from './components/Hero'
import ListaPartnar from './components/ListPartnar'
import OptionsList from './components/ListProjects'
import ListService from './components/ListService'
import Footer from './layout/footer'
import Copywrite from './layout/footer/Copywrite'
import Header from './layout/header'

const titleMenu = ['Company', 'Support', 'Get In Toch']

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ListaPartnar />
      <ListService />
      <OptionsList />
      <Footer />
      <Copywrite />
    </>
  )
}

export default App
