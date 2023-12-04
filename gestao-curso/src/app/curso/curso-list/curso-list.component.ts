import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../models/curso.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'gc-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  deleteMessage = false;

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit() {
    this.cursoService.listarCursos().subscribe((dados) => {
      this.cursos = dados;
    });
  }

  delete(id?: number) {
    this.cursoService.delete(id!).subscribe(
      (dado) => {
        console.log(dado);
        this.deleteMessage = true;
        this.cursoService.listarCursos().subscribe((dados) => {
          this.cursos = dados;
        });
      },
      (error) => console.log(error)
    );
  }

  updateCurso(id?: number) {
    this.router.navigate(['edit-curso', id]);
  }
}
