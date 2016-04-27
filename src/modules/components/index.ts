import IModule = angular.IModule;

import {MainApplicationComponent} from './main-application/main-application.component';


export var mod: IModule = angular.module('app.component', [])
 .component("mainApplication", new MainApplicationComponent());