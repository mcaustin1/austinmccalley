import Vue from "vue";

import Uikit from "uikit/dist/js/uikit-core";
import Icons from "uikit/dist/js/uikit-icons";

Uikit.use(Icons);
Uikit.container = "#__nuxt";

Vue.prototype.$uikit = Uikit;