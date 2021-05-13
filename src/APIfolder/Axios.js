import React,{ Component } from 'react'
import axios from 'axios'
import './style.css'
 class Axios extends Component {
     state = {
         photo:[]
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/photos')
         .then(res => {
             const photo = res.data;
             this.setState({photo})
         })
     }
    render() {
        return (
            <> 
               {this.state.photo.map(photos => (
                  <img src={photos.url} id={photos.id} />
                ))}       
            </>
        )
    }
}
export default Axios