import angular from 'angular'
import ngRoute from 'angular-route'
import Menu from 'components/Menu'
import HeaderController from 'components/HeaderController'
import FooterController from 'components/FooterController'
import MainController from 'components/MainController'
import CalcController from 'components/CalcController'
import Blog from 'components/Blog'

import routerSettings from 'app.router.config'
import { MenuApi } from 'api'
// import 'angular-aria'
// import 'angular-animate'
// import 'angular-material'
import 'style/main.scss'

let menuList = false;
// setTimeout(() => console.log('hello'), 0)

setTimeout(() => {
  menuList = [];
  MenuApi.getMenu()
    .then(data => {
        data.values.forEach((row, index) => {
            if (index === 0) return; // skip header row
            let prod = {
                name: row[0],
                description: row[1],
                img: row[2],
                price: row[3],
                day1: row[4],
                day2: row[5],
                day3: row[6],
                day4: row[7],
                day5: row[8],
                day6: row[9],
                day7: row[10]
            };
            menuList.push(prod);
        })
        // console.log(menuList)
    })
    .catch(errors => { console.log(errors) })
}, 0)



angular.module('application', ['ngRoute'])
 .config(routerSettings)
 .factory('menuList', ['$http', () => menuList])
 .controller('Menu', ['$scope', '$timeout', 'menuList', '$route', '$rootScope', '$location', Menu])
 .controller('HeaderController', ['$scope', HeaderController])
 .controller('FooterController', ['$scope', FooterController])
 .controller('MainController', ['$timeout', MainController])
 .controller('CalcController', ['$scope', CalcController])
 .controller('Blog', ['$scope', Blog])

 
