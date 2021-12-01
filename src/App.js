import React from 'react';
import './App.css';
import logo from "./assets/img/logo.jpeg";

class App extends React.Component{
  url="https://github.com/govind6498?tab=repositories";
  constructor(){
  super()
  this.state={
    userName:"",
    nameError:""
  }
}
onClick=($event)=>{
  console.log("Save button is clicked!",$event);
  window.open(this.url,"_blank");
}
onNameChange=(event)=>{
  console.log("value is ",event.target.value);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
  this.setState({userName:event.target.value})
  if(nameRegex.test(event.target.value)){
    this.setState({nameError:""})
  }else{
    this.setState({nameError:"Name is Incorrect"})
  }
}
  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
         alt="The BridgeLabz logo:A bridge to Employee through lab wokrs"/>
      </div>
      <div>
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <main class ="content">
        <div id="article-content">
          <article>
            <p>At bridgelabz,we are techie community of</p>
          </article>
          <article>
            <ul>
              <li>Technologists</li>
              <li>Thinkers</li>
              <li>Builder</li>
            </ul>
            <p>Working together to keep the teck Employeebility of engineers alive and accesible,so Tech Companies worldwide can get contributors and creators for Technology solutions.We believe this act of human collaboration across an Employability platform is essential
                to individual growth and our collective future</p>
          </article>
          <article>
            <p>
            To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about our mission i.e <strong> Employability to all</strong>
            </p>
          </article>
        </div>
      </main>
      </>
    );
  }
}

export default App;
