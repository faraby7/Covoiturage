import { Component, OnInit } from '@angular/core';
import {FirstService} from './first.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastyService, ToastOptions, ToastData} from 'ng2-toasty';
import {Utilisateur} from './Utilisateur';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    position = 'bottom-right';
    title: string;
    msg: string;
    showClose = true;
    timeout = 5000;
    theme = 'bootstrap';
    type = 'default';
    closeOther = false;


    constructor(private firstService: FirstService,private router:Router,private toastyService: ToastyService) { }



  ngOnInit() {
  }


    onSubmit(f: NgForm) {

       this.firstService.login({email: f.value.email, password: f.value.password})
           .subscribe(
               response =>{
                   console.log(response[0].id);
                   sessionStorage.setItem("id",response[0].id);
                   sessionStorage.setItem("nom",response[0].nom);
                   sessionStorage.setItem("prenom",response[0].prenom);
                   sessionStorage.setItem("sex",response[0].sex);
                   sessionStorage.setItem("date_naissance",response[0].date_naissance);
                   sessionStorage.setItem("adresse",response[0].adresse);
                   sessionStorage.setItem("email",response[0].email);
                   sessionStorage.setItem("password",response[0].password);
                   sessionStorage.setItem("description",response[0].description);
                   sessionStorage.setItem("img_prf",response[0].img_prf);
                   sessionStorage.setItem("created_at",response[0].created_at);
                   sessionStorage.setItem("updated_at",response[0].updated_at);
               },
               error =>{
                   this.addToast({title:'Login ou password est incorrect', msg: "", timeout: 2000, theme:'default', position:'top-right', type:'error'});
                   console.log(error);
               },
               () => {
                   this.addToast({title:'Login ou password est correct', msg: "", timeout: 2000, theme:'default', position:'top-right', type:'success'});
                   this.passagerOrConducteur(Number(sessionStorage.getItem("id")));

               }
           )
    }

    passagerOrConducteur(idUtilisateur:number){

        this.firstService.Passager(idUtilisateur)
            .subscribe(
                response1 =>{
                    console.log('passager');
                    sessionStorage.setItem("idPassager",response1[0].id);
                    sessionStorage.setItem("nb_reservation",response1[0].nb_reservation);
                },
                error =>{

                    this.firstService.Conducteur(idUtilisateur)
                        .subscribe(
                            response2 =>{
                                console.log('conducteur');
                                sessionStorage.setItem("idConducteur",response2[0].id);
                                sessionStorage.setItem("nb_etoils",response2[0].nb_etoils);
                            },
                            error =>{
                                this.addToast({title:'Login ou password est incorrect', msg: "", timeout: 2000, theme:'default', position:'top-right', type:'error'});
                                console.log(error);
                            },
                            () => {
                                this.addToast({title:'Login ou password est correct', msg: "", timeout: 2000, theme:'default', position:'top-right', type:'success'});
                                 this.router.navigate(['dashboard']);

                            }
                        )
                },
                () => {
                    this.addToast({title:'Login ou password est correct', msg: "", timeout: 2000, theme:'default', position:'top-right', type:'success'});
                    this.router.navigate(['dashboardPassager']);

                }
            )

    }






    addToast(options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        this.position = options.position ? options.position : this.position;
        const toastOptions: ToastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: (toast: ToastData) => {
                console.log('Toast ' + toast.id + ' has been added removed!');
            }
        };

        switch (options.type) {
            case 'default': this.toastyService.default(toastOptions); break;
            case 'info': this.toastyService.info(toastOptions); break;
            case 'success': this.toastyService.success(toastOptions); break;
            case 'wait': this.toastyService.wait(toastOptions); break;
            case 'error': this.toastyService.error(toastOptions); break;
            case 'warning': this.toastyService.warning(toastOptions); break;
        }
    }

}
