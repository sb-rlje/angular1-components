import ListActions from '../../actions/list.actions'

class HomeContainerController {
  constructor($ngRedux) {
  	this.navHeader = 'Angular 1 Components'
  	this.listItem = {}
    $ngRedux.connect(state => ({ allItems: state}), ListActions)(this)
  }

  updateList(listItem) {
    this.addListItem(listItem)
    this.listItem = {}
  }
}

export default HomeContainerController;



