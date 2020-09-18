class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions= this.handleDeleteOptions.bind(this)
        this.state= {
            options: ["thing one", "thing two" ,"thing three"]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }
  render() {
      const title = "Indecision"
      const subtitle= "Put your life in the hands of a computer"
      
      return (
          <div>
              <Header title = {title} subtitle={subtitle}/>
              <Action hasOptions={this.state.options.length > 0} />
              <Options options={this.state.options}
              hasDeleteOptions={this.handleDeleteOptions} />
              <AddOptions />
          </div>
      )
  }
}


class Header extends React.Component {
  render() {
      console.log(this.props)
      return (
          <div>
              <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
          </div>
      )
  }
}
class Action extends React.Component {
handlePick(){
 alert('handelpick')
  }
  render() {
      return (
          <div>
              <button onClick={this.handlePick}
               disabled={!this.props.hasOptions}
              >What should I do?</button>
          </div>
      );
  }
}
class Options extends React.Component {
  
  render() {
      return (
          <div>
              <button onClick={this.props.hasDeleteOptions}>Remove</button>
              {this.props.options.map((option)=> <Option key={option} keyText={option} />)}
              <Option />
          </div>
      )
  }
}
class Option extends React.Component{
  render(){
      return(
          <div>
              {this.props.keyText}
          </div>
      )
  }
}
class AddOptions extends React.Component {
  handleAdd(e){
   e.preventDefault();
   const option= e.target.elements.option.value;
   if(option){
       alert(option);
   }
  }
  render() {
      return (
          <div>
             <form onSubmit={this.handleAdd}>
               <input type="text" name="option" />
               <button>Add Option</button>  
             </form>
          </div>
      )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('mainDiv'));




// babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch