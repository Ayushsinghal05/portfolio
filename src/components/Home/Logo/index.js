import LogoS from '../../../assets/images/my_pic.jpg'
import './index.scss'

const Logo = () => {
  // You can change the className to switch styles:
  // "logo-container" - circular with peachy border (default)
  // "logo-container square-style" - soft square corners  
  // "logo-container polaroid-style" - polaroid frame effect
  
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="Ayush Singhal"
      />
    </div>
  )
}

export default Logo
