import { Component, OnInit } from '@angular/core';
import { SwapiAPIService } from '../swapi-api.service';
import { FormsModule } from '@angular/forms';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {

  people = [];
  films: [];
  selectedPerson: any;

  constructor(private apiService: SwapiAPIService) { }

  ngOnInit() {
    this.fetchPeople();
    console.log(this.selectedPerson);
  }

  fetchPeople(): void {
    this.apiService.fetchPeople().subscribe(apidata => {
      this.people = apidata.results
    })
  }

  displayData(event): void {
    console.log(event.target.value)
    console.log(this.selectedPerson)
    this.films = [];
  
  }

  fetchFilmNames(): void {

    this.apiService.fetchPeople().subscribe(apidata => {
      this.people = apidata.results
      console.log("challenge two results", this.people)
    })
  }

}
