declare var Parties: Mongo.Collection<IParty>;
declare var _;

interface IParty {
	_id?: string,
	name: string,
	description: string;
}