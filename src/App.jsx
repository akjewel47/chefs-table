
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Carts from './Components/CartContainer/Carts/Carts'
import Headings from './Components/Headings/Headings'
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'


function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleButton = (p) => {
    const newBookmarks = [...bookmarks, p]
    setBookmarks(newBookmarks)
 }
 console.log(bookmarks)
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Headings></Headings>
      <div className='md:flex container mx-auto'>
        <Carts 
        handleButton={handleButton}>       
        </Carts>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
