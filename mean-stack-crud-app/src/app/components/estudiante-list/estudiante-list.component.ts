import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
declare const CanvasJS: any;

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {

  Estudiante:any = [];

  constructor(private apiService: ApiService) {
    this.readEstudiante();
  }

  ngOnInit() {

    this.apiService.getEstudiantes().subscribe((data) => {
      this.Estudiante = data;
      console.log(this.Estudiante[0].calificacion);

/*      for (let i = 0; i > tamanoEst; i++) {
      let aux = "";
      let aux2 = "";
      let tamanoEst = this.Estudiante.length;
      let auxEst =[];

        for (let estudiante of this.Estudiante) {
          console.log(estudiante.calificacion);
          console.log(tamanoEst);

          aux = { y: estudiante.calificacion, label: estudiante.materia };

        }
        auxEst[i] = [ aux ];
        console.log(auxEst[i]);
      }
      console.log(auxEst); FALTA SUMATORIA Y PORCENTAJE POR MATERIA*/

      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "GRAFICO DE NOTAS"
        },
        data: [{
          type: "column",
          dataPoints:[
            { y: this.Estudiante[0].calificacion, label: this.Estudiante[0].nombre},
            { y: this.Estudiante[1].calificacion, label: this.Estudiante[1].nombre },
            { y: this.Estudiante[2].calificacion, label: this.Estudiante[2].nombre },
            { y: this.Estudiante[3].calificacion, label: this.Estudiante[3].nombre }
          ]
        }]
      });
      chart.render();
    });
  }

  readEstudiante(){
    this.apiService.getEstudiantes().subscribe((data) => {
      this.Estudiante = data;
    })
  }

  removeEstudiante(estudiante, index) {
    if(window.confirm('Estas seguro que deseas eliminar el registro?')) {
      this.apiService.deleteEstudiante(estudiante._id).subscribe((data) => {
          this.Estudiante.splice(index, 1);
        }
      )
    }
  }

}
