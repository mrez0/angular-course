import {Component} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {isObservable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  protected readonly isObservable = isObservable;

  onCourseSelected(course: Course) {
    console.log(course);

  }
}
