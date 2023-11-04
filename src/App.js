import logo from './logo.svg'
import './App.css'
import {useState} from 'react'
import {useEffect} from 'react'
import {Card, Image} from 'react-bootstrap'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ ')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results)
        setData(data.results)
      })
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#FFFFE0',
        flexWrap: 'wrap',
      }}
    >
      {data &&
        data.map((item, index) => (
          <Card
            style={{
              display: 'flex',
              justifyContent: 'center',
              background: '#00FFFF',
              width: '200px',
              borderRadius: '5px',
              border: '1px solid black',
              margin: '5px',
            }}
          >
            <Image src={item.url} />
            <Card.Text>{item.name}</Card.Text>
          </Card>
        ))}
    </div>
  )
}

export default App
