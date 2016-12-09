import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
      console.log("chegou aqui!");
      console.log(data);
      if(data.status == 401){
        this.showAlert('Atenção!', 'Email ou senha incorretos.')
      }
      else if(data.status == 200){
        console.log("chegou aqui");
        console.log(data);
         window.sessionStorage.setItem('usuarioLogado', JSON.stringify(data));
       }
     else{
       this.showAlert('Atenção!', 'Ocorreu um erro, por favor tente novamente.')
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
