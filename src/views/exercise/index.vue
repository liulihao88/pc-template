<template>
  <div class="box">
    <div>
      <div
        class="top c-f-cl"
        style="height: 150px;"
      >
        <div>
          总营业额
        </div>
        <div class="c-m-t-10 c-bold c-ft-32">{{sData.BusinessTotal}}元</div>
      </div>
      <div class="c-f-bt">
        <div>
          <span>营业收入</span>
          <span>{{sData.Business}}元</span>
        </div>
        <div>
          <span>非营业收入</span>
          <span>{{sData.UnBusiness}}元</span>
        </div>
      </div>
    </div>
    <div class="percent">
      <div class="top">
        门店营业额及占比
      </div>
      <div class="c-f-bt first">
        <div>门店名</div>
        <div>营业额</div>
        <div>集团占比</div>
      </div>
      <div
        v-for="(v,i) in sData.VpnBusinessInfoList"
        :key="i"
        class="item c-f-bt"
      >
        <div>{{v.VpnName}}</div>
        <div>{{v.BusinessMoney}}</div>
        <div>{{v.Percent * 100}} %</div>
      </div>
    </div>
    <div class="real">
      <div class="top">
        门店实时经营
      </div>
      <div class="c-f-bt first">
        <div class="flex-2">门店名</div>
        <div class="flex-1">本班进店</div>
        <div class="flex-1">上班预留</div>
        <div class="flex-1">已结门票</div>
        <div class="flex-1">未结门票</div>
        <div class="flex-1">在场手牌</div>
      </div>
      <div
        v-for="(v,i) in sData.VpnRealTimeInfoList"
        :key="i"
        class="item c-f-bt"
      >
        <div class="flex-2">{{v.VpnName}}</div>
        <div class="flex-1">{{v.PeopleInNum}}</div>
        <div class="flex-1">{{v.LeftYestedayNum}}</div>
        <div class="flex-1">{{v.PeopleOutNum}}</div>
        <div class="flex-1">{{v.NoCheckOutNum}}</div>
        <div class="flex-1">{{v.KeyToatalInShop}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GAllChart",
  props: {
    aData: {
      type: Object,
      default: () => { },
    },
  },
  watch: {
    aData(val) {
      // this.sData = val
    }
  },
  data() {
    return {
      sData: {
        "$id": "1",
        "StartTime": "2021-11-25T00:00:00",
        "EndTime": "2021-11-25T00:00:00",
        "TotalMoney": null,
        "UnBusiness": 2244667.72,
        "Business": 0,
        "FinanceCatalogs": null,
        "RevenuePayMethods": null,
        "BusinessTotal": 2244667.72,
        "ValidBusiness": null,
        "MemberCardShiShou": null,
        "IsShowBusinessTotal": false,
        "VpnBusinessInfoList": [
          {
            "$id": "2",
            "VpnName": "上海虹桥店",
            "BusinessMoney": 758223.36,
            "Percent": 0.34
          },
          {
            "$id": "3",
            "VpnName": "杭州萧山店",
            "BusinessMoney": 404806.36,
            "Percent": 0.18
          },
          {
            "$id": "4",
            "VpnName": "北京店",
            "BusinessMoney": 1081638,
            "Percent": 0.48
          }
        ],
        "VpnRealTimeInfoList": [
          {
            "$id": "5",
            "VpnName": "上海虹桥店",
            "PeopleInNum": 0,
            "LeftYestedayNum": 0,
            "PeopleOutNum": null,
            "NoCheckOutNum": null,
            "KeyToatalInShop": 0
          },
          {
            "$id": "6",
            "VpnName": "杭州萧山店",
            "PeopleInNum": 0,
            "LeftYestedayNum": 0,
            "PeopleOutNum": null,
            "NoCheckOutNum": null,
            "KeyToatalInShop": 0
          },
          {
            "$id": "7",
            "VpnName": "北京店",
            "PeopleInNum": 0,
            "LeftYestedayNum": 0,
            "PeopleOutNum": null,
            "NoCheckOutNum": null,
            "KeyToatalInShop": 0
          }
        ]
      }
    };
  },
  components: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 100px;
  color: #333;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  background: #f3f5f9;
}
</style>
