import '../../scss/home.scss';

import Blob from '../../assets/path3.png';

const Home = () =>{ 
    return(
        <div className='land-page'>
            <img src={Blob} className='land-page-bg1'/>
            <img src={Blob} className='land-page-bg1'/>
            <div className='land-page-title'>
                <h1>Librarium</h1>
                <p>O lugar onde histórias mágicas são contadas e sonhos são criados</p>
                <div className='land-page-links'>
                    <a className="login-btn" href="/Login">Login</a>
                    <a className="cad-btn" href="/Cadastrar">Cadastrar</a>
                </div>
            </div>
        </div>
    )
}
export default Home;