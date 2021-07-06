import React from 'react';
import DownloadLink from "react-download-link";
const Settings = (props) => {
    console.log(props)
    const {toggleModal, code} = props
    return ( 
         <div class="card-header border-0">
                    <button type="button"  onClick={toggleModal} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-cog" style={{fontSize: "20px"}}></i></span>
                    </button>
                    {/* <button type="button"  onClick={this.expandCard} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-expand" style={{fontSize: "20px"}}></i></span>
                    </button> */}
                    <button type="button" style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right">
                        <DownloadLink
                        label={<span><i className="fa fa-download" style={{fontSize: "20px"}}></i></span>}
                        filename="fileName.txt"
                        exportFile={() => code}
/>
                    </button>
                    {/* <button type="button"  onClick={this.toggleModal} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-info" style={{fontSize: "20px"}}></i></span>
                    </button> */}
                </div>
     );
}
 
export default Settings;