import containers from '../containers'
import HomeContainer from './home-container.html'
import HomeContainerController from './home.controller'

//import dumb components
import '../../components/navbar/navbar.component'
import '../../components/articles/articles.component'

containers.component('homeContainer', {
	bindings: {},
    template: HomeContainer,
    controller: HomeContainerController,
    controllerAs: '$homeContainer'
 })
