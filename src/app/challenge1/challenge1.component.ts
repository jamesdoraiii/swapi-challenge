import { Component, OnInit } from '@angular/core';
import { SwapiAPIService } from '../swapi-api.service'

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit {

  data = []

  constructor(private apiService: SwapiAPIService) { }

  ngOnInit() {
  }

  fetchPeople(): void {
    this.apiService.fetchPeople().subscribe(apidata => {
      this.data = apidata.results
      console.log(this.data)
    })
  }

  fetchPlanets(): void {
    this.apiService.fetchPlanets().subscribe(apidata => {
      this.data = apidata.results
      console.log(this.data)
    })
  }

  fetchStarships(): void {
    this.apiService.fetchStarships().subscribe(apidata => {
      this.data = apidata.results
      console.log(this.data)
    })
  }

  fetchSpecies(): void {
    this.apiService.fetchSpecies().subscribe(apidata => {
      this.data = apidata.results
      console.log(this.data)
    })
  }

}
