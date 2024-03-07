import style from './header.module.css'
import headerImg from '../../Img/architect.jpg'

function header() {
    return (
        <div className={style.header}>
            <img className={style.headerImg} src={headerImg} alt="Architecture" width="1500" height="800"></img>
            <div className={style.displayMiddle}>
                <h1 className={style.xxLarge}><span className={style.headerContent}><b>BR</b></span> <span className={`${style.headerContent} ${style.formatText}`}>Architects</span></h1>
            </div>
        </div>
    )
}

export default header