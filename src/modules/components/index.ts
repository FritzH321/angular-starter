import IModule = angular.IModule;

import {MainApplicationComponent} from './main-application/main-application.component';
import {EmbedJSComponent} from './embedjs/embedjs.component';


export var mod: IModule = angular.module('app.component', [])
 .component("mainApplication", new MainApplicationComponent())
 .component("embedjs", new EmbedJSComponent());