import React, { Component } from 'react'
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
const Salom = 'AAAssalomu'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;
recognition.lang = "uz-UZ"
 recognition.onresult = function(e){
     const text = e.results[0][0].transcript
     document.getElementById('text').innerHTML = text
     document.getElementById('textbtn').textContent = 'Gapirish uchun bosing'
    }
 class Sound extends Component {
     constructor(){
         super()
         this.state = {

         }
     }
     ClickFunction(){
         const x = document.getElementById('textbtn')
         if(x.textContent=='Gapirish uchun bosing'){
             recognition.start()
             x.textContent = 'Gapirmoqdasiz'
         }else{
             recognition.stop()
             x.textContent = 'Gapirish uchun bosing'
         }
     }
     DeleteFunction(){
         document.getElementById('text').textContent = ''
     }
     CopyFunction(){
        const CopyText = document.getElementById('text').innerText
        let elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = CopyText;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        alert('Copied')
    }
    render() {
        return (
            <div className="qwerty">
                <div className="contain">
                <p id="text"></p>
                </div>
                <button id="textbtn" onClick={this.ClickFunction}>Gapirish uchun bosing</button>
                <button id="textbtn" onClick={this.DeleteFunction}> <DeleteIcon/></button>
                <button id="textbtn" onClick={this.CopyFunction}> <FileCopyIcon/></button>
            </div>
        )
    }
}
export default Sound