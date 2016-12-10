import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  private usuarios = [];
  private url = "http://localhost:8100/userControl/usuario";
  private hideNome = false;
  private hideEmail = false;
  private hideCPF = false;
  private valorPesquisa = "";
  private opcaoPesquisa = "";

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    this.http.get(this.url+"/buscarTodos").map(res => res.json()).subscribe(data => {
      this.usuarios = data;
    });
  }

  detalhes(usuario){
    var corpo = usuario.email + "\n" + usuario.cpf;
    this.showAlert(usuario.nome, corpo);
  }

  private showAlert(titulo: string, mensagem: string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

  hideInputs(param){
    this.opcaoPesquisa = param;
    if(param == "nome"){
      this.hideNome = true;
      this.hideEmail = false;
      this.hideCPF = false;
    }
    else if(param == "email"){
      this.hideNome = false;
      this.hideEmail = true;
      this.hideCPF = false;
    }
    else{
      this.hideNome = false;
      this.hideEmail = false;
      this.hideCPF = true;
    }
  }

  pesquisar(){
    if(this.opcaoPesquisa == "nome"){
      this.http.get(this.url+"/buscarNome/"+this.valorPesquisa).map(res => res.json()).subscribe(data => {
        this.usuarios = data;
      });
    }
    else if(this.opcaoPesquisa == "email"){
      this.http.get(this.url+"/buscarEmail/"+this.valorPesquisa).map(res => res.json()).subscribe(data => {
        this.usuarios = data;
        });
    }
    else if(this.opcaoPesquisa == "cpf"){
      this.http.get(this.url+"/buscarCpf/"+this.valorPesquisa).map(res => res.json()).subscribe(data => {
        this.usuarios = data;
        });
    }
    else{
      this.showAlert("Atenção!", "Informe um parâmetro para pesquisa.");
    }
  }

}
