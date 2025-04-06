import { test1, test2 } from './mockdata.js';
import { Match } from './match.js';

var _currentBoard,
	_matchdialog;
window.addEventListener('load', e=>{
	var nameslist = document.querySelector('[data-for="nameslist"]'),
		_matchdialog = document.querySelector('[data-for="dlg-record"]'),
		exportinput = document.querySelector('[data-for="export"]');
	nameslist.value = test2;

	document.querySelector('[data-fn="generateBracket"]').addEventListener('click', e=>{
		var names = nameslist.value.trim().split('\n').map(n => n.trim());
		createBoard(names);
	})
	document.querySelector('[data-fn="exportBracket"]').addEventListener('click', e=>{
		var exportable = _currentBoard ? _currentBoard.exportBracket() : '';
		exportinput.value = JSON.stringify(exportable, null, '   ');
	})
})

function importBracket(def){

}

function createBoard(competitors = []){
	var board = document.querySelector('[data-for="board"]');

	console.log(`${competitors.length} competitors`)

	//random selection of pairs by splicing each time
	//pairs are assigned to a Match and the match pool is then linked together in ordered pair fashion all the way to the 
	//end of the competition line
	var pairs = [];
	while(competitors.length > 0){
		let first = competitors.splice(Math.floor(Math.random() * competitors.length), 1)[0],
			second;

		if(competitors.length > 0)
			second = competitors.splice(Math.floor(Math.random() * competitors.length), 1)[0];

		//create the Match
		pairs.push(createMatch([first, second]))
	}

	var rounddex = 1;

	while(pairs.length > 1){
		pairs = generateRound(pairs, rounddex++);
		console.log(pairs.length)
	}

	board.innerHTML = '';
	board.append(pairs[0].host)
	_currentBoard = pairs[0];
}

function createMatch(competitors = []){
	var el = document.createElement('section'),
		match = new Match(el, { round: 0, dialog: _matchdialog });

	match.render();
	for(let comp of competitors)
		comp && match.addCompetitor(comp);

	return match;
}

function generateRound(matches, roundnum){
	var rounds = [];
	//now take these base pairs and match them up together into round matches and bubble them up until a single finals match is left
	//use a converging selection pattern (first vs last) matching style
	while(matches.length > 0){
		let first = matches.splice(0, 1)[0],
			second;

		if(matches.length > 0)
			second = matches.splice(matches.length-1, 1)[0]

		rounds.push(createRound([first, second], roundnum));
	}

	return rounds;
}

function createRound(matches = [], round){
	var el = document.createElement('section'),
		round = new Match(el, { round: round, dialog: _matchdialog });

	round.render();
	for(let match of matches){
		match && round.connectBaseMatch(match);
		match && match.connectNextMatch(round);
	}

	return round;
}
