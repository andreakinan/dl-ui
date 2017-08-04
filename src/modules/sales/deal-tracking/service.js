import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../../../utils/rest-service';

const boardServiceUri = 'sales/deal-tracking-boards';
const stageServiceUri = 'sales/deal-tracking-stages';
const dealServiceUri = 'sales/deal-tracking-deals';
const activityServiceUri = 'sales/deal-tracking-activities';

export class Service extends RestService {
    constructor(http, aggregator, config, endpoint) {
        super(http, aggregator, config, "production");
    }

    /* Board */
    searchBoard(info) {
        var endpoint = `${boardServiceUri}`;
        return super.list(endpoint, info);
    }

    getBoardById(id) {
        var endpoint = `${boardServiceUri}/${id}`;
        return super.get(endpoint);
    }

    createBoard(data) {
        var endpoint = `${boardServiceUri}`;
        return super.post(endpoint, data);
    }

    updateBoard(data) {
        var endpoint = `${boardServiceUri}/${data._id}`;
        return super.put(endpoint, data);
    }

    deleteBoard(data) {
        var endpoint = `${boardServiceUri}/${data._id}`;
        return super.delete(endpoint, data);
    }

    /* Stage */
    searchStage(info) {
        var endpoint = `${stageServiceUri}`;
        return super.list(endpoint, info);
    }

    getStageById(id) {
        var endpoint = `${stageServiceUri}/${id}`;
        return super.get(endpoint);
    }

    createStage(data) {
        var endpoint = `${stageServiceUri}`;
        return super.post(endpoint, data);
    }

    updateStage(data) {
        var endpoint = `${stageServiceUri}/${data._id}`;
        return super.put(endpoint, data);
    }

    deleteStage(data) {
        var endpoint = `${stageServiceUri}/${data._id}`;
        return super.delete(endpoint, data);
    }

    /* Deal */
    searchDeal(info) {
        var endpoint = `${dealServiceUri}`;
        return super.list(endpoint, info);
    }

    getDealById(id) {
        var endpoint = `${dealServiceUri}/${id}`;
        return super.get(endpoint);
    }

    createDeal(data) {
        var endpoint = `${dealServiceUri}`;
        return super.post(endpoint, data);
    }

    updateDeal(data) {
        var endpoint = `${dealServiceUri}/${data._id}`;
        return super.put(endpoint, data);
    }

    deleteDeal(data) {
        var endpoint = `${dealServiceUri}/${data._id}`;
        return super.delete(endpoint, data);
    }

    /* Activity */
    searchActivity(info) {
        var endpoint = `${activityServiceUri}`;
        return super.list(endpoint, info);
    }

    getActivityById(id) {
        var endpoint = `${activityServiceUri}/${id}`;
        return super.get(endpoint);
    }

    createActivity(data) {
        var endpoint = `${activityServiceUri}`;
        return super.post(endpoint, data);
    }

    upsertActivityAttachment(data) {
        var endpoint = `${activityServiceUri}/upload/file`;

        var formData = new FormData();

        if(data.update) {
            formData.append("_id", data._id);
            formData.append("update", data.update);
        }
        else {
            formData.append("dealId", data.dealId);
            formData.append("type", data.type);
        }

        formData.append("notes", data.field.notes);

        for (var i = 0; i < data.field.attachments.length; i++) {
            formData.append("fileUpload-" + i, data.field.attachments[i]);
        }

        var request = {
            method: 'POST',
            headers: { "x-timezone-offset": this.endpoint.defaults.headers["x-timezone-offset"] },
            body: formData
        };

        var promise = this.endpoint.client.fetch(endpoint, request);
        this.publish(promise);
        return promise
            .catch(e => {
                return e.json().then(result => {
                    if (result.error)
                        return Promise.resolve(result);
                });
            })
            .then(result => {
                this.publish(promise);

                if (result)
                    return this.parseResult(result);
                else
                    return Promise.resolve({});
            })
    }

    getFile(fileNameStorage) {
        var endpoint = `${activityServiceUri}/attachment/${fileNameStorage}`;

        var request = {
            method: 'GET',
            headers: new Headers({ "x-timezone-offset": this.endpoint.defaults.headers["x-timezone-offset"] })
        };
        var getRequest = this.endpoint.client.fetch(endpoint, request)
        this.publish(getRequest);
        return this._downloadFile(getRequest);
    }

    deleteFile(data) {
        var endpoint = `${activityServiceUri}/activity/updateAttachment`;
        return super.put(endpoint, data);
    }

    updateActivity(data) {
        var endpoint = `${activityServiceUri}/${data._id}`;
        return super.put(endpoint, data);
    }

    deleteActivity(data) {
        var endpoint = `${activityServiceUri}/${data._id}`;
        return super.delete(endpoint, data);
    }
}