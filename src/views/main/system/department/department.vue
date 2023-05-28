<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    />
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-click="handleNewClick"
      @edit-click="handleEditClick"
    >
      <template #leader="scope">
        <span class="leader"> 我是GGB: {{ scope.row[scope.prop] }} </span>
      </template>
      <template #parent="scope">我是ggb: {{ scope.row[scope.prop] }}</template>
    </page-content>
    <page-modal ref="modalRef" :modal-config="modalConfigRef" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useMainStore from '@/store/main/main'

import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
// import PageModal from '@/components/page-modal/page-modal.vue'
import PageModal from './c-cpns/page-modal.vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

// 对modalConfig进行操作
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const department = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...department)
    }
  })

  return modalConfig
})

// 点击search，content的操作
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// contentRef,modal的操作
const { modalRef, handleNewClick, handleEditClick } = usePageModal()
</script>

<style lang="less" scoped>
.leader {
  color: aqua;
}
</style>
