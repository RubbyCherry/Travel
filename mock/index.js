import Mock from 'mockjs'
import {homeData} from './data/home'
import {cityData} from './data/city'
let _homeData = homeData;
let _cityData = cityData;

Mock.mock('/data/index', 'get', _homeData) // home模块的数据
Mock.mock('/data/city', 'get', _cityData) // city模块的数据
