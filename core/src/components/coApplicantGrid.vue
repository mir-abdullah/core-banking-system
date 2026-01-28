<template>
  <DataTable :value="list" responsiveLayout="scroll" class="card-table">
    <Column>
      <template #body="slotProps">
        <div class="coapp-row">
          <!-- LEFT -->
          <div class="coapp-left">
            <div class="coapp-header">
              <span class="coapp-title">
                Co-Applicant {{ slotProps.index + 1 }}
              </span>

              <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data)" class="status-pill" />
            </div>

            <div class="coapp-name">
              <i class="pi pi-user"></i>
              {{ slotProps.data.name }}
            </div>
          </div>

          <!-- RIGHT -->
          <div class="coapp-actions">
            <Button label="View" class="view-btn" />
            <Button @click="$emit('delete-row', slotProps.index)" label="Delete" class="delete-btn" />
          </div>
        </div>

      </template>
    </Column>
  </DataTable>
</template>

<script setup>
import { computed } from 'vue'
import DataTable from 'primevue/datatable';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

import Column from 'primevue/column';

const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  }
})

const getSeverity = (item) => {
  switch (item.status) {
    case 'Completed':
      return 'success'
    case 'Pending':
      return 'warn'
    default:
      return 'null'
  }
}

const viewActivities = (item) => {
  console.log('View', item)
}

const deleteActivities = (item) => {
  console.log('Delete', item)
}
</script>
<style scoped>
/* FULL WIDTH like form row */
.coapp-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--text-color);
  border-radius: 12px;

  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
  background: #fff;
}

/* LEFT BLOCK */

.coapp-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* ADD THIS */
  margin-right: 54rem;
}


/* TITLE + STATUS */
.coapp-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  /* space between title & pill */
}

.coapp-title {
  font-size: 1.125rem;
  font-weight: 600;
}

/* NAME */
.coapp-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
}

/* ACTIONS ON FAR RIGHT */
.coapp-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* BUTTONS */
.view-btn {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  width: 90px;
}

.delete-btn {
  background-color: var(--delete-color);
  border-color: var(--delete-color);
  width: 90px;
}

.status-pill {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}
</style>