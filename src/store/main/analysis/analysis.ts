import {
  getAmountListData
  // getGoodsAddressSale,
  // getGoodsCategoryCount,
  // getGoodsCategoryFavor,
  // getGoodsCategorySale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    //   goodsCategoryCount: [],
    //   goodsCategorySale: [],
    //   goodsCategoryFavor: [],
    //   goodsAddressSale: []
    // }),
    goodsCategoryCount: [
      {
        id: 2,
        name: '上衣',
        goodsCount: 14
      },
      {
        id: 3,
        name: '裤子',
        goodsCount: 19
      },
      {
        id: 4,
        name: '鞋子',
        goodsCount: 19
      },
      {
        id: 5,
        name: '厨具',
        goodsCount: 18
      },
      {
        id: 6,
        name: '家具',
        goodsCount: 18
      },
      {
        id: 7,
        name: '床上用品',
        goodsCount: 19
      },
      {
        id: 8,
        name: '女装',
        goodsCount: 35
      }
    ],
    goodsCategorySale: [
      {
        id: 2,
        name: '上衣',
        goodsSale: '49749'
      },
      {
        id: 3,
        name: '裤子',
        goodsSale: '84754'
      },
      {
        id: 4,
        name: '鞋子',
        goodsSale: '58283'
      },
      {
        id: 5,
        name: '厨具',
        goodsSale: '57354'
      },
      {
        id: 6,
        name: '家具',
        goodsSale: '49002'
      },
      {
        id: 7,
        name: '床上用品',
        goodsSale: '98579'
      },
      {
        id: 8,
        name: '女装',
        goodsSale: '112268'
      }
    ],
    goodsCategoryFavor: [
      {
        id: 2,
        name: '上衣',
        goodsFavor: '6091'
      },
      {
        id: 3,
        name: '裤子',
        goodsFavor: '4939'
      },
      {
        id: 4,
        name: '鞋子',
        goodsFavor: '19647'
      },
      {
        id: 5,
        name: '厨具',
        goodsFavor: '13906'
      },
      {
        id: 6,
        name: '家具',
        goodsFavor: '15425'
      },
      {
        id: 7,
        name: '床上用品',
        goodsFavor: '7307'
      },
      {
        id: 8,
        name: '女装',
        goodsFavor: '19911'
      }
    ],
    goodsAddressSale: [
      {
        id: 2,
        name: '上衣',
        goodsSale: '49749'
      },
      {
        id: 3,
        name: '裤子',
        goodsSale: '84754'
      },
      {
        id: 4,
        name: '鞋子',
        goodsSale: '58283'
      },
      {
        id: 5,
        name: '厨具',
        goodsSale: '57354'
      },
      {
        id: 6,
        name: '家具',
        goodsSale: '49002'
      },
      {
        id: 7,
        name: '床上用品',
        goodsSale: '98579'
      },
      {
        id: 8,
        name: '女装',
        goodsSale: '112268'
      }
    ]
  }),
  actions: {
    fetchAnalysisDataAction() {
      getAmountListData().then((res) => {
        this.amountList = res.data
      })
      // getGoodsCategoryCount().then((res) => {
      //   this.goodsCategoryCount = res.data
      // })
      // getGoodsCategorySale().then((res) => {
      //   this.goodsCategorySale = res.data
      // })
      // getGoodsCategoryFavor().then((res) => {
      //   this.goodsCategoryFavor = res.data
      // })
      // getGoodsAddressSale().then((res) => {
      //   this.goodsAddressSale = res.data
      // })
    }
  }
})

export default useAnalysisStore
