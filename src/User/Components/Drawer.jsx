import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Drawer = ({children,handleClose}) => {
    return (
        <div className="drawer">
            <div className="drawer__container">
                <div className="drawer__close">
                    <FontAwesomeIcon onClick={handleClose} size="lg" icon={faTimesCircle} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Drawer
