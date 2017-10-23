import components from '../components'
import Articles from './articles.html'

//import dumb children components
import './article-cards/articleCards.component'
import './article-form/articleForm.component'

components.component('articles', {
  bindings: {
    article: '=',
    articleList: '=',
    createArticle: '&'
  },
  template: Articles,
  controllerAs: '$articleComponent'
 })
