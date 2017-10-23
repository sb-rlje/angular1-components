import components from '../../components'
import ArticlesCardsTemplate from './articleCards.html'

components.component('articleCards', {
	bindings: {
    articleCards: '='
  },
  template: ArticlesCardsTemplate,
  controllerAs: '$articleCardsComponent'
})