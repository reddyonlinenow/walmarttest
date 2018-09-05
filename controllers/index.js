'use strict';

const Joi = require('joi');
const _ = require('lodash');
import series from 'async/series';
const Request = require("request");

const getProducts = (query, reply) => {
	itemList = [];
	if (_.isEqual(query, 'backpack')) {
		itemList = ['35613901', '35813552', '23117408']
	}
	if (!_.isEmpty(itemList)) {
		let asyncServiceFns = asyncService(itemList);
		async.series([asyncServiceFns], (error, results)=>{
			if (error) throw new Error(error);
			return results;
		})

	}

}

const asyncService = (itemListApi) => {
	const asyncApiFunctions = [];
	itemListApi.forEach((eachItem) => {
		let options = {
			method: 'GET',
			url: 'http://api.walmartlabs.com/v1/items/'+eachItem,
			qs: {
				format: 'json',
				apiKey: 'kjybrqfdgp3u4yv2qzcnjndj'
			},
		};

		asyncApiFunctions.push((callback) =>{
			Request(options, function(error, response, body) {
				if (error) throw new Error(error);
				return body;
			});
		});
	});
	return asyncApiFunctions;
};