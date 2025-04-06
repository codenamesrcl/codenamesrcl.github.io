const _dlg = {
    close: (e)=>{
        e.closest('dialog').close();
    }
};
window._dlg = _dlg;

export class Match{
	#host;
	#config;	
	#nextMatch;

	#baseMatches = [];
	#baseMatchEl;

	#competitors = [];
	#competitorListEl;

	constructor(host, config = { }){
		this.#host = host;		
		this.#config = config;

		if(config.import){
			//import an existing match definition
			//connectors will be done by the import caller
		}
	}

	get host(){ return this.#host }
	get baseMatches(){ return this.#baseMatches }
	get dialog(){ return this.#config.dialog }

	exportBracket(){
		return {
			round: this.#config.round,
			competitors: Object.assign([], this.#competitors),
			baseMatches: this.#baseMatches.map(a=>a.exportBracket()),			
		}
	}

	addCompetitor(competitor){
		this.#competitors.push(competitor);
		if(this.#competitors.length < 3)
			this.#competitorListEl.children[this.#competitors.length -1].querySelector('input').value = competitor;
		else
			this.#createAdditionalCompetitor(competitor);
	}

	connectBaseMatch(match){
		this.#baseMatches.push(match);
		this.#baseMatchEl.append(match.host)
	}
	connectNextMatch(match){
		this.#nextMatch = match;
	}

	updateResult(winnerindex, scores = []){
		//mark the winner and contact the linked next-match of the new competitor
	}

	#generateCompetitorContent(competitor){
		return `<input type="text" class="form-control" value="${competitor}" readonly aria-label="Competitor's Name">
			<span class="input-group-text" data-for="score">0</span>`;
	}

	#createAdditionalCompetitor(competitor){
		var el = document.createElement('div');
		el.classList.add('input-group', 'my-2');
		el.innerHTML = this.#generateCompetitorContent(competitor);			
		this.#competitorListEl.prepend(el);
	}

	render(){
		// this.#host.classList.add('match-base')
		this.#host.dataset.round = this.#config.round ?? 0;

		this.#host.innerHTML = `
			<section class="match mb-0">
				<section data-for="base-matches">
				</section>
				<div class="d-flex">
					<div data-for="competitors">
						<div class="input-group my-2">
						  ${this.#generateCompetitorContent('')}
						</div>
						<div class="input-group my-2">
						  ${this.#generateCompetitorContent('')}
						</div>
						<section class="overlay-btn text-center"
							data-fn="updateMatch"
							data-bs-toggle="tooltip"        
        					data-bs-title="View/Update match">							
						</section>
					</div>					
				</div>
			</section>			
		`;

		this.#competitorListEl = this.#host.querySelector('[data-for="competitors"]');
		this.#baseMatchEl = this.#host.querySelector('[data-for="base-matches"]');
		this.#host.querySelector('[data-fn="updateMatch"]').addEventListener('click', e=>{
			//open up a form to update the result with scores and determination of a winner
			dialog.showModal();
		})

		for(let tooltip of this.#host.querySelectorAll('[data-bs-toggle="tooltip"]'))
			new bootstrap.Tooltip(tooltip);
	}
}