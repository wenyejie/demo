declare module '*.vue' {
  import Vue from 'vue'

  interface ComponentsData<V extends Vue> {
    '*': any
  }
  export default Vue
}
