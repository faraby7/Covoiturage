import {Component, OnInit} from '@angular/core';
import {TrajetService} from './trajet.service';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ToastyService} from 'ng2-toasty';
import {Router} from '@angular/router';
declare const $: any;
declare var Morris: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './trajet.component.html'
})

export class TrajetComponent implements OnInit {

    trajetData:any;
    closeOther = false;
    closeResult: string;

    constructor(private trajetservice:TrajetService,private router:Router,private modalService: NgbModal,private toastyService: ToastyService) {}

  ngOnInit() {

    this.getTrajet();

  }
    openTrajet(content) {
        this.modalService.open(content, {size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    getTrajet():void{
        this.trajetservice.getTrajets().subscribe(trajet => this.trajetData=trajet);
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
