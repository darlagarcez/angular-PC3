import { CursoCreateComponent } from './curso-create/component/curso-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        CursoCreateComponent,
        CursoListComponent,
        CursoEditComponent
    ],
    exports: [CursoCreateComponent
    ],
})
export class CursoModule {}