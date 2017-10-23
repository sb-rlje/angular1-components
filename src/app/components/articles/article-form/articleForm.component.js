import components from '../../components'
import ArticlesFormTemplate from './articleForm.html'

components.component('articleForm', {
	bindings: {
    article: '=',
    createArticle: '&'
  },
  template: ArticlesFormTemplate,
  controllerAs: '$articleFormComponent'
})