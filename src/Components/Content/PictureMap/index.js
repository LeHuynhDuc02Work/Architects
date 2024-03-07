import style from './PictureMap.module.css'
import picMap from "../../../Img/map.jpg"

function PictureMap() {
    return (
        <div className={style.picture}>
            <img src={picMap} atl="map"/>
        </div>
    )
}

export default PictureMap