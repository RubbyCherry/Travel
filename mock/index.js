import Mock from 'mockjs'
import {homeData} from './data/home'
import {cityData} from './data/city'
let _homeData = homeData;
let _cityData = cityData;

Mock.mock('/data/index', 'post', function(option){
    // option.body.city
    // console.log(option)
    return _homeData
}) // home模块的数据
Mock.mock('/data/city', 'get', _cityData) // city模块的数据
