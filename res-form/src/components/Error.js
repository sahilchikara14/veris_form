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
                            Please fill all the required Fields
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details