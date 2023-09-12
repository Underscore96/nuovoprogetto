import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  mockData: Student[] = [

    {
      name: 'ciao',
      surname: 'addio',
      age: 21,
      imageUrl: 'https://media.istockphoto.com/id/1133905340/it/vettoriale/segnale-di-saluto-ciao-simbolo.jpg?s=612x612&w=0&k=20&c=CR3G6QFjYd_qRQ_qNPNBLfEmQmCnca_kg0M_YjSTQZo='
    },


    {
      name: 'franco',
      surname: 'boscaglia',
      age: 76,
      imageUrl: 'https://www.pier78.net/wp-content/uploads/2021/02/bosco-e-foresta-scaled.jpg'

    }


  ]

}
