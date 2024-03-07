import style from './style.module.css'
import house2 from '../../../Img/house2.jpg'
import house3 from '../../../Img/house3.jpg'
import house4 from '../../../Img/house4.jpg'
import house5 from '../../../Img/house5.jpg'

function Projects() {
    return (
        <div className={style.projects} id='projects'>
            <div className={style.title}>
                <h3 className="">Projects</h3>
            </div>
            <div className={style.listItem}>
                <div className={style.item}>
                    <div className={style.itemName}>Summer House</div>
                    <img className={style.itemImg} src={house2} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Brick House</div>
                    <img className={style.itemImg} src={house3} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Renovated</div>
                    <img className={style.itemImg} src={house4} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Barn House</div>
                    <img className={style.itemImg} src={house5} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Summer House</div>
                    <img className={style.itemImg} src={house3} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Brick House</div>
                    <img className={style.itemImg} src={house2} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Renovated</div>
                    <img className={style.itemImg} src={house5} alt="House"/>
                </div>
                <div className={style.item}>
                    <div className={style.itemName}>Barn House</div>
                    <img className={style.itemImg} src={house4} alt="House"/>
                </div>
            </div>
        </div>
    )
}

export default Projects