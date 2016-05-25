// LOAD JS/CSS DEPS
import * as $ from 'jquery';
import 'bootstrap';
import 'angular';
import * as _ from "lodash";


// load master scss:
import './styles/master.scss';


//Modules
import './modules/components/index';

angular.module("app", [
    'app.component'
]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});
