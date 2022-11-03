import { Component, Input, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterI } from 'src/app/models/register.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  titulo = 'Usuarios'
  usuarios:any;

  

  constructor(private apiService: ApiService) { }
  showModal = false;
  ngOnInit(): void {
    this.apiService.serviceGetUsers().subscribe((resp) => {
      console.log(resp)
      this.usuarios = resp;
      
    })
  }

  public formRegister: FormGroup = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rol: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required])
  })

  abrirModalRegistroUsuario(){
    ($('#modal_registro_usuario')as any).modal({backdrop: 'static',keyboard:false}); //mantener modal para cierre solo con click boton
    ($('#modal_registro_usuario')as any).modal('show');
  }

  registrarUser(){
    let $txtUser = (<HTMLInputElement>document.getElementById('txt_usuario')),
    $txtPass = (<HTMLInputElement>document.getElementById('txt_pass')),
    txtRol = (<HTMLInputElement>document.getElementById('rol')),
    txtStatus = (<HTMLInputElement>document.getElementById('status'));

    this.apiService.register($txtUser.value,$txtPass.value,txtRol.value,txtStatus.value).subscribe(resp => {
      
      console.log(resp)
      
    })
  }

  reset(){
    let $txtUser = (<HTMLInputElement>document.getElementById('txt_usuario')),
    $txtPass = (<HTMLInputElement>document.getElementById('txt_pass')),
    txtRol = (<HTMLInputElement>document.getElementById('rol')),
    txtStatus = (<HTMLInputElement>document.getElementById('status'));

    $txtUser.value = '';
    $txtPass.value = '';
    txtRol.value = '';
    txtStatus.value ='';

  }
  

}