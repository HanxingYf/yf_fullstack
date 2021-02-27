import React, {Component} from 'react';


class TodeoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
    );
  }

  handleClick(){
    console.log('删除');
    this.props.deleteItem(this.props.index)
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }

    
}
}
 
export default TodeoListItem;