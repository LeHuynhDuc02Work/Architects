import style from './style.module.css'

function Contact() {
    return (
        <div className={style.contact} id='contact'>
            <h3 className={style.title}>Contact</h3>
            <p className={style.desc}>Lets get in touch and talk about your next project.</p>

            <form action="">
                <input className={style.input} type="text" placeholder="Name" required="" name="Name" />
                <input className={style.input} type="text" placeholder="Email" required="" name="Email" />
                <input className={style.input} type="text" placeholder="Subject" required="" name="Subject" />
                <input className={style.input} type="text" placeholder="Comment" required="" name="Comment" />
                <button className={style.btnSend} type="submit">
                     SEND MESSAGE
                </button>
            </form>
        </div>
    )
}

export default Contact