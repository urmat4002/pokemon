import logo from './logo.svg'
import './App.css'
import {useState} from 'react'
import {useEffect} from 'react'
import {Button, Card, Image, Pagination} from 'react-bootstrap'
import {Cards} from './components/Cards'

function App() {
  const [data1, setData] = useState([])
  const [next, setNext] = useState('')
  const [previos, setPrevios] = useState('')

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.next)
        setData(data.results)
        setNext(data.next)
        setPrevios(data.previous)
      })
  }
  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon/')
  }, [])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#FFFFE0',
          flexWrap: 'wrap',
        }}
      >
        {data1 &&
          data1.map((item, index) => <Cards key={index} url={item.url} />)}
      </div>

      <Pagination className="d-flex justify-content-center">
        <Pagination.First
          disabled={!previos}
          onClick={() => fetchData(previos)}
        />
        <Pagination.Last disabled={!next} onClick={() => fetchData(next)} />
      </Pagination>
    </>
  )
}

export default App
