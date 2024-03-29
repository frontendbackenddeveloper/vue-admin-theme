import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Vuestic Satisfaction Score',
      backgroundColor: '#FE2360',
      borderColor: palette.transparent,
      data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93],
    },
    {
      label: 'Bulma Satisfaction Score',
      backgroundColor: '#000',
      borderColor: palette.transparent,
      data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53],
    },
  ],
}
