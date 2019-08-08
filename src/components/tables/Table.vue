<template>
  <div>
    <div class="va-row">
      <div class="flex xs12 md12">
        <vuestic-widget :headerText="$t('tables.basic')">
          <div class="table-responsive">
            <table class="table table-striped first-td-padding">
              <thead>
              <tr>
                <td>{{'tables.headings.name' | translate}}</td>
                <td>{{'tables.headings.email' | translate}}</td>
                <td>{{'tables.headings.city' | translate}}</td>
                <td align="right">{{'tables.headings.score' | translate}}</td>
                <td></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Sergio Bouya</td>
                <td>dksergio10@yopmail.com</td>
                <td>Pará</td>
                <td align="right">24</td>
                <td></td>
              </tr>
              <tr>
                <td>Randolfo Q. Molowny</td>
                <td>cirandolfoq8@yopmail.com</td>
                <td>Pernambuco</td>
                <td align="right">35</td>
                <td></td>
              </tr>
              <tr>
                <td>Cayetano Navais</td>
                <td>imcayetano12@yopmail.com</td>
                <td>Minas Gerais</td>
                <td align="right">42</td>
                <td></td>
              </tr>
              <tr>
                <td>Billo M.</td>
                <td>dmgoodnight12@yopmail.com</td>
                <td>Isla del Príncipe Eduardo</td>
                <td align="right">45</td>
                <td></td>
              </tr>
              <tr>
                <td>Kelly Y.</td>
                <td>gyhillman24@yopmail.com</td>
                <td>Columbia Británica</td>
                <td align="right">46</td>
                <td></td>
              </tr>
              <tr>
                <td>Reynald I.</td>
                <td>airowan8@yopmail.com</td>
                <td>Alberta</td>
                <td align="right">29</td>
                <td></td>
              </tr>
              <tr>
                <td>Cyril F.</td>
                <td>ifcyril5@yopmail.com</td>
                <td>Nuevo Brunswick</td>
                <td align="right">31</td>
                <td></td>
              </tr>
              <tr>
                <td>Ian F.</td>
                <td>afvandiver5@yopmail.com</td>
                <td>Alberta</td>
                <td align="right">25</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget :headerText="$t('tables.styled')">
          <div class="table-responsive">
            <table class="table table-striped table-sm color-icon-label-table">
              <thead>
              <tr>
                <td></td>
                <td>{{'tables.headings.name' | translate}}</td>
                <td>{{'tables.headings.email' | translate}}</td>
                <td>{{'tables.headings.city' | translate}}</td>
                <td align="right">{{'tables.headings.score' | translate}}</td>
                <td align="middle"></td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td></td>
                <td>Sergio Bouya</td>
                <td>dksergio10@yopmail.com</td>
                <td>Pará</td>
                <td align="right">24</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Randolfo Q. Molowny</td>
                <td>cirandolfoq8@yopmail.com</td>
                <td>Pernambuco</td>
                <td align="right">35</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Cayetano Navais</td>
                <td>imcayetano12@yopmail.com</td>
                <td>Minas Gerais</td>
                <td align="right">42</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-danger">
                <td>
                  <span class="badge badge-pill badge-danger">DANGER</span>
                </td>
                <td>Billo M.</td>
                <td>dmgoodnight12@yopmail.com</td>
                <td>Isla del Príncipe Eduardo</td>
                <td align="right">45</td>
                <td align="middle">
                  <i
                    class="fa fa-exclamation-triangle icon-right input-icon error-icon"></i>
                </td>
              </tr>
              <tr class="table-success">
                <td>
                  <span class="badge badge-pill badge-primary">SUCCESS</span>
                </td>
                <td>Kelly Y.</td>
                <td>gyhillman24@yopmail.com</td>
                <td>Columbia Británica</td>
                <td align="right">46</td>
                <td align="middle" class="valid">
                  <i class="fa fa-check success-icon icon-right input-icon"></i>
                </td>
              </tr>
              <tr class="table-warning">
                <td>
                  <span class="badge badge-pill badge-warning">WARNING</span>
                </td>
                <td>Reynald I.</td>
                <td>airowan8@yopmail.com</td>
                <td>Alberta</td>
                <td align="right">29</td>
                <td align="middle"></td>
              </tr>
              <tr>
                <td></td>
                <td>Cyril F.</td>
                <td>ifcyril5@yopmail.com</td>
                <td>Nuevo Brunswick</td>
                <td align="right">31</td>
                <td align="middle"></td>
              </tr>
              <tr class="table-info">
                <td>
                  <span class="badge badge-pill badge-info">INFO</span>
                </td>
                <td>Ian F.</td>
                <td>afvandiver5@yopmail.com</td>
                <td>Alberta</td>
                <td align="right">25</td>
                <td align="middle"></td>
              </tr>
              </tbody>
            </table>
          </div>
        </vuestic-widget>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md12 xs12">
        <vuestic-widget :headerText="$t('tables.advanced')">
          <vuestic-data-table
            :apiUrl="apiUrl"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :defaultPerPage="defaultTablePerPage"
            :sortFunctions="sortFunctions"
            :apiMode="apiMode"
            :paginationPath="paginationPath"
            :queryParams="queryParams"
          >
            <spring-spinner
              slot="loading"
              :animation-duration="2500"
              :size="70"
              color="#4ae387"
            />
          </vuestic-data-table>
        </vuestic-widget>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import BadgeColumn from './BadgeColumn.vue'
import FieldsDef
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/fields-definition'
import ItemsPerPageDef
  from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/items-per-page-definition'
import QueryParams from '../../vuestic-theme/vuestic-components/vuestic-datatable/data/query-params'
import { SpringSpinner } from 'epic-spinners'

Vue.component('badge-column', BadgeColumn)

export default {
  name: 'Table',
  components: {
    SpringSpinner,
  },
  data () {
    return {
      apiUrl: 'https://vuetable.ratiw.net/api/users',
      apiMode: true,
      tableFields: FieldsDef.tableFields,
      itemsPerPage: ItemsPerPageDef.itemsPerPage,
      sortFunctions: FieldsDef.sortFunctions,
      paginationPath: '',
      defaultTablePerPage: 6,
      queryParams: QueryParams,
    }
  },
}
</script>

<style lang="scss">

.color-icon-label-table {
  td:first-child {
    width: 1rem;
  }
}
</style>
