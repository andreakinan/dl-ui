module.exports = [
    {
        route: 'inventory/packing-receipt',
        name: 'packing-receipt',
        moduleId: './modules/inventory/packing-receipt/index',
        nav: false,
        title: 'Penerimaan Packing Gudang Jadi',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'inventory/inventory-documents',
        name: 'inventory/inventory-documents',
        moduleId: './modules/inventory/inventory-document/index',
        nav: false,
        title: 'Dokumen Inventory',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'inventory/reports/inventory-movement-report',
        name: 'inventory/reports/inventory-movement-report',
        moduleId: './modules/inventory/reports/inventory-movement-report/index',
        nav: false,
        title: 'Laporan Stock In/Out',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'inventory/reports/inventory-summary-report',
        name: 'inventory/reports/inventory-summary-report',
        moduleId: './modules/inventory/reports/inventory-summary-report/index',
        nav: false,
        title: 'Kartu Stok',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'inventory/reports/fp-packing-receipt-report',
        name: 'inventory/reports/fp-packing-receipt-report',
        moduleId: './modules/inventory/reports/fp-packing-receipt-report/index',
        nav: false,
        title: 'Laporan Penerimaan Packing',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'inventory/finishing-printing/fp-retur-to-qc-doc',
        name: 'inventory/finishing-printing/fp-retur-to-qc-doc',
        moduleId: './modules/inventory/finishing-printing/fp-retur-to-qc-doc/index',
        nav: false,
        title: 'Retur Barang ke QC',
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: 'fa fa-dashboard'
        }

    },
    {
        route: "inventory/finishing-printing/reports/fp-retur-to-qc-doc-report",
        name: "inventory/finishing-printing/reports/fp-retur-to-qc-doc-report",
        moduleId: "modules/inventory/finishing-printing/reports/fp-retur-to-qc-doc-report/index",
        nav: false,
        title: "Laporan Retur Barang ke QC",
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/finishing-printing/fp-shipment-document",
        name: "inventory/finishing-printing/fp-shipment-document",
        moduleId: "modules/inventory/finishing-printing/fp-shipment-document/index",
        nav: false,
        title: "Pengiriman Barang Gudang Jadi",
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/finishing-printing/reports/fp-shipment-document-report",
        name: "inventory/finishing-printing/reports/fp-shipment-document-report",
        moduleId: "modules/inventory/finishing-printing/reports/fp-shipment-document-report/index",
        nav: false,
        title: "Laporan Pengiriman Barang Gudang Jadi",
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/finishing-printing/fp-retur-from-buyer",
        name: "inventory/finishing-printing/fp-retur-from-buyer",
        moduleId: "modules/inventory/finishing-printing/fp-retur-from-buyer/index",
        nav: false,
        title: "Retur Barang Dari Buyer",
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "C9": 1, "F1": 1, "F2": 1 },
            iconClass: "fa fa-dashboard"
        }
    },
    {
        route: "inventory/reports/fp-shiptment-delivery-buyer-report",
        name: "inventory/reports/fp-shiptment-delivery-buyer-report",
        moduleId: "modules/inventory/reports/fp-shiptment-delivery-buyer-report/index",
        nav: false,
        title: "Laporan Pengiriman Buyer",
        auth: true,
        settings: {
            group: "Inventory",
            permission: { "*": 1 },
            iconClass: "fa fa-dashboard"
        }
    }
]
