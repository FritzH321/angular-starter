import {IComponentOptions} from 'angular';


export class MainApplicationComponent implements IComponentOptions {
    public controller:any = MainApplicationController;
    public template: string = `
        <main class="container" ui-view>
             <h1>Hello World</h1>
        </main>
	`
}

export class MainApplicationController {
    constructor(){
    }
    
}