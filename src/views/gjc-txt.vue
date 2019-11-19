<template>
  <div>
    <el-form :model="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="关键词" prop="name">
        <el-input v-model="ruleForm.content" style="width:80%;"></el-input>
      </el-form-item>
      <el-form-item label="议题">
        <el-select
          v-model="ruleForm.topicid"
          placeholder="请选择议题"
          :disabled="objdata != undefined"
        >
          <el-option
            :label="item.topic_name"
            :value="item.id"
            v-for="item in YTdata"
            :key="item.id"
          >{{item.topic_name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
      <el-button style="width:80%;" @click="login">确定</el-button>
      <el-button style="width:80%;" @click="fh" v-show="this.$route.query.data!== undefined ">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        content: "",
        topicid: "",
        id: ""
      },
      YTdata: []
    };
  },
  methods: {
    login() {
      this.$axios
        .post("api/keywordsave", this.ruleForm)
        .then(res => {
          console.log(res);


        });
      this.$router.push("/luru");
    },
    fh() {
      this.$router.go(-1);
    },
    getList() {
      this.$axios.get("api/keywordTopicList").then(res => {
        console.log(res.data.data);
        this.YTdata = res.data.data;
      });
    }
  },
  created() {
    this.getList();
    console.log(this.$route.query.data);
    this.objdata = this.$route.query.data;
    console.log(this.objdata);
    if (this.objdata !== undefined) {
      this.ruleForm.content = this.objdata.keywords;
      this.ruleForm.topicid = this.objdata.topic_name;
      console.log(this.ruleForm.topicid)
      this.ruleForm.id = this.objdata.kid;
    }
    // let str = '111,222,333'
    // let arr = str.split(',')
    // let arr2 = []
    // for (var i =0 ; i<arr.length;i++){
    //     let obj = {
    //         id: arr[i]
    //     }
    //     arr2.push(obj)
    // }
    // console.log(arr2)
    // this.data = arr2
    // arr.concat(str)
  }
};
</script>