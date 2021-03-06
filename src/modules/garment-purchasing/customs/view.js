import { inject, Lazy } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Service } from './service';


@inject(Router, Service)
export class View {
  hasCancel = true;
  hasEdit = true;
  hasDelete = true;

  constructor(router, service) {
    this.router = router;
    this.service = service;
  }

  async activate(params) {
      this.hasView = true;
      var locale = 'id-ID';
      var moment = require('moment');
      moment.locale(locale);
      var id = params.id;
      this.data = await this.service.getById(id);
      // console.log(this.data);
      console.log(this.data);
      for(var a of this.data.deliveryOrders){
          a["selected"] = true;
            var quantity = 0;
            var totPrice = 0;
            for(var b of a.items){
                for(var c of b.fulfillments){
                    quantity += c.deliveredQuantity;
                    var priceTemp = c.deliveredQuantity * c.pricePerDealUnit;
                    totPrice += priceTemp;
                }
            }
            a["quantity"] = quantity;
            a["price"] = totPrice;
      }
      this.data.customsDate = moment(this.data.customsDate).format("YYYY-MM-DD");
      this.data.validateDate = moment(this.data.validateDate).format("YYYY-MM-DD");
  }

  cancel(event) {
    this.router.navigateToRoute('list');
  }

  edit(event) {
    this.router.navigateToRoute('edit', { id: this.data._id });
  }   
   
  delete(event) {
    this.service.delete(this.data)
        .then(result => {
          this.cancel();
        });
  }  
}