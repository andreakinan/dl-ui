import { inject, bindable, computedFrom } from 'aurelia-framework';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api"

export class FooterShipment {
    activate(context) {
        this.context = context;
    }

    // @computedFrom("context.items.data.items.packingReceiptItems.quantity")
    get totalQuantityShipment() {
        if (this.context.items.length > 0) {
            var total = this.context.items
                .map((item) => {
                    if (item.data.items instanceof Array) {
                        var qty = item.data.items
                            .map((detailItem) => {
                                if (detailItem.packingReceiptItems instanceof Array) {
                                    var quantity = detailItem.packingReceiptItems
                                        .map((packingReceiptItem) => parseInt(packingReceiptItem.quantity));
                                    return quantity
                                        .reduce((prev, curr, index) => { return prev + curr }, 0)
                                }
                                else {
                                    return 0;
                                }
                            });
                        return qty
                            .reduce((prev, curr, index) => { return prev + curr }, 0);
                    }
                    else {
                        return 0
                    }
                });
            return total
                .reduce((prev, curr, index) => { return prev + curr }, 0);
        }
        else {
            return 0
        }
    }

    get totalLengthShipment() {
        if (this.context.items.length > 0) {
            var total = this.context.items
                .map((item) => {
                    if (item.data.items instanceof Array) {
                        var qty = item.data.items
                            .map((detailItem) => {
                                if (detailItem.packingReceiptItems instanceof Array) {
                                    var quantity = detailItem.packingReceiptItems
                                        .map((packingReceiptItem) => parseInt(packingReceiptItem.quantity) * parseInt(packingReceiptItem.length));
                                    return quantity
                                        .reduce((prev, curr, index) => { return prev + curr }, 0)
                                }
                                else {
                                    return 0;
                                }
                            });
                        return qty
                            .reduce((prev, curr, index) => { return prev + curr }, 0);
                    }
                    else {
                        return 0
                    }
                });
            return total
                .reduce((prev, curr, index) => { return prev + curr }, 0);
        }
        else {
            return 0
        }
    }

    get totalWeightShipment() {
        if (this.context.items.length > 0) {
            var total = this.context.items
                .map((item) => {
                    if (item.data.items instanceof Array) {
                        var qty = item.data.items
                            .map((detailItem) => {
                                if (detailItem.packingReceiptItems instanceof Array) {
                                    var quantity = detailItem.packingReceiptItems
                                        .map((packingReceiptItem) => parseInt(packingReceiptItem.quantity) * parseInt(packingReceiptItem.weight));
                                    return quantity
                                        .reduce((prev, curr, index) => { return prev + curr }, 0)
                                }
                                else {
                                    return 0;
                                }
                            });
                        return qty
                            .reduce((prev, curr, index) => { return prev + curr }, 0);
                    }
                    else {
                        return 0
                    }
                });
            return total
                .reduce((prev, curr, index) => { return prev + curr }, 0);
        }
        else {
            return 0
        }
    }
}