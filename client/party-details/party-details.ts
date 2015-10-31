/// <reference path="../../typings/angular2-meteor.d.ts" />
import {Component, View, FORM_DIRECTIVES, Inject, ControlGroup, Validators, FormBuilder} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {Parties} from 'collections/parties';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'client/party-details/party-details.html',
	directives: [RouterLink, FORM_DIRECTIVES]
})
export class PartyDetails {
	party: Object;
	cloneParty: Object;
	partyId: String;
	partiesFormDetails: ControlGroup;

	constructor( @Inject(RouteParams) params: RouteParams) {
		this.partyId = params.get('partyId');
		var fb = new FormBuilder();
		this.partiesFormDetails = fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required]
		});
	}

	onActivate() {
		this.party = Parties.find(this.partyId).fetch()[0];
		if (this.party) {
			this.makeClone();
			return true;
		}
	}
	
	canDeactivate() {
		var returnVal = true;
		if (!_.isEqual(this.party, this.cloneParty)) {
			if (confirm("Would  you like to save changes?")){
				returnVal = this.saveParty()
			} else {
				returnVal = false;
			}
		}
		return returnVal;
	}

	saveParty() {
		if (this.partiesFormDetails.valid) {
			Parties.update(this.party._id, {
				name: this.party.name,
				description: this.party.description
			});
			this.makeClone();
			return true;
		} else {
			alert("Check data");
		}
		return false;
	}

	save(e) {
		e.preventDefault();
		this.saveParty();
	}

	reset() {
		this.party = this.cloneParty;
	}

	makeClone() {
		this.cloneParty = _.clone(this.party);
	}
}
