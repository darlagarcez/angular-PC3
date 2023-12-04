import { Curso } from './../../models/curso.model';
import { Modalidade } from './../../models/modalidade.model';
import { CursoService } from './../../curso.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'gc-curso-create',
  templateUrl: './curso-create.component.html',
})
export class CursoCreateComponent implements OnInit {
  cursoForm!: FormGroup;
  submitted = false;
  modalidades = [
    { modalidade: Modalidade.PRESENCIAL, descricao: 'Presencial' },
    { modalidade: Modalidade.EAD, descricao: 'Ensino a Distância' },
    { modalidade: Modalidade.HIBRIDO, descricao: 'Híbrido' },
  ];
  constructor(
    private cursoService: CursoService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.cursoForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cargaHoraria: new FormControl('', [Validators.required]),
      modalidade: new FormControl('', [Validators.required]),
    });
  }
  save() {
    if (this.cursoForm.valid) {
      const curso = this.cursoForm.getRawValue() as Curso;
      this.cursoService.save(curso).subscribe(
        () => (this.submitted = true),
        (error) => console.log(error)
      );
    }
  }
  addCursoForm() {
    this.submitted = false;
    this.cursoForm.reset();
  }
}
