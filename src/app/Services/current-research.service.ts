import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentResearchService {

  constructor() { }

  private researchId : String = '';
  private researchName : String = '';
  
  setResearchDetails(research:any){
    this.researchId = research.id;
    this.researchName = research.report;
  }

  getResearchId(){
    return this.researchId;
  }

  getResearchName(){
    return this.researchName;
  }


}
