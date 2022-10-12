import image from '../images/img.png'
export default function Info(){
    return(
        <div className="info">
            <nav>
                {/* aDDING IMAGE */}
                <div className='profile'>
                   <img src={image}/>

                </div>
                <h1 className='fullname'>Sudip Parajuli</h1>
                <h3 className='subtitle'>Tech Enthuastic</h3>
                <h5 className='subsubtitle'>Engineering Student </h5>
                <button className='btn'>Email</button>
                <button className='btn'>Linkedin</button>

            </nav>
        </div>
    )
}