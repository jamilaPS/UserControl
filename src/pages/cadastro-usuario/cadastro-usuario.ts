import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuarioPage {
  private usuario = {};
  private url = "http://localhost:8100/userControl/usuario/cadastrar";

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {}

  ionViewDidLoad() {

  }

  cadastrar(){
      this.http.post(this.url, this.usuario).map(res => res.json()).subscribe(data => {
        console.log(data.mensagem);
         this.showAlert('Atenção!', data.mensagem);
         this.navCtrl.pop();
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
