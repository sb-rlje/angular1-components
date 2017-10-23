import components from '../components'
import NavbarTemplate from './navbar.html'

components.component('navbar', {
    bindings: {
      header: '='
    },
    template: NavbarTemplate,
    controllerAs: '$navbarComponent'
 })
