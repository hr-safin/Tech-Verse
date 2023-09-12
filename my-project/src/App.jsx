import { useState } from "react"
import Cards from "./components/Cards"
import Header from "./components/Header"


function App() {
  const [theme, setTheme] = useState(true)

  const handleTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className={theme ? " lg:mx-24" : "bg-[#0a192f] text-white lg:px-24"}>
      <Header theme={theme}  handleTheme={handleTheme} />
      <Cards theme={theme} handleTheme={handleTheme} />
    </div>
  )
}

export default App
