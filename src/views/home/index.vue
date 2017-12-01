<template>
	<section class="homeIndex">
		<router-link :to="{ name: 'list', query: { userId: 123 }}">列表页</router-link>
	</section>
</template>

<script>
export default {
  name: "homeIndex",
  components: {},
  computed: {},
  data() {
    return {};
  },
  watch: {},
  created() {
    console.log(1);
  },
  mounted() {},
  methods: {},
  destroyed() {}
};
</script>
