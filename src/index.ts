// LOAD JS DEPS
import * as $ from 'jquery';
import 'bootstrap';
import 'angular';

import * as _ from "lodash";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

//Modules
import './modules/components/index';

angular.module("app", [
    'app.component'
]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});



