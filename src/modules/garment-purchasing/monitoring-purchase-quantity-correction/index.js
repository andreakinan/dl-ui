export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: true, title: 'List Monitoring Koreksi Jumlah Pembelian' },
            { route: 'view/:id', moduleId: './view', name: 'view', nav: false, title: 'View:Monitoring Koreksi Jumlah Pembelian' },
        ]);

        this.router = router;
    }
}