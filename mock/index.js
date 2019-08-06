import Mock from 'mockjs'
import {homeData} from './data/home'
import {cityData} from './data/city'
let _homeData = homeData;
let _cityData = cityData;

Mock.mock('/data/index', 'get', _homeData) // 根据数据模板生成模拟数据
Mock.mock('/data/city', 'get', _cityData)
