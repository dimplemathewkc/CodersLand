import React, { Component } from 'react';
class LangSelection extends Component {
    render() { 
        return (

<form>
            <div className="form-group row m-1">
                
                <div className="col-sm-3">
                    <label className="p-1">Language:</label>
                </div>
                <div className="col-sm-8">
                    <select className="form-select" onChange={this.props.languageChange}>
                        <option key={this.props.current_lang}>{this.props.current_lang}</option>
                        {this.props.lang.map(lang => 
                              this.props.current_lang === lang['lang']? "":<option key={lang['id']} value={lang['lang']}>{lang['lang']}</option>
                        )}
                    </select>
                </div>
            
            </div>
</form>

            
         );
    }
}
 
export default LangSelection;