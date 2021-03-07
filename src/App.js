import React from "react";
import Img from "./me.jpg";
import Profile from "./Profile";
class App extends React.Component {
  
   state = {
     person:{
      fullName: "Meriam",
      bio: "hello",
      profession: "Etudiante",
     },
     show: false,
   };

   componentDidMount(){
      setInterval(() => this.setState({timer : this.state.timer+1}),1000);
   }


  render() {
  
    return (
      <div>
        { this.state.show && (
          <div className="App">
            <Profile person={this.state.person} personImg={Img}/>
         </div> 
        )}
    <button onClick={()=>this.setState ({show :!this.state.show})}> Show </button>
    
   </div> 
    );
  }
}
export default App;

