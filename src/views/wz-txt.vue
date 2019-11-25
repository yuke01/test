<template>
  <div>
    <el-form label-width="80px" class="demo-ruleForm">
      <el-form-item label="标题" prop="name">
        <el-input type="textarea" v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="name">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="url" prop="name">
        <el-input type="textarea" v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="议题">
        <el-select
          v-model="form.topicid"
          placeholder="请选择活动区域"
        >
          <el-option
            :label="item.topic_name"
            :value="item.id"
            v-for="item in YTdata"
            :key="item.id"
          >{{item.topic_name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="策略">
        <el-checkbox-group v-model="form.strategy_id">
          <el-checkbox
            :label="item.id"
            v-for="item in checkData"
            :key="item.id"
          >{{item.name}}</el-checkbox>
        </el-checkbox-group>
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
      form: {
        title: "",
        content: "",
        url: "",
        topicid: "",
        strategy_id: [],
        id: ''
      },
      id: {},
      YTdata: [],
      checkData:[],
      uid:{
          id:''
      }
    };
  },
  methods: {
    login() {
        let str = this.form.strategy_id.join(",")
        this.form.strategy_id = str
        this.$axios.post("api/papersave",this.form).then(res => {
            console.log(res)
      });
      this.$router.push("/luru");
    },
    fh() {
      this.$router.go(-1);
    },
    getList() {
      this.$axios.get("api/topiclist").then(res => {
        console.log(res.data.data);
        this.YTdata = res.data.data;
      });
    },
    getcheckList () {
        this.$axios.get("api/strategylist").then(res => {
        console.log(res.data.data);
        this.checkData = res.data.data;
      });
    },
    postdata () {
        this.$axios.post('api/getpaper',this.uid).then( res => {
            console.log(res)
            this.form.title = res.data.data.title
            this.form.content = res.data.data.content
            this.form.url = res.data.data.url
            this.form.topicid = res.data.data.topic_id
            this.form.strategy_id = res.data.data.strategy_id.split(',')
            console.log(this.form.strategy_id)
        })
    }
  },
  created() {
      this.getList()
      this.getcheckList()
      this.objdata = this.$route.query.data
    if (this.$route.query.data == "undefined") {
      return;
    } else {
      this.uid.id = this.$route.query.data.id;
      this.form.id = this.$route.query.data.id
      this.postdata()
    }
    console.log(this.id);
  }
};
</script>