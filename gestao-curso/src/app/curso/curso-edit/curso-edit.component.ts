import { Component, OnInit } from '@angular/core';
import { Modalidade } from '../models/modalidade.model';
import { Curso } from '../models/curso.model';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from './../curso.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'gc-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css'],
})
export class CursoEditComponent implements OnInit {
  public id?: number;
  curso?: Curso;
  cursoForm!: FormGroup;
  updated = false;

  modalidades = [
    { modalidade: Modalidade.PRESENCIAL, descricao: 'Presencial' },
    { modalidade: Modalidade.EAD, descricao: 'Ensino a Distância' },
    { modalidade: Modalidade.HIBRIDO, descricao: 'Semi presencial' },
  ];

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.cursoService.buscarPorId(this.id!).subscribe(
      (dado) => {
        this.curso = dado;
      },
      (error) => console.log(error)
    );
    this.createForm();
  }

  createForm() {
    this.cursoForm = this.formBuilder.group({
      id: new FormControl(this.id),
      nome: new FormControl(this.curso?.nome, [
        Validators.required,
        Validators.minLength(5),
      ]),
      cargaHoraria: new FormControl(this.curso?.cargaHoraria, [
        Validators.required,
      ]),
      modalidade: new FormControl(this.curso?.modalidade, [
        Validators.required,
      ]),
    });
  }

  update() {
    if (this.cursoForm.valid) {
      const curso = this.cursoForm.getRawValue() as Curso;
      this.cursoService.update(this.id, this.curso).subscribe(
        () => (this.updated = true),
        (error) => console.log(error)
      );
    }
  }
}
