import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ExerciseService} from "../views/exercises/exercise.service";

@Component({
  selector: 'app-Exercise',
  templateUrl: './Exercise.page.html',
  styleUrls: ['./Exercise.page.css']
})
export class ExercisePage implements OnInit {

  public exerciseID: bigint = 0;

  constructor(private readonly router: Router,
              private readonly exerciseService: ExerciseService) {
  }

  ngOnInit()
  {
  }


}
