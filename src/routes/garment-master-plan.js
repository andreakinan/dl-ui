module.exports = [
    {
        route: '/garment-master-plan/weekly-plan',
        name: 'weekly-plan',
        moduleId: './modules/garment-master-plan/weekly-plan/index',
        nav: false,
        title: 'Master Minggu',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/working-hours-standard',
        name: 'working-hours-standard',
        moduleId: './modules/garment-master-plan/working-hours-standard/index',
        nav: false,
        title: 'Standar Jam Kerja',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    // {
    //     route: '/garment-master-plan/style',
    //     name: 'style',
    //     moduleId: './modules/garment-master-plan/style/index',
    //     nav: false,
    //     title: 'Master Style',
    //     auth: true,
    //     settings: {
    //         group: "g-master-plan",
    //         permission: { "C5": 1, "C9": 1 },
    //         iconClass: 'fa fa-dashboard'
    //     }
    // },
    {
        route: '/garment-master-plan/booking-order',
        name: 'booking-order',
        moduleId: './modules/garment-master-plan/booking-order/index',
        nav: false,
        title: 'Booking Order',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/sewing-blocking-plan',
        name: 'sewing-blocking-plan',
        moduleId: './modules/garment-master-plan/sewing-blocking-plan/index',
        nav: false,
        title: 'Blocking Plan Sewing',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/standard-minute-value',
        name: 'standard-hour',
        moduleId: './modules/garment-master-plan/standard-hour/index',
        nav: false,
        title: 'Standard Minute Value',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/master-plan-comodity',
        name: 'master-plan-comodity',
        moduleId: './modules/garment-master-plan/master-plan-comodity/index',
        nav: false,
        title: 'Komoditi',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/monitoring-booking-order',
        name: 'monitoring-booking-order',
        moduleId: './modules/garment-master-plan/monitoring-booking-order/index',
        nav: false,
        title: 'Monitoring Booking Order',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: '/garment-master-plan/garment-section',
        name: 'garment-section',
        moduleId: './modules/garment-master-plan/garment-section/index',
        nav: false,
        title: 'Master Seksi',
        auth: true,
        settings: {
            group: "g-master-plan",
            permission: { "C5": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },


]
