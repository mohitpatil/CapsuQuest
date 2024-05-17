import './App.css'
import Card from './components/Card'
import SearchBox from './components/SearchBox'
import { useApiContext } from './utils/useContent'

const App = () => {
  const { saltData } = useApiContext()
  return (
    <div className='min-h-screen'>
      <div className="p-10 flex flex-col gap-8 max-w-6xl m-auto">
        <h1 className="text-3xl font-bold text-center">Cappsule</h1>
        <SearchBox />
        <div className="border border-gray-400"></div>
        <Card />
        {!saltData && <div className="h-full flex items-center justify-center">
          <h1 className="text-center text-zinc-400 font-semibold">
            "Finding medicines with amazing discount"
          </h1>
        </div>}
      </div>
    </div>
  )
}

export default App
