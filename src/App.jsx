import Hero from "./components/Hero"

function App() {
  
  return (
    <main className='relative flex items-start justify-center flex-col mx-auto pb-20 pt-36 bg-black-100 sm:px-10 px-5 overflow-hidden'>
      <div className="max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  )
}

export default App
