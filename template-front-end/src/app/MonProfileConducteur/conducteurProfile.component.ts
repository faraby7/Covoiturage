import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ToastyService} from 'ng2-toasty';
import {ActivatedRoute, Router} from '@angular/router';
import {ConducteurProfileService} from './conducteurProfile.service';

declare const $: any;
declare var Morris: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './conducteurProfile.component.html'
})

export class ConducteurProfileComponent implements OnInit {


    conducteurData:any;
    conducteurTrajerData:any;
    conducteurVehiculeData:any;
    closeOther = false;
    closeResult: string;

    constructor(private conducteurProfileService:ConducteurProfileService,private route: ActivatedRoute,private router:Router,private modalService: NgbModal,private toastyService: ToastyService) {}

  ngOnInit() {
      this.getConducteur();
      this.getConducteurTrajet();
      this.getConducteurVehicule();
  }


    getConducteur():void{
        const id =+Number(sessionStorage.getItem('id'));
        this.conducteurProfileService.getConducteur(id).subscribe(conducteur => this.conducteurData=conducteur);
    }

    getConducteurTrajet():void{
        const id =+Number(sessionStorage.getItem('id'));
        this.conducteurProfileService.getConducteurTrajet(id).subscribe(conducteurTrajet => this.conducteurTrajerData=conducteurTrajet);
    }



    getConducteurVehicule():void{
        const id =+Number(sessionStorage.getItem('id'));
        this.conducteurProfileService.getConducteurVehicule(id).subscribe(conducteurVehicule => this.conducteurVehiculeData=conducteurVehicule);
    }

    openConducteur(content) {
        this.modalService.open(content, {size: 'lg' }).result.then((result) => {
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

}
