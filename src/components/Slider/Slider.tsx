import './Slider.style.css'
import Slick, { Settings } from 'react-slick'

const Slider = (props: Settings) => {
  return (
    <Slick {...props} autoplaySpeed={5000}>
      {props.children}
    </Slick>
  )
}

export default Slider
