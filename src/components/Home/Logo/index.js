import LogoS from '../../../assets/images/my_pic.jpg'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="My pic"
      />
    </div>
  )
}

export default Logo
