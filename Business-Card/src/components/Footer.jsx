import fb from '../logos/facebook.png'
import twitter from '../logos/twitter.png'
import github from '../logos/github.png'
import linkedin from '../logos/linkedin.png'

export default function Footer() {
  return (

      <div className="icons">
        <div className='icon'><img src={fb} width="100px"></img></div>
        <div className='icon'><img src={twitter} width="100px"></img></div>
        <div className='icon'><img src={linkedin} width="100px"></img></div>
        <div className='icon'><img src={github} width="100px"></img></div>
      </div>
  );
}
