import './App.css'
import Card from './components/Card'
import SearchBox from './components/SearchBox'

function App() {

  return (
    <div className='min-h-screen'>
      <div className="p-10 flex flex-col gap-8 max-w-6xl m-auto">
        <h1 className="text-3xl font-bold text-center">Cappsule</h1>
        <SearchBox />
        <div className='' />
        <Card />
      </div>
    </div>
  )
}

export default App
