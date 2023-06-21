import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course: Course;

  @Input()
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onViewCourse() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return this.course.category?.toLowerCase();
  }
}
