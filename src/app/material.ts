import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatMenuModule, MatToolbarModule,
        MatIconModule, MatTabsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule,
        MatIconModule, MatTabsModule],

})
export class MaterialModule { }