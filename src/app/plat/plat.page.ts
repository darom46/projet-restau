import { Component } from '@angular/core';
import { PlatService } from "../services/plat.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {
  plats: any;
  constructor(private service: PlatService, private router: Router) 
  {
    this.service.getAllPlats().subscribe(data =>{
      this.plats = data;
      console.log(data)
    },
    error => {
      console.log('Une erreur est survenue');
    });
  }

  detailPlat(plat)
  {
    this.router.navigate(['/tabs/plat/datail-plat', plat])
  }
}
