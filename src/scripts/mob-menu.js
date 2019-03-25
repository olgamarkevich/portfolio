import Vue from 'vue';

const modMenuState = {
    openCls: false
}

new Vue({
    el:"#mob-menu-toggle-component",
    template:"#mob-menu-toggle",
    data: modMenuState,
    methods: {
        open() {
            this.openCls = true;
        }
    }
});

new Vue({
    el:"#mob-menu-component",
    template:"#mob-menu",
    data: modMenuState,
    methods: {
        close() {
            this.openCls = false;
        }
    }
});