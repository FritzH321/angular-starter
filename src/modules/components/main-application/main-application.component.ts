import {IComponentOptions} from 'angular';
import {Inject} from '../../../utils/Injector/Injector';


export class MainApplicationComponent implements IComponentOptions {
    public controller:any = MainApplicationController;
    public template: string = `
        <main class="container" ui-view>
             <h1>Hello World</h1>
        </main>
	`
}

@Inject('$state')
export class MainApplicationController {
    constructor(private $state: ng.ui.IStateService){

    }

}
