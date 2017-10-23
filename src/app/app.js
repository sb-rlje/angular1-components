import angular from 'angular'
import ngRedux from 'ng-redux'
import {createLogger} from 'redux-logger'

//import reducers
import { ListReducer } from './reducers/list.reducer'

//container components
import './containers/home/home.component'

const logger = createLogger({
	collapsed: false
})

angular.module('app', [ngRedux, 'containers'])      
	   .config(($ngReduxProvider) => $ngReduxProvider.createStoreWith(ListReducer, [logger]))
