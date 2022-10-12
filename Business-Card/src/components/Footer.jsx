import fb from '../logos/facebook.png'
import twitter from '../logos/twitter.png'
import github from '../logos/github.png'
import linkedin from '../logos/linkedin.png'

export default function Footer() {
  return (

      <div className="icons">
        <div className='icon'><img src={fb} width="40px"></img></div>
        <div className='icon'><img src={twitter} width="40px"></img></div>
        <div className='icon'><img src={linkedin} width="40px"></img></div>
        <div className='icon'><img src={github} width="40px"></img></div>
      </div>
  );
}
