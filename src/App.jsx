import { useState } from 'react'
import SearchBox from './components/search-box/SearchBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox />
    </>
  )
}

export default App
