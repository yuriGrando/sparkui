import Component from './components/Component'
import spkBtn from "./components/spk-btn.vue";

const version = __UI_VERSION__

function install(app) {
    app.component(Component.name, Component);
    app.component(spkBtn.name, spkBtn);

}

export {
    version,
    Component,
    spkBtn,

    install
}
