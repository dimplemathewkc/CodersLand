import React, { Component } from 'react';
// import '../App.css';
import LangSelection from './languageSelection';
import Theme from './theme';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
        isOpen: false,
        cardSize1: "col-md-12 card",
        cardSize2: "col-md-12 card",

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
         console.log(this.state.code)
         if(this.state.code === ""){
             return this.setState({
                 result: "Please add code to the terminal and then click on run."
             })
         }
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
//   expandCard = () => {
//     this.setState({
//         isExpand: !this.state.isExpand
//     }) 
//     this.state.isExpand === true?this.setState({cardSize1:"col-md-12 card",cardSize2:"col-md-12 card" }):this.setState({cardSize1:"col-md-6 card",cardSize2:"col-md-5 card" })
//   }
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
                    
                    <Modal
                            isOpen={this.state.isOpen}
                            onRequestClose={this.toggleModal}
                            contentLabel="My dialog"
                            style={this.customStyles}
                            closeTimeoutMS={500}
                        >
                        <div className="container">
                            <div className="container">
                                {console.log(this.theme_lists)}
                                <button className="btn btn-secondary float-right" onClick={this.toggleModal}><i className="fa fa-close"></i></button>
                                <br></br>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <Theme onThemeChange={this.handleTheme} themes={this.state.theme_list} current_theme={this.state.theme}/>
                                        <LangSelection languageChange={this.handleLanguageChange} lang={this.state.lang} current_lang={this.state.language}/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        
                    </Modal>
                </div>
            <div className="container">
                <br></br>
            <div className="row m-2"></div>
            <div className="card shadow-lg border-0 m-2 p-3 bg-white" style={{background: '#DCDCDC'}}>    
                <div class="card-header border-0">
                    <button type="button"  onClick={this.toggleModal} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-cog" style={{fontSize: "20px"}}></i></span>
                    </button>
                    {/* <button type="button"  onClick={this.expandCard} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-expand" style={{fontSize: "20px"}}></i></span>
                    </button> */}
                    <button type="button"  onClick={this.toggleModal} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right">
                        <span><i className="fa fa-download" style={{fontSize: "20px"}}></i></span>
                    </button>
                    <button type="button"  onClick={this.toggleModal} style={{transition: "transform .2s" }} className="btn btn-default border-0 float-right" aria-label="Left Align">
                        <span><i className="fa fa-info" style={{fontSize: "20px"}}></i></span>
                    </button>
                </div>
                <div className="row m-2 p2">
                    <div className={this.state.cardSize1}>
                        <AceEditor
                            className="mt-3"
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
                            showPrintMargin={false}
                            focus={true}
                            editorProps={{ $blockScrolling: true }}
                            wrapEnabled= {true}
                            highlightActiveLine={true}
                            autoScrollEditorIntoView ={true}
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            enableSnippets={true}  />       

                    </div> 
                    <div className={this.state.cardSize2} style={{background: '#DCDCDC', fontFamily:"Courier", fontSize:12}}>
                            <Tabs  style={{
                                color: "#3f3f5a",
                                background: '#DCDCDC',
                            }}>
                                <TabList>
                                <Tab>Console</Tab>
                                <Tab disabled>Testcases</Tab>
                                </TabList>

                                <TabPanel style={{fontSize:14}}>
                                    <div>{this.state.status}</div>
                                    <div>{this.state.result}</div>
                                    <div>{this.state.trace} </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </Tabs>
                                
                    </div>   
                    </div> 
                    <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-success m-1 float-right" onClick={this.handleCode}>Run <span><i className="fa fa-caret-right" aria-hidden="true"></i></span> </button>
                    <button className="btn btn-secondary m-1 float-right" onClick="">Save <span><i className="fa fa-save" aria-hidden="true"></i></span> </button>
                    <button className="btn btn-secondary m-1 float-right" onClick="">Format <span><i className="fa fa-align-justify" aria-hidden="true"></i></span> </button>
                    
                </div>
            </div>
                </div>
            </div>
           
  </div>
        );
    }
}
 
export default Editor;