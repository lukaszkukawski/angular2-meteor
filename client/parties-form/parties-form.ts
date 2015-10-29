/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2'
import {Parties} from 'collections/parties';

@Component({
    selector: 'parties-form'
})
@View({
    templateUrl: 'client/parties-form/parties-form.html',
    directives: [FORM_DIRECTIVES]
})
export class PartiesForm {
    partiesForm: ControlGroup;
    constructor() {
        var fb = new FormBuilder();
        this.partiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required]
        });
        console.log(this.partiesForm.value);
    }

    addParty(party) {
        console.log(party);
        if (this.partiesForm.valid) {
            try {
                 Parties.insert({
                        name: party.name,
                        description: party.description,
                        location: party.location
                 });
            } catch (e) {
                console.log(e);
            }
            (this.partiesForm.controls['name']).updateValue('');
            (this.partiesForm.controls['description']).updateValue('');
            (this.partiesForm.controls['location']).updateValue('');
        }
    }

}