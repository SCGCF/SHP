<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" :class="{'disabled': this.pageNo == 1}" >
          <a href="javascript:void(0);" @click="sendPageNo(1)">上一页</a>
        </li>
        <li>
          <a href="javascript:void(0);" v-if="(this.start > 1)" @click="sendPageNo(1)">1</a>
        </li>
        <li class="dotted" v-if="(this.start > 2)"><span>...</span></li>
        <li>
        <li v-for="(page,index) in range(this.start, this.end)" :key="index">
          <a href="javascript:void(0);" @click="sendPageNo(page)">{{page}}</a>
        </li>
        <!-- <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li> -->
        <li class="dotted" v-if="this.end < (this.pageTotal-1)"><span>...</span></li>
        
        <li  @click="sendPageNo(pageTotal)">
          <a href="javascript:void(0);" v-if="this.end <= (this.pageTotal-1)">{{pageTotal}}</a>
        </li>
        <li class="next" :class="{'disabled': this.pageNo == this.pageTotal}">
          <a href="javascript:void(0);" @click="sendPageNo(pageNo+1)">下一页</a>
        </li>
      </ul>
      <div><span>共{{pageTotal}}页&nbsp;</span></div>
    </div>
  </div>
      <!-- :pageNo="3" :pageSize="10" :total="90" :continues="5" -->

</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  data() {
      return {
          pageTotal: Math.ceil(this.total/this.pageSize),
          end: 0,
          start: 0
      }
  },
  methods: {
    sendPageNo(pageNo) {
      this.$emit("getPageNo", pageNo)
      return
    },
    range(start, end) {
      let arr = []
      for(let i = start; i <= end; i++) {
          arr.push(i)
      }
      return arr
    }
  },
  beforeMount() {
    if(this.pageTotal < this.continues){
      this.end = pageTotal
      this.start = 1
    }else {
      this.start = this.pageNo - parseInt(this.continues/2)
      this.end = this.pageNo + parseInt(this.continues/2)
      if(this.start < 1) {
        this.start = 1
        this.end = this.continues
      }
      if(this.end > this.pageTotal) {
        this.end = this.pageTotal
        this.start = this.pageTotal - this.continues + 1
      }
    }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.page {
  height: 66px;
  overflow: hidden;
  float: right;

  .sui-pagination {
    margin: 5px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: not-allowed;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      line-height: 33px;
      width: 50px;
    }
  }
}
</style>