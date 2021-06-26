import React, { Component } from 'react';
import '../App.css';
import LangSelection from './languageSelection';
import Theme from './theme';
import Modal from "react-modal";
import axios from 'axios'
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/ext-beautify'

Modal.setAppElement("#root");

class Editor extends Component {

    state = { 
        status: "",
        theme: 'monokai',
        lang: [ {'id':1, 'lang':'python'},
                    {'id':2, 'lang':'javascript'},
                    {'id':3, 'lang':'java'},
                    {'id':4, 'lang':'ruby'},
                    {'id':5, 'lang':'yaml'}
                ],
        theme_list : ['monokai','kuroir','github',
                'tomorrow','twilight','xcode','textmate',
                'solarized_dark','solarized_light','terminal'],
        language: 'python',
        code: '',
        result:'',
        trace:'',
        isOpen: false
     }

     handleLanguageChange = (e) => {
         console.log("Language Change happened",e.target.value)
         const language = e.target.value
         this.setState({language})
     }
     handleTheme = (e) => {
        console.log("Changing theme", e.target.value)
        const theme = e.target.value
        this.setState({theme})
     }
     
     
     handleCode = () => {
         console.log("Code was submitted",this.state.code)
         let result = "Executing ... 🐑 🤘"
         this.setState({result})

         const url = " http://127.0.0.1:8000/compile-python/"
         const code = this.state.code
         setTimeout(()=> {
            axios.post(url,{code}).then(res => {
                console.log(res)
                const result = res.data["resrun"]
                const trace = res.data["trace"]
                const status = res.data["status"]
                console.log(trace)
                this.setState({result})
                this.setState({trace})
                this.setState({status})

            })},3000)
     }
    
     updateCode(value) {
        console.log(value)
        let code = value
        this.setState({code})
	}
    toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 customStyles = {
     overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
  content: {
    top: '50%',
    left: '50%',
    right: '60%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-60%, -50%)',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '6px',

  },
};

    render() { 
        return ( 
            <div className="containerFluid">
                <div className="row float-right">
                    <button type="button"  onClick={this.toggleModal} style={{transition: "transform .2s" }} className="btn btn-default m-2 border-0" aria-label="Left Align">
                        <span><i className="fa fa-cog" style={{fontSize: "36px"}}></i></span>
                    </button>
                    <Modal
                            isOpen={this.state.isOpen}
                            onRequestClose={this.toggleModal}
                            contentLabel="My dialog"
                            style={this.customStyles}
                            closeTimeoutMS={500}
                        >
                        <div className="container ">
                            <div className="container">
                                
                                <button className="btn btn-secondary float-right" onClick={this.toggleModal}><i className="fa fa-close"></i></button>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Theme onThemeChange={this.handleTheme} themes={this.state.theme_list}/>
                                        <LangSelection languageChange={this.handleLanguageChange} lang={this.state.lang}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        
                    </Modal>
                </div>
            <div className="container">
                <br></br>
            <div className="row m-2"></div>
            <div className="card shadow-lg p-3 mb-5 border-0 bg-white">   
                <div className="row m-2">
                    <div className="col-md-6 card">
                        <AceEditor
                            mode={this.state.language}
                            onChange={(newValue) => this.updateCode(newValue)}
                            value={this.state.code}
                            theme={this.state.theme}
                            name="coder-land"
                            setOptions={{
                                showLineNumbers: true,
                                tabSize: 4,
                                showGutter: true
                                }}
                            width="100%"
                            fontSize={14}
                            showPrintMargin={true}
                            focus={true}
                            editorProps={{ $blockScrolling: true }}
                            wrapEnabled= {true}
                            highlightActiveLine={true}
                            autoScrollEditorIntoView ={true}  />

                    </div>
                   
                    <div className="card col-md-6">
                        <div className="card-body">
                            <div>
                                {this.state.status}
                            </div>
                            <div>
                                {this.state.result}
                            </div>
                                {this.state.trace}    
                        </div>
                        <div class="card-footer"><small><a href="" style={{cursor: "pointer", color: "#3C415C", textDecoration: "none"}}>console</a></small></div>
                    </div>    
                    <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-success m-3 float-right" onClick={this.handleCode}>Run <span><i className="fa fa-caret-right" aria-hidden="true"></i></span> </button>
                </div>
            </div>
                </div>
            </div>
           </div> 
  </div>
        );
    }
}
 
export default Editor;