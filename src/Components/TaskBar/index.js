import style from './taskBar.module.css'

function TaskBar() {
    return (
        <div className={style.bar}>
            <a href="#" className={`${style.barItem} ${style.floatLeft}`}>
                <b>BR</b> Architects
            </a>
            <div className={style.floatRight}>
                <a href="#projects" className={style.barItem}>
                    Projects
                </a>
                <a href="#about" className={style.barItem}>
                    About
                </a>
                <a href="#contact" className={style.barItem}>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default TaskBar