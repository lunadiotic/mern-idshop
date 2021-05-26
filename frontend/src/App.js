import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <HomePage></HomePage>
        </Container>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
