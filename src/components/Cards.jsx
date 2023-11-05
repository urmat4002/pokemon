import {useState} from 'react'
import {useEffect} from 'react'
import {Card, Image} from 'react-bootstrap'

export const Cards = ({url}) => {
  const [avatar, setAvatar] = useState({})
  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((data) => {
        setAvatar(data)
      }),
    )
  }, [url])
  return (
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
      {avatar.sprites && <Image src={avatar.sprites.front_default} />}
      <Card.Text>{avatar.name}</Card.Text>
    </Card>
  )
}
