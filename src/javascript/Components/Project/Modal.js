import React, { useEffect } from 'react';

const Modal = props => {

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)

        return function cleanup() {
            document.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>

                <div className="modal-body">{props.children}</div>

                <div className="modal-footer">
                    <button onClick={props.onClose} type="button" className="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal