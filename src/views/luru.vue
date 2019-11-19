<template>
    <div>
        <el-button type="primary" @click="btn1">关键词</el-button>
        <el-button type="primary" @click="btn2">文章</el-button>
        <el-button type="primary" @click="btn3">议题</el-button>
        <el-button type="primary" @click="btn4">策略</el-button>
        <el-button type="primary" @click="btn5">到首页</el-button>
        <!-- <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  </el-form> -->
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        btn1 () {
            this.$router.push('/gjc-txt')
        },
        btn2 () {
            this.$router.push('/wz-txt')
        },
        btn3 () {
             this.$router.push('/yt-txt')
        },
        btn4 () {
             this.$router.push('/cc-txt')
        },
        btn5 () {
            this.$router.push('/home')
        }
    }
}
</script>