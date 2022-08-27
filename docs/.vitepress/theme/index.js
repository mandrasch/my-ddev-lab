// https://vitepress.vuejs.org/guide/using-vue.html#registering-global-components-in-the-theme
import DefaultTheme from 'vitepress/theme'
import TwoClickYoutubePrivacy from '../../components/TwoClickYoutubePrivacy.vue'
import TwoClickGoogleSlidesPrivacy from '../../components/TwoClickGoogleSlidesPrivacy.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TwoClickYoutubePrivacy', TwoClickYoutubePrivacy)
    app.component('TwoClickGoogleSlidesPrivacy', TwoClickGoogleSlidesPrivacy)
  }
}
