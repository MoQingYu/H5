import * as React from 'react';
import { Component } from "react";
import { Layout, Menu, Button } from "antd";
import { render } from 'react-dom';
import * as ReactDOM from "react-dom";

interface ContentPageProps {}
interface ContentPageStates {
    imgData?: Array<any>;
}

export class ContentPage extends Component<ContentPageProps,ContentPageStates>{
    constructor(props,context){
      super();
      this.state={
          imgData:[]
      };
    }

    fileupload(event) {
        let newFile = event.target.files[0];
        var file = new FileReader();
        let {imgData} = this.state;
        let result = {
            name: null,
            urls: null,
            key: null
        };
        result.name = newFile.name;
        result.key = newFile.lastModified
        file.onloadend = (e) => {
            result.urls = e.target['result'];
            imgData.push(result);
            this.setState({imgData}) 
        }
        file.readAsDataURL(newFile);
        
    }

    render() {
        let {imgData} = this.state;
        let result = [];
        imgData.map(d => {
            result.push(this.renderImgload(d));
        })
      return <div className="content"> 
                <div>
                    {result}  
                </div>
                <input type="file" onChange={(value)=>this.fileupload(value)}/>
            </div>
    }

    renderImgload(data){
        
        return <div key={data.key}>
            <img style={{width:150}} src={data['urls']}/>
            <span>{data.name}</span>
        </div>
    }
 

}