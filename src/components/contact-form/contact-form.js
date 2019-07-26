import Vue from 'vue/dist/vue.esm';

const app = new Vue({
    el: '#app',
    data: {
        errors: [],
        name: null,
        phone: null,
        email: null,
        city: null
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.phone && this.email && this.city) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.phone) {
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.email) {
                this.errors.push('Требуется указать email.');
            }
            if (!this.city) {
                this.errors.push('Требуется указать город.');
            }

            e.preventDefault();
        }
    }
})