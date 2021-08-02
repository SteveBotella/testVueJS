new Vue({
    el: '#app',
    data: {
        message: 'Coucou',
        link: 'https://www.youtube.com/watch?v=XkgiXngcpWk',
        success: true,
        persons: ['LeJoe', 'LeDavid', 'Lehoffman', 'LaCalotteDeSesMobs']
    },
    methods: {
        close: function () {
            this.success = false
        },
        open: function () {
            this.success = true
        }
    }
})