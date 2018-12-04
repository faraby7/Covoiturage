import {Component, OnInit} from '@angular/core';
import {TrajetService} from './trajet.service';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import {ActivatedRoute, Router} from '@angular/router';
import {Trajets} from './Trajets';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './trajet.component.html'
})

export class TrajetComponent implements OnInit {

    trajetData:any;
    ligneReservationData:any;
    ligneHistoriqueData:any;

    closeOther = false;
    closeResult: string;
    position = 'top-right';

    trajetPost : Trajets;

    myform: FormGroup;
    date_depart:FormControl;
    date_arrive:FormControl;
    lieu_depart:FormControl;
    lieu_arrive:FormControl;
    prix:FormControl;
    id_conducteur:FormControl;
    nbplace:FormControl;
    etats:FormControl;
    description:FormControl;


    constructor(private trajetservice:TrajetService,private route: ActivatedRoute,private router:Router,private modalService: NgbModal,private toastyService: ToastyService) {}

  ngOnInit() {

      this.createFormControls();
      this.createForm();
      this.getTrajet();

  }

    createFormControls() {
        console.log("submit 0");
        const id =+Number(sessionStorage.getItem('id'));
        this.lieu_depart = new FormControl('');
        this.lieu_arrive = new FormControl('');
        this.date_arrive = new FormControl('');
        this.date_depart = new FormControl('');
        this.prix = new FormControl('');
        this.description = new FormControl('');
        this.etats = new FormControl(0);
        this.nbplace = new FormControl('');
        this.id_conducteur = new FormControl(id);
    }


    createForm() {

        console.log("submit 1");

        this.myform = new FormGroup({
            lieu_depart:this.lieu_depart,
            lieu_arrive:this.lieu_arrive,
            date_arrive:this.date_arrive,
            date_depart:this.date_depart,
            prix:this.prix,
            nbplace:this.nbplace,
            description:this.description,
            id_conducteur:this.id_conducteur,
            etats:this.etats,
        });
    }


    onSubmit() {

        if (this.myform.valid) {
            this.trajetPost=  new Trajets();
            this.trajetPost.lieu_depart = this.myform.value['lieu_depart'];
            this.trajetPost.lieu_arrive = this.myform.value['lieu_arrive'];
            this.trajetPost.date_arrive = this.myform.value['date_arrive'];
            this.trajetPost.date_depart = this.myform.value['date_depart'];
            this.trajetPost.prix =this.myform.value['prix'];
            this.trajetPost.etats = this.myform.value['etats'];
            this.trajetPost.id_conducteur = this.myform.value['id_conducteur'];
            this.trajetPost.description= this.myform.value['description'];
            this.trajetPost.nbplace = this.myform.value['nbplace'];
            this.trajetservice.addTrajet( this.trajetPost ).subscribe(trajetPostconsole=>{
                console.log("submit 2");
                try {
                    if(typeof trajetPostconsole.lieu_depart!='undefined'){
                        this.addToast({title:'', msg:'Votre Trajet est ajouté à votre système', timeout: 2000, theme:'bootstrap', position:'top-right', type:'success'});
                        this.myform.reset();
                        setTimeout(() => {this.ngOnInit();}, 1000);
                        return;
                    }
                }catch (e) {
                    this.addToast({title:'', msg:'Votre Trajet n\'est pas ajouté à votre système', timeout: 2000, theme:'bootstrap', position:'top-right', type:'error'});
                } }
            );

        }

    }

    delete(trajet:Trajets):void{

        this.addToast({title:'', msg:'produit est en cours '+ trajet.id, timeout: 2000, theme:'bootstrap', position:'top-right', type:'wait'});
        this.trajetservice.deleteTrajet(trajet).subscribe(trajetPostconsole=>{

            try {

                if(typeof trajetPostconsole.date_depart =='undefined'){
                    this.addToast({title:'', msg:'Trajet supprimé avec succès', timeout: 2000, theme:'bootstrap', position:'top-right', type:'success'});
                    this.myform.reset();
                    setTimeout(() => {this.ngOnInit();}, 1000);

                }

            }catch (e) {

                console.log(e);
                this.addToast({title:'', msg:'Trajet n\'a pas pu être supprimer', timeout: 2000, theme:'bootstrap', position:'top-right', type:'error'});
            }
        });
        setTimeout(() => {this.ngOnInit();}, 1000);
    }

    close(trajet:Trajets):void{

        this.addToast({title:'', msg:'Votre Trajet est en cours de closer', timeout: 2000, theme:'bootstrap', position:'top-right', type:'wait'});
        this.trajetservice.closeTrajet(trajet).subscribe(trajetPostconsole=>{

            try {

                this.addToast({title:'', msg:'Votre Trajet est Close ', timeout: 2000, theme:'bootstrap', position:'top-right', type:'success'});
                setTimeout(() => {this.ngOnInit();}, 1000);

            }catch (e) {
                console.log(e);
                this.addToast({title:'', msg:'Votre Facture n\'est pas Close à votre système', timeout: 2000, theme:'bootstrap', position:'top-right', type:'error'});
            }
        });
        setTimeout(() => {this.ngOnInit();}, 1000);
    }


    Acceptation(num:number):void{


        this.trajetservice.Acceptation(num).subscribe(ReservationPostconsole=>{

            try {

                this.addToast({title:'', msg:'your Action was done ', timeout: 2000, theme:'bootstrap', position:'top-right', type:'success'});
                setTimeout(() => {this.ngOnInit();}, 100);

            }catch (e) {
                console.log(e);
                this.addToast({title:'', msg:'Votre Facture n\'est pas Close à votre système', timeout: 2000, theme:'bootstrap', position:'top-right', type:'error'});
            }
        });
        setTimeout(() => {this.ngOnInit();}, 100);
    }


    Refus(num:number):void{


        this.trajetservice.Refus(num).subscribe(ReservationPostconsole=>{

            try {

                this.addToast({title:'', msg:'your Action was done ', timeout: 2000, theme:'bootstrap', position:'top-right', type:'success'});
                setTimeout(() => {this.ngOnInit();}, 100);

            }catch (e) {
                console.log(e);
                this.addToast({title:'', msg:'Votre Facture n\'est pas Close à votre système', timeout: 2000, theme:'bootstrap', position:'top-right', type:'error'});
            }
        });

        setTimeout(() => {this.ngOnInit(); }, 100);
    }

    getTrajet():void{
        const id =+Number(sessionStorage.getItem('id'));
        this.trajetservice.getConducteurTrajet(id).subscribe(trajet => this.trajetData=trajet);
    }

    getReservation(id:number):void{
        this.trajetservice.getLignesReservation(id).subscribe(ligneReservation => this.ligneReservationData=ligneReservation);
    }


    getHistorique(id:number):void{
        this.trajetservice.getLignesHistorique(id).subscribe(ligneHisto => this.ligneHistoriqueData=ligneHisto);
    }


    openTrajet(content,idHistorique:number) {


        this.ligneHistoriqueData=[];
        this.getHistorique(idHistorique);

        this.modalService.open(content, {size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    openTrajetid(content,id:number) {

        this.ligneReservationData=[];
        this.getReservation(id);

        this.modalService.open(content, {size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    opensm(content) {
        this.modalService.open(content, { }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
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
