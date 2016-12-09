import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroUsuarioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroUsuarioPage
  ],
  providers: []
})
export class AppModule {}
