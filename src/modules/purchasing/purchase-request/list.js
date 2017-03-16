import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';

@inject(Router, Service)
export class List {
  dataToBePosted = [];

  rowFormatter(data, index) {
    if (data.isPosted)
      return { classes: "success" }
    else
      return {}
  }

  context = ["detail", "print"]

  columns = [
    {
      field: "isPosting", title: "Post", checkbox: true, sortable: false,
      formatter: function (value, data, index) {
        this.checkboxEnabled = !data.isPosted;
        return ""
      }
    },
    {
      field: "date", title: "Tgl. PR", formatter: function (value, data, index) {
        return moment(value).format("DD MMM YYYY");
      }
    },
    { field: "no", title: "No. PR" },
    { field: "unit.division.name", title: "Divisi" },
    { field: "category.name", title: "Kategori" },
    // { field: "NPWP", title: "NPWP" },
    {
      field: "isPosted", title: "Posted",
      formatter: function (value, row, index) {
        return value ? "SUDAH" : "BELUM";
      }
    }
  ];

  loader = (info) => {
    var order = {};
    if (info.sort)
      order[info.sort] = info.order;
    // console.log(info)
    var arg = {
      page: parseInt(info.offset / info.limit, 10) + 1,
      size: info.limit,
      keyword: info.search,
      order: order
    }

    return this.service.search(arg)
      .then(result => {
        return {
          total: result.info.total,
          data: result.data
        }
      });
  }

  constructor(router, service) {
    this.service = service;
    this.router = router;
  }

  contextClickCallback(event) {
    var arg = event.detail;
    var data = arg.data;
    switch (arg.name) {
      case "detail":
        this.router.navigateToRoute('view', { id: data._id });
        break;
      case "print":
        this.service.getPdfById(data._id);
        break;
    }
  }

  contextShowCallback(index, name, data) {
    switch (name) {
      case "print":
        return data.isPosted;
      default:
        return true;
    }
  }

  posting() {
    if (this.dataToBePosted.length > 0) {
      this.service.post(this.dataToBePosted).then(result => {
        this.table.refresh();
      }).catch(e => {
        this.error = e;
      })
    }
  }

  create() {
    this.router.navigateToRoute('create');
  }
}
