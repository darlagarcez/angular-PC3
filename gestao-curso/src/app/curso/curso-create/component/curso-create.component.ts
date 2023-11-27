import { Component } from "@angular/core";
import { Modalidade } from "../../models/modalidade.model";
import { CursoService } from "../../curso.service";
import { Curso } from "../../models/curso.model";

@Component({
    selector: 'gc-curso-create',
    templateUrl: './curso-create.component.html'
})
export class CursoCreateComponent {
    nome!: string;
    cargaHoraria!: number;
    modalidade!: Modalidade;
    modalidades = [
        {modalidade: Modalidade.PRESENCIAL, descricao: 'Presencial'},
        {modalidade: Modalidade.EAD, descricao: 'Ensino a Distância'},
        {modalidade: Modalidade.HIBRIDO, descricao: 'Hibrido'}
    ];
    
    constructor(private cursoService: CursoService){}

    onChange(novoValorModalidade: Modalidade){
        this.modalidade = novoValorModalidade;
    }

    save(){
        const curso: Curso = {nome: this.nome, cargaHoraria: this.cargaHoraria, modalidade: this.modalidade};
        this.cursoService.save(curso).subscribe((res) => {
            console.log(res);
        },
        error => console.log(error));
    }
}