import React from 'react'

const Details = (props) => {
    let styling = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }

    return (
        <div>
            <div className="modal show fade" style={styling} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Details</h5>
                            <button type="button" className="btn-close" onClick={props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <strong>Name:</strong>{props.name}

                            </div>
                            <div>
                                <strong>Email:</strong>{props.email}
                            </div>
                            {
                                (props.extra == null) ? (
                                    <div>
                                        <strong>Extra Info:</strong>NA
                                    </div>
                                ) : (
                                    <div>
                                        <strong>Extra Info:</strong>{props.extra}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details