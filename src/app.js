class IndecisionApp extends React.Component {
  render() {
      const title = "Indecision"
      const subtitle= "Put your life in the hands of a computer"
      const options= ['thing one','thing two', 'thing three']
      return (
          <div>
              <Header title = {title} subtitle={subtitle}/>
              <Action />
              <Options options={options}/>
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
              <button onClick={this.handlePick}>What should I do?</button>
          </div>
      );
  }
}
class Options extends React.Component {
  constructor(props){
    super(props);
    this.removeAll=this.removeAll.bind(this)
  }
  removeAll(){
      console.log(this.props.options)
  }
  render() {
      return (
          <div>
              <button onClick={this.removeAll}>Remove</button>
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