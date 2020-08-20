import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, `watch finding demo`, `find an online version  and watch merlin find his son`, new Date(2020,3,14)),
    new Goal(2, `Buy cookies`, `I have to buy cookies for the parrot`,  new Date(2025,6,9)),
    new Goal(3, `Get new phone case`, `Diana has her birthday coming up soon`, new Date(2022,1,12)),
    new Goal(4, `Get dog food`, `pupper likes expensive snacks`,  new Date(2019,0,18)),
    new Goal(5, `Solve math homework`, `Damn math`,  new Date(2019,2,14)),
    new Goal(6, `Plot my world domination plan`,`Cause I am an evil overload`,  new Date(2020,3,14) )
  ]

addNewGoal(goal){
  let goalLength =this.goals.length;
  goal.id =goalLength +1;
  goal.completeDate = new Date (goal.completeDate)
  this.goals.push(goal)
}

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want  to delete $(this.goals[index].name`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }

toggleDetails(index) {
this.goals[index].showDescription = !this.goals[index].showDescription;
} 
  constructor() { }

  ngOnInit(): void {
  }

}
