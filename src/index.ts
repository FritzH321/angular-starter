// LOAD JS/CSS DEPS
import * as $ from 'jquery';
import * as _ from "lodash";

import 'bootstrap';
import 'angular';
import 'angular-ui-router';



// load master scss:
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import './styles/master.scss';


//Modules
import './modules/components/index';

angular.module("app", [
    'app.component',
    'ui.router'
]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
