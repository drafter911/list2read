import angular from 'angular';
import uirouter from 'angular-ui-router';
//import randomNames from '../../Services/RandomName.service';

import routing from './Routes/Home';
import HomeController from './Controllers/HomeCtrl';

export default angular.module('app.home',
    [
        uirouter
        //randomNames
    ])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;