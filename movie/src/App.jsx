import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {
  let [title, setTitle] = useState('')
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  let [movies, setMovies] = useState([])

  let getMovies=() => {
    let apiUrl;

    if(title=='') {
      apiUrl= `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    else {
      apiUrl= `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
  
    }

    axios.get(apiUrl)
      .then((res) => res.data)
      .then((finalRes) => {
        setMovies(finalRes.results)

      })
  }
  useEffect(() => {
    getMovies()
  }, [title])

  let getTextvalue = (event) => {
    setTitle(event.target.value)
  }

  return (
    <>
      <button className='bg-white p-3 m-2' onClick={() => setCount1(count1 + 1)}>Change Counter {count1}</button>
      <button className='bg-white p-3 m-2' onClick={() => setCount2(count2 + 1)}>Change Counter {count2}</button>


      <h1 className='text-white text-center text-[30px] font-bold'>Movies</h1>
      <form action="" className='max-w-[1170px] m-auto'>
        <input onChange={getTextvalue} type="text" className='rounded-[20px] h-[50px] w-[100%] text-white  px-3 border-2 border-white mt-4' placeholder='Search Movie Nmae' />
      </form>
      <div className='max-w-[1320px] m-auto grid grid-cols-4 gap-[20px] mt-5'>
        {
          movies.length >= 1
            ?
            movies.map((items,index) => <MovieItems data={items} key={index}/>)

            :
            <div className='text-center text-white'>
              <img src="https://media.tenor.com/1Y8jz3h3k1IAAAAC/loading.gif" alt="" />
              <h1 className='text-2xl font-bold'>No Data Found</h1>
            </div>
        }
      </div>
    </>
  )
}

export default App

function MovieItems({ data }) {
  let { title, poster_path, overview } = data
  return (
    <div className='bg-white'>
      <div className='relative group'>
        <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="" />
        <div className='absolute w-[100%] h-[100%] duration-300 bg-yellow-500 top-0 scale-[0] group-hover:scale-[1] flex items-center justify-center p-5'>
          {overview}

        </div>
      </div>
      <h1 className='text-xl font-bold text-center py-3'>
        {title}
      </h1>
    </div>
  )
}
