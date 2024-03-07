import style from './About.module.css'
import pic1 from '../../../Img/team1.jpg'
import pic2 from '../../../Img/team2.jpg'
import pic3 from '../../../Img/team3.jpg'
import pic4 from '../../../Img/team4.jpg'

function About() {

    return (
        <div className={style.about} id='about'>
            <h3 className={style.title}>About</h3>
            <p className={style.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div class={style.listContact}>
                <div className={style.item}>
                    <img src={pic2} alt="John" />
                    <h3>John Doe</h3>
                    <p className={style.position}>CEO &amp; Founder</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className={style.btnContact}>Contact</button></p>
                </div>
                <div className={style.item}>
                    <img src={pic1} alt="Jane" />
                    <h3>Jane Doe</h3>
                    <p className={style.position}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className={style.btnContact}>Contact</button></p>
                </div>
                <div className={style.item}>
                    <img src={pic3} alt="Mike" />
                    <h3>Mike Ross</h3>
                    <p className={style.position}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className={style.btnContact}>Contact</button></p>
                </div>
                <div className={style.item}>
                    <img src={pic4} alt="Dan" />
                    <h3>Dan Star</h3>
                    <p className={style.position}>Architect</p>
                    <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button className={style.btnContact}>Contact</button></p>
                </div>
            </div>
        </div>
    )
}

export default About