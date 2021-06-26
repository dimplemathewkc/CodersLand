import React, { Component } from 'react';
class Theme extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group row m-1">
                {/* <div className="col-sm-6"></div> */}
                <div className="col-sm-2">
                    <label className="p-1">Theme:</label>
                </div>
                <div className="col-sm-4">
                    <select onChange={this.props.onThemeChange} className="form-select" >
                        {this.props.themes.map(theme => 
                            // {console.log(theme)}
                            <option key={theme} value={theme}>{theme}</option>
                        )}
                    </select>
                </div> 
        </div>
        );
    }
}
 
export default Theme;