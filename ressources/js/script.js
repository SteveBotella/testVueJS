const UpdateH1 = {
    data() {
        return {
            updateH1: 'Truc bidule',
            updateH2: 'Truc machin',
            textH2: 'text h2',
            textColor: 'black',
            checked: false,
            checkedImg: false,
        }
    },
    methods: {
        clickH2: function () {
            this.textH2 = this.updateH2
        },
        changeTextColor: function () {
          if (this.checked) {
              this.textColor = 'black'
          } else {
              this.textColor = 'red'
          }
        }
    }
}

Vue.createApp(UpdateH1).mount('#update')