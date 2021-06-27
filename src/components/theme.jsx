import React, { Component } from 'react';
class Theme extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group row m-1">
                {/* <div className="col-sm-6"></div> */}
                <div className="col-sm-3">
                    <label className="p-1">Theme:</label>
                </div>
                <div className="col-sm-8">
                    <select onChange={this.props.onThemeChange} className="form-select">
                            <option key={this.props.current_theme}>{this.props.current_theme}</option>
                            {this.props.themes.map(theme => 
                                this.props.current_theme !== theme?<option key={theme} value={theme}>{theme}</option>:""
                            )}
                    </select>
                </div> 
        </div>
        );
    }
}
 
export default Theme;