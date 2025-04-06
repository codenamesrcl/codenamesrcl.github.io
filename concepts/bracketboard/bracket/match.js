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

   #modalform;

   constructor(host, config = { }){
      this.#host = host;      
      this.#config = config;     
   }

   get host(){ return this.#host }
   get baseMatches(){ return this.#baseMatches }
   get #dialog(){ return this.#config.dialog }
   get matchid(){ return this.#config.id }
   get #importdef(){ return this.#config.import }
   get round(){ return this.#config.round ?? 0 }

   exportBracket(){
      return {
         round: this.#config.round,
         competitors: Object.assign([], this.#competitors),
         baseMatches: this.#baseMatches.map(a=>a.exportBracket()),         
      }
   }

   addCompetitor(competitor){
      this.#competitors.splice(0, 0, competitor);
      this.#createAdditionalCompetitor(competitor);
   }
   removeCompetitor(id){
      if(this.#competitors.find(e=>e.id === id)){
         this.#competitors.splice(this.#competitors.findIndex(e=>e.id === id), 1);
         var compel = this.#competitorListEl.querySelector(`[data-competitorid="${id}"]`);
         compel && compel.remove();
      }
   }

   connectBaseMatch(match){
      this.#baseMatches.push(match);
      this.#baseMatchEl.append(match.host)
   }
   connectNextMatch(match){
      this.#nextMatch = match;
   }

   #updateResult(){
      var formdata = new FormData(this.#modalform),
         data = {};
      for(let [key, val] of formdata.entries()){
         let name = key.split('_'),
            id = parseInt(name[0]),
            field = name[1];

         data[id] ??= {
            score: 0,
            advances: false
         };

         //advances is a checkbox so a value present in formdata means it's been checked, auto-true
         if(field === 'advances')
            data[id][field] = true;
         else
            data[id][field] = val;
        }

        //yes, this plus the previous assembler pass is straight-up inefficient.  
        //in-place method during the first pass will be done when the system is fleshed out more
        console.log(this.#host)
        for(let comp of this.#competitors){
         let datapoint = data[comp.id],
            displaybase = this.#competitorListEl.querySelector(`[data-competitorid="${comp.id}"]`)
         comp.score = datapoint.score;
         displaybase.querySelector('[data-for="score"]').innerHTML = datapoint.score;
         comp.advances = datapoint.advances;
         displaybase.classList[comp.advances ? 'add' : 'remove']('winner');
         if(comp.advances){
            var newcomp = Object.assign({}, comp);
            newcomp.advances = false;
            newcomp.score = 0;
            this.#nextMatch.addCompetitor(Object.assign({}, newcomp));
         }
         else
            this.#nextMatch.removeCompetitor(comp.id);
        }
        
      //mark the winner/s and contact the linked next-match of the new competitor      
   }

   #generateCompetitorContent(competitor){
      return `<input type="text" class="form-control" value="${competitor}" readonly aria-label="Competitor's Name">
         <span class="input-group-text" data-for="score">0</span>`;
   }

   #createAdditionalCompetitor(competitor){
      var el = document.createElement('div');
      el.classList.add('competitor', 'input-group', 'my-2');
      el.dataset.competitorid = competitor.id;
      el.innerHTML = this.#generateCompetitorContent(competitor.name);        
      this.#competitorListEl.prepend(el);

      //remove a placeholder if one exists
      var placeholder = this.#competitorListEl.querySelector('.competitor:not([data-competitorid])');
      placeholder && placeholder.remove();
   }

   #createModalForm(){
      this.#modalform = document.createElement('form');
      this.#modalform.innerHTML = `
         <section data-for="competitors" class="row">
            ${this.#competitors.map(cmp => `
               <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <h5>${cmp.name}</h5>
                  <div class="input-group mb-2">
                     <span class="input-group-text">Score</span>
                     <input type="text" class="form-control" value="${cmp.score ?? 0}" name="${cmp.id}_score" aria-label="Score"/>
                  </div>
                  <div class="form-check form-switch mb-2">
                     <label class="form-check-label" for="${cmp.id}_advances">Advances</label>
                     <input class="form-check-input" type="checkbox" role="switch" value="true"
                           ${cmp.advances ? 'checked' : ''}
                           name="${cmp.id}_advances" id="${cmp.id}_advances"/>
                  </div>
               </div>
            `).join('')}
         </section>
         <section class="mt-3">
            <button class="btn btn-primary" type="button" data-fn="save">Save</button>
         </section>
      `;

      this.#modalform.querySelector('button[data-fn="save"]').addEventListener('click', e=>{
         this.#updateResult();
         //cleanup the form from the modal and close
           this.#cleanDialog();
           this.#dialog.close();
      })
   }
   #cleanDialog(){
      var dialogform = this.#dialog.querySelector('[data-for="form"]');
      //clear the existing modal content and append the updated modal form
      for(let el of dialogform.children)
         el.remove();
   }
   #showModalForm(){
      //update the modal form - for now we'll just generate a new form until that aspect is better defined
      //we'll eat the performance cost for the time being in the interest of expediency of development of the rest of the system
      this.#createModalForm();      
      this.#cleanDialog();
      var dialogform = this.#dialog.querySelector('[data-for="form"]');
      dialogform.append(this.#modalform);

      //open up a form to update the result with scores and determination of a winner
      this.#dialog.showModal();
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
                  <div class="competitor input-group my-2">
                    ${this.#generateCompetitorContent('')}
                  </div>
                  <div class="competitor input-group my-2">
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
         this.#showModalForm();
      })

      if(this.#importdef){
         //import an existing match definition
         //connectors will be done by the import caller
         console.log(this.#importdef);
         for(let comp of this.#importdef.competitors)
            this.addCompetitor(comp);
         for(let matchdef of this.#importdef.baseMatches){
            let el = document.createElement('section'),
               match = new Match(el, { round: this.round-1, dialog: this.#dialog, id: matchdef.id, import: matchdef });
            match.render();
            match.connectNextMatch(this);
            this.connectBaseMatch(match);
         }
      }

      for(let tooltip of this.#host.querySelectorAll('[data-bs-toggle="tooltip"]'))
         new bootstrap.Tooltip(tooltip);
   }
}