const UpdateH1 = {
    data() {
        return {
            h1: 'Truc bidule',
            h2: 'text h2',
            h2Temp: '',
            isImageVisible: false,
            isClassColorActive: false,
        }
    },
    methods: {
        replaceH2Text: function () {
            this.h2 = this.h2Temp
        }
    }
}

Vue.createApp(UpdateH1).mount('#update')