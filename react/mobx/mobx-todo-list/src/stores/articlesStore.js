// observable 可以被观察 action 修改状态的方式
import {observable,action} from 'mobx';

export class ArticleStore {
    // 可以被观察的map array object
    // 从无到有 loading 
    @observable articlesRegistry = observable.map();
    @action loadArticle(slug) {
        // articlesRegistry push
        // api
        return fetch(`https://conduit.productionready.io/api/articles/${slug}`)
        .then(data => data.json())
        .then(action(({ article }) => {
            this.articlesRegistry.set(article.slug,article)
        }))
    }
    getArticle(slug) {
        return this.articlesRegistry.get(slug)
    }
}

export default new ArticleStore();
