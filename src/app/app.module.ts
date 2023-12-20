import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';

//material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConverterUiComponent } from './converter-ui/converter-ui.component';
import { CategoryComponent } from './converter-ui/category/category.component';
import { CategoryIconComponent } from './converter-ui/category-icon/category-icon.component';
import { ConverterComponent } from './converter-ui/converter/converter.component';
import { ConversionInputComponent } from './converter-ui/conversion-input/conversion-input.component';
import { ConversionOutputComponent } from './converter-ui/conversion-output/conversion-output.component';
import { MatGridListModule } from '@angular/material/grid-list';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ConverterUiComponent,
    CategoryComponent,
    CategoryIconComponent,
    ConverterComponent,
    ConversionInputComponent,
    ConversionOutputComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    // FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatCardModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
