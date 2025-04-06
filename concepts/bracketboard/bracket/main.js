import { test1, test2 } from './mockdata.js';
import { Match } from './match.js';

var _currentBoard,
	_matchdialog,
	_importdialog,
	_competitorindex = 1,
	_matchindex = 1,
	_boardel;
window.addEventListener('load', e=>{
	_matchdialog = document.querySelector('[data-for="dlg-record"]');
	_importdialog = document.querySelector('[data-for="dlg-import"]');
	_boardel = document.querySelector('[data-for="board"]');

	var nameslist = document.querySelector('[data-for="nameslist"]'),		
		exportinput = document.querySelector('[data-for="export"]');
	nameslist.value = test2;

	document.querySelector('[data-fn="generateBracket"]').addEventListener('click', e=>{
		var names = nameslist.value.trim().split('\n').map(n => {
			return {
				name: n.trim(),
				id: _competitorindex++
			}
		});
		createBoard(names);
	})
	document.querySelector('[data-fn="exportBracket"]').addEventListener('click', e=>{
		var exportable = {
			_competitorindex: _competitorindex,
			_matchindex: _matchindex,
			board: _currentBoard ? _currentBoard.exportBracket() : ''
		}

		exportinput.value = JSON.stringify(exportable, null, '   ');
	})
	document.querySelector('[data-fn="importBracket"]').addEventListener('click', e=>{		
		_importdialog.showModal();
	})
	document.querySelector('[data-fn="importBracketJSON"]').addEventListener('click', e=>{
		var input = _importdialog.querySelector('textarea');
		try{
			importBracket(JSON.parse(input.value));
		}
		catch(err){
			alert('Unable to import bracket.  Check the JSON to make sure the formatting/structure is valid');
		}
	})
})

function importBracket(def){
	console.log(def);

	try{		
		_currentBoard = _createMatch(def.board.round, def.board);
		_boardel.innerHTML = '';
		_boardel.append(_currentBoard.host)
		_competitorindex = def._competitorindex;
		_matchindex = def._matchindex;
	}
	catch(err){
		alert('Error while creating imported board');
	}
}

function createBoard(competitors = []){
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

	_boardel.innerHTML = '';
	_boardel.append(pairs[0].host)
	_currentBoard = pairs[0];
}

function _createMatch(round, importdef = null){
	var el = document.createElement('section'),
		match = new Match(el, { round: round, dialog: _matchdialog, id: _matchindex++, import: importdef });

	match.render();
	return match;
}

function createMatch(competitors = []){
	var match = _createMatch(0);
	for(let comp of competitors)
		comp && match.addCompetitor(comp);

	return match;
}
function createRound(matches = [], roundnum){
	var round = _createMatch(roundnum);
	for(let match of matches){
		match && round.connectBaseMatch(match);
		match && match.connectNextMatch(round);
	}

	return round;
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