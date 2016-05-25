// LOAD JS/CSS DEPS
import * as $ from 'jquery';
import 'bootstrap';
import 'angular';
import * as _ from "lodash";


// load master scss:
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import './styles/master.scss';


//Modules
import './modules/components/index';

angular.module("app", [
    'app.component'
]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
