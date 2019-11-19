<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="topic_name" label="议题" width="180"></el-table-column>
      <el-table-column label="关键词">
        <template slot-scope="scope">
          <el-button @click="Toterms(scope.row)" type="text" size="small">{{scope.row.keywords}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="文章">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详细文章</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    Toterms(item) {
      console.log(item);
      this.$router.push({
        path: "/gjc-txt",
        query: {
          data: item
        }
      });
    },
    handleClick (item) {
        this.$router.push({
        path: "/wz",
        query: {
          data: item.id
        }
      });
    },
    getData () {
        this.$axios.get('api/topiclist').then( res => {
                console.log(res)
                this.tableData = res.data.data
            })
    }
  },
  created () {
      this.getData()
  }
};
</script>