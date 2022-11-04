import ReactDOM  from "react-dom"
import styles from "./Modal.module.css"

const Backdrop = props => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>
}

const Overlay = props => {
  return (<div className={styles.modal}>
{props.children}
  </div>)
}

const portalElement = document.getElementById("modal")

const Modal = props => {
  return (<>
    {ReactDOM.createPortal(<Backdrop onClose={ props.onClose} />, portalElement)}
    {ReactDOM.createPortal(<Overlay>{ props.children}</Overlay>, portalElement)}
  </>);
}
 
export default Modal;