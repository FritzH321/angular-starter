import {MainApplicationComponent} from "./main-application/main-application.component";

import IModule = angular.IModule;

export var mod: IModule = angular.module('app.component', [])
 .component("mainApplication", new MainApplicationComponent())
