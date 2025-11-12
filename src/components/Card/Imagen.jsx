import perrito from '../../assets/images.webp'
 //Ejemplo objeto css
let styles = {
    borderRadius: '50%',
    width: '100%'
}

const Imagen = () => {
  return (
    <img src={perrito} style={styles} className='img-card' alt="perrito" />
  )
}

export default Imagen