import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.scss']
})
export class StudentcardComponent {
  @Input() studentData?:Student;

}
