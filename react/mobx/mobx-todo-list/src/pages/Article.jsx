import React from 'react';
import { inject, observer } from "mobx-react"

@inject("articlesStore","usersStore")
@observer
class Article extends React.Component {

  componentDidMount() {
    // 去做请求
    const slug = this.props.match.params.id;
    this.props.articlesStore.loadArticle(slug)
    this.props.usersStore.login();
  }

  render() {
    
    console.log(this.props.usersStore.inProgress,'----');

    const slug = this.props.match.params.id;
    console.log(slug);
    // 提供一个方法
    const article = this.props.articlesStore.getArticle(slug);
    if(!article){
      return(
        <div>Loading...</div>
      )
    }
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.title}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Article;