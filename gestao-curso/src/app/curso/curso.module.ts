import { CursoCreateComponent } from './curso-create/component/curso-create.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CursoCreateComponent
    ],
    exports: [CursoCreateComponent
    ],
})
export class CursoModule {}