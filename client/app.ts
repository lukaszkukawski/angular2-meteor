/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'client/app.html',
	directives: [NgFor]
})
class Socially {
	parties: Array<Object>;

	constructor () {
		this.parties = [
			{
				'name' : 'Dubstep-Free Zone',
				'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sapiente, voluptatum minus fuga modi dolore illo recusandae ex iusto obcaecati molestiae, doloremque nemo doloribus laborum totam perspiciatis itaque reprehenderit velit.',
				'location' : 'Palo Alto'
			},{
				'name' : 'All dubstep all the time',
				'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos maxime magnam praesentium! Unde neque odit ipsam obcaecati hic atque, cum consequatur, minima quaerat voluptas placeat qui iure recusandae dolorum, dignissimos!',
				'location' : 'Palo Alto'
			},{
				'name' : 'Savage lounging',
				'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae numquam culpa possimus similique asperiores ut excepturi, unde quidem? Recusandae quod dolores, dicta nihil deleniti doloribus blanditiis iste eveniet officiis autem.',
				'location' : 'San Francisco'
			}
		]
	}
}

bootstrap(Socially);