import React, {Component} from 'react';
import datas from './data';
import { Layout } from 'antd'; // 布局 header + main + footer
import './TodoList.css' 
import DataList from './components/DataList';
import Form from './components/Form';
const { Header, Content } = Layout

// warning  这种写法是老写法
// 类式组件被 react-hooks 替代了  函数式编程
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  // 数据驱动的页面
  //生命周期  react-hooks    name, setName = useState('defaultName')  useEffect
  // ? 
  componentDidMount() {
    this.setState({
      list: datas
    })
  }
  // redux 解决这个问题
  deleteItem(id) {
    // console.log(id)
    let deleteIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas.splice(deleteIndex, 1)
    this.setState({
      list: datas
    })
  }

  changeItem(id) {
    let changeIndex = datas.findIndex(item => {
      return item.id === id
    })
    datas[changeIndex].isComplete = !datas[changeIndex].isComplete
    this.setState({
      list: datas
    })
  }

  render() {
    return (
      <Layout className="todolist-layout">
        <Header>
          {/* this.pros.children */}
          <h3 className="logo">TodoList</h3>
        </Header>
        <Content className="todolist-content">
          <Form searchItem={value=>this.handleSearchItem(value)}/>
          <DataList list={this.state.list}
          changeItem={id => this.changeItem(id)}
          deleteItem={id => this.deleteItem(id)}/>
        </Content>
      </Layout>
    )
  }
}

export default TodoList;
