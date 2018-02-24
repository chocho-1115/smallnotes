import Vue from 'vue'

const jsEasy = Vue.directive('jsEasy', {
  // a
  log: function (obj) {
    console.log(obj)
  }
})

export {jsEasy as J}