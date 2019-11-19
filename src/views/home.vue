<template>
    <div>
        <el-button type="primary" @click="lr">录入</el-button>
        <el-button type="primary" @click="ck">查看</el-button>
        <el-button type="primary" @click="tc">退出登录</el-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods:{
        lr () {
           this.$router.push('/luru')
        },
        ck () {
            this.$router.push('/chakan')
        },
        tc () {
            this.$axios.post('/api/logout').then( res => {
                console.log(res)
            })
             this.$router.push('/Login')
        }
    }
}
</script>