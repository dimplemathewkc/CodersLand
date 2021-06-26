import React, { Component } from 'react';
class LangSelection extends Component {
    render() { 
        return (

<form>
            <div className="form-group row m-1">
                
                <div className="col-sm-2">
                    <label className="p-1">Language:</label>
                </div>
                <div className="col-sm-4">
                    <select className="form-select" onChange={this.props.languageChange}>
                    {this.props.lang.map(lang =>
                        <option key={lang['id']} value={lang['lang']} >{lang['lang']}</option>
                    )}
                    </select>
                </div>
            
            </div>
</form>

            
         );
    }
}
 
export default LangSelection;