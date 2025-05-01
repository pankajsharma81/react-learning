import './Pokemon.css'

const Pokemon = ({name,image}) => {
  return (
    <div className='pokemon'>
      <div className='pokemon-name'>{name}</div>
      <div><img className='pokemon-image' src={image} /></div>
    </div>
  )
}

export default Pokemon