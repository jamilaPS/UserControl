import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { PrincipalPage } from '../principal/principal';
import { AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cadastroUsuarioPage = CadastroUsuarioPage;
  private usuario = {};
  private url = "http://localhost:8100/userControl/usuario/entrar";

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {
  }

  entrar(){
    this.http.post(this.url, this.usuario).map(res => res.json()).subscribe(data => {
      console.log(data);
      if(data.mensagem != undefined){
        this.showAlert('Atenção!', data.mensagem);
      }
      else{
         window.sessionStorage.setItem('usuarioLogado', JSON.stringify(data));
         this.navCtrl.push(PrincipalPage);
       }
    });
   }

   private showAlert(titulo: string, mensagem: string) {
     let alert = this.alertCtrl.create({
       title: titulo,
       subTitle: mensagem,
       buttons: ['OK']
     });
     alert.present();
   }
}
