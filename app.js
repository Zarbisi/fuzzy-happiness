(function(){

	var app = angular.module('listing', []);

	app.controller('ListController', function() {

		this.elements = animes;
	});

	var animes = [{

			name: 'Overlord',
			episodes : '24',
			season: '2',
			description : 'A nice game-trap story in a MMORPG',
			type: 'Fantasy',
			added: '',

		},
		{
			name: 'Nanatsu no Taizai',
			episodes : '24',
			season: '2',
			description : 'A nice medieval-Fantasy story with giants, fairies, deamons , ...',
			type: 'medieval-Fantasy',
			added: '',
		}
	];

})();