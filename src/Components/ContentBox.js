import React from 'react'

export default function ContentBox(props) {
    return (
        <div>
            <div className="row" style={{marginTop:'20%'}}>
                <div className="col-md-6 col-12">
                    <img src={`${props.ImageSrc}`} width="100%" alt="img" style={{borderRadius:'2%'}}/>
                </div>
                <div className="col-md-6 col-12 lead pt-5">
                    {props.textContent}
                </div>
            </div>
        </div>
    )
}
