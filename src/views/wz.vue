  <template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="url" label="rul" width="180"></el-table-column>
      <el-table-column label="文章详情">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.content}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="form.page"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      form:{
          topicid: '',
          page:1
      },
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.form.page = val
      this.getdatalist()
    },
    handleClick(item) {
      console.log(item);
      this.$router.push({
        path: "/wz-txt",
        query: {
          data: item
        }
      });
    },
    getdatalist () {
        this.$axios.post('api/paperlist',this.form).then( res => {
            console.log(res)
            this.tableData = res.data.data.items
            this.total = res.data.data.total
        })
    }
  },
  created() {
      this.form.topicid = this.$route.query.data
      this.getdatalist()
  }
};
</script>