import './App.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <h1>Welcome to IDShop</h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
