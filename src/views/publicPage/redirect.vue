<!--
 * @Author: xiaotao2018
 * @Date: 2022-11-25 09:42:35
 * @LastEditTime: 2022-11-25 09:47:29
-->
<script setup lang="ts">
// export default {
//   created() {
//     const { params, query } = this.$route
//     const { path } = params
//     this.$router.replace({ path: '/' + path, query })
//   },
//   render: function(h) {
//     return h() // avoid warning message
//   }
// }

const router = useRouter()
const { params, query } = router.currentRoute.value
const { path } = params
router.replace({ path: '/' + path, query })

</script>
