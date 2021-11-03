import { ToastInterface } from 'vue-toastification';
import { Store } from 'vuex';

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<T>;
    $config: Record<string, any>;
  }
}