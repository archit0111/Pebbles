import {createPortal} from 'react-dom'

function Modal ({children,handelClose}){
    return createPortal(
        <div className='bg-amber-50/70 p-4 md:p-10 md:px-25 inset-0 fixed place-content-center z-50' onClick={handelClose}>
            <div onClick={(e)=>e.stopPropagation()}>{children}</div>
        </div>,document.getElementById("modal_div")
    )
}

export default Modal