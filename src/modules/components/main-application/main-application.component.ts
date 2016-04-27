import {IComponentOptions} from 'angular';

export class MainApplicationComponent implements IComponentOptions {
    public controller:any = MainApplicationController;
    public template: string = `
        <main class="container" ui-view></main>
	`
}

export class MainApplicationController {
    constructor(){
        alert('test');
    }
    
}