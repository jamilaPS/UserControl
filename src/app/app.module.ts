import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { PrincipalPage } from '../pages/principal/principal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroUsuarioPage,
    PrincipalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroUsuarioPage,
    PrincipalPage
  ],
  providers: []
})
export class AppModule {}
