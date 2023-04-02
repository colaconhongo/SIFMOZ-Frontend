// import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VuexORM from '@vuex-orm/core'
// import datePlugin from 'vuex-orm-plugin-date-attribute'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import Country from './models/country/Country'
import Province from './models/province/Province'
import District from './models/district/District'
import City from './models/city/City'
import Appointment from './models/appointment/Appointment'
import AttributeType from './models/attributeType/AttributeType'
import Clinic from './models/clinic/Clinic'
import ClinicSector from './models/clinicSector/ClinicSector'
import Drug from './models/drug/Drug'
import Episode from './models/episode/Episode'
import EpisodeType from './models/episodeType/EpisodeType'
import FacilityType from './models/facilityType/FacilityType'
import Group from './models/group/Group'
import GroupMember from './models/groupMember/GroupMember'
import GroupType from './models/groupType/GroupType'
import IdentifierType from './models/identifierType/IdentifierType'
import NationalClinic from './models/nationalClinic/NationalClinic'
import Patient from './models/patient/Patient'
import PatientAttribute from './models/patientAttribute/PatientAttribute'
import PatientServiceIdentifier from './models/patientServiceIdentifier/PatientServiceIdentifier'
import ClinicalService from './models/ClinicalService/ClinicalService'
import StartStopReason from './models/startStopReason/StartStopReason'
import TherapeuticRegimen from './models/therapeuticRegimen/TherapeuticRegimen'
import Stock from './models/stock/Stock'
import { StockAdjustment, InventoryStockAdjustment, StockDestructionAdjustment, StockReferenceAdjustment } from './models/stockadjustment/StockAdjustmentHierarchy'
import StockCenter from './models/stockcenter/StockCenter'
import DestroyedStock from './models/stockdestruction/DestroyedStock'
import StockEntrance from './models/stockentrance/StockEntrance'
import Inventory from './models/stockinventory/Inventory'
import StockLevel from './models/stocklevel/StockLevel'
import StockOperationType from './models/stockoperation/StockOperationType'
import ReferedStockMoviment from './models/stockrefered/ReferedStockMoviment'
import AdherenceScreening from './models/screening/AdherenceScreening'
import PregnancyScreening from './models/screening/PregnancyScreening'
import RAMScreening from './models/screening/RAMScreening'
import VitalSignsScreening from './models/screening/VitalSignsScreening'
import TBScreening from './models/screening/TBScreening'
import Localidade from './models/Localidade/Localidade'
import PostoAdministrativo from './models/PostoAdministrativo/PostoAdministrativo'
import ClinicalServiceAttributeType from './models/ClinicalServiceAttributeType/ClinicalServiceAttributeType'
import ClinicalServiceAttribute from './models/ClinicalServiceAttribute/ClinicalServiceAttribute'
import PatientVisitDetails from './models/patientVisitDetails/PatientVisitDetails'
import Doctor from './models/doctor/Doctor'
import Form from './models/form/Form'
import TherapeuticLine from './models/therapeuticLine/TherapeuticLine'
import DispenseType from './models/dispenseType/DispenseType'
import Duration from './models/Duration/Duration'
import TherapeuticRegimensDrug from './models/TherapeuticRegimensDrug/TherapeuticRegimensDrug'
import PatientVisit from './models/patientVisit/PatientVisit'
import Pack from './models/packaging/Pack'
import PackagedDrug from './models/packagedDrug/PackagedDrug'
import Prescription from './models/prescription/Prescription'
import PrescriptionDetail from './models/prescriptionDetails/PrescriptionDetail'
import PrescribedDrug from './models/prescriptionDrug/PrescribedDrug'
import HealthInformationSystem from './models/healthInformationSystem/HealthInformationSystem'
import InteroperbilityAttribute from './models/interoperabilityAttribute/InteroperabilityAttribute'
import InteroperabilityType from './models/interoperabilityType/InteroperabilityType'
import ClinicalServiceSector from './models/ClinicalServiceClinicSector/ClinicalServiceSector'
import DispenseMode from './models/dispenseMode/DispenseMode'
import PackagedDrugStock from './models/packagedDrug/PackagedDrugStock'
import GroupPackHeader from './models/group/GroupPackHeader'
import GroupPack from './models/group/GroupPack'
import Report from './models/report/Report'
import PatientTransReferenceType from './models/tansreference/PatientTransReferenceType'
import PatientTransReference from './models/tansreference/PatientTransReference'
import ClinicSectorType from './models/clinicSectorType/ClinicSectorType'
import SpetialPrescriptionMotive from './models/prescription/SpetialPrescriptionMotive'
import MigrationStage from './models/Migration/MigrationStage'
import ProvincialServer from './models/provincialServer/ProvincialServer'
import SystemConfigs from './models/systemConfigs/SystemConfigs'
import UserLogin from './models/userLogin/User'
import Role from './models/userLogin/Role'
import Menu from './models/userLogin/Menu'
import RoleMenu from './models/userLogin/RoleMenu'
import UserRole from './models/userLogin/UserRole'
import UserClinic from './models/userLogin/UserClinic'
import UserClinicSector from './models/userLogin/UserClinicSector'
import SecUserRole from './models/userLogin/SecUserRole'
import GroupMemberPrescription from './models/group/GroupMemberPrescription'
import DrugStockFileEvent from './models/drugStockFileEvent/DrugStockFileEvent'
import DrugFile from './models/drugFile/DrugFile'
import StockAlert from './models/stockAlert/StockAlert'
import AuditSyncronization from './models/auditSyncronization/AuditSyncronization'
import NonSqlDatabaseUtils from 'src/utils/NonSqlDatabaseUtils'

// Vue.use(Vuex)
// import { NanoSQL } from '@nano-sql/core';
// import { VuexORMAdapter } from '@nano-sql/adapter-vuex';

VuexORM.use(VuexORMAxios, {
  axios,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
     baseURL: 'http://172.104.236.126:5110/api'
 //  baseURL: 'http://10.10.12.78:8884/api'
      // baseURL: 'http://idartzambezia.fgh.org.mz:3000/api'
    //  baseURL: 'http://192.168.100.1:3000/api'
   // baseURL: 'http://192.168.100.51:3000/api'
   //  baseURL: 'http://10.0.1.56:3000/api'
 //  baseURL: 'http://192.168.18.9:8884/api'
  //  baseURL: 'http://localhost:8884/api'
})
let numTries = 0
// Request interceptor for API calls
axios.interceptors.request.use(
  async config => {
    config.headers = {
      Accept: 'application/json'
    }
    if (config.url === '/province' || config.url === '/district' || config.url.includes('/clinic/district') ||
     config.url === '/systemConfigs' || config.url === '/menu' || config.url.includes('/clinic/uuid')) {
      delete config.headers.Authorization
    } else if (localStorage.getItem('id_token') != null) {
      config.headers['X-Auth-Token'] = [
        '', localStorage.getItem('id_token')
      ].join(' ')
    } else {
       console.log('>>VFF2 ' + JSON.parse(localStorage.getItem('id_token')) + '------------' + JSON.stringify(localStorage))
        delete config.headers.Authorization // ["Authorization"]
    }
    return config
  },
  error => {
    Promise.reject(error)
  })

  // Response interceptor for API calls
   axios.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config
    // const rToken = localStorage.getItem('id_token')
     const rToken = localStorage.getItem('refresh_token')
  if (rToken != null && rToken.length > 10) {
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
          originalRequest._retry = true
      console.log('http://localhost:8884/api/oauth/access_token?grant_type=refresh_token&refresh_token=' + rToken)
      numTries++
      if (numTries > 5) {
        localStorage.removeItem('authUser')
        localStorage.removeItem('user')
        localStorage.removeItem('username')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('password')
        window.location.reload()
      }
      return axios.post('http://localhost:8884/api/oauth/access_token?grant_type=refresh_token&refresh_token=' + rToken)
        .then(({ data }) => {
          console.log('==got the following token back: ' + data.access_token + '___________________________________________')
          localStorage.setItem('id_token', data.access_token)
          localStorage.setItem('refresh_token', data.access_token)
        //  axios.defaults.headers.common['X-Auth-Token'] = data.access_token
        originalRequest.headers['X-Auth-Token'] = [
          '', localStorage.getItem('id_token')
        ].join(' ')
      return axios(originalRequest)
        })
    }
  }
    return Promise.reject(error)
  })
// VuexORM.use(datePlugin)

const entities = () => {
  const entitiesList = []
  entitiesList.push(Country)
  entitiesList.push(Province)
  entitiesList.push(District)
  entitiesList.push(City)
  entitiesList.push(Appointment)
  entitiesList.push(AttributeType)
  entitiesList.push(Clinic)
  entitiesList.push(ClinicSector)
  entitiesList.push(Drug)
  entitiesList.push(Episode)
  entitiesList.push(EpisodeType)
  entitiesList.push(FacilityType)
  entitiesList.push(Group)
  entitiesList.push(GroupMember)
  entitiesList.push(GroupType)
  entitiesList.push(IdentifierType)
  entitiesList.push(NationalClinic)
  entitiesList.push(Patient)
  entitiesList.push(PatientAttribute)
  entitiesList.push(PatientServiceIdentifier)
  entitiesList.push(ClinicalService)
  entitiesList.push(StartStopReason)
  entitiesList.push(TherapeuticRegimen)
  entitiesList.push(Stock)
  entitiesList.push(StockAdjustment)
  entitiesList.push(InventoryStockAdjustment)
  entitiesList.push(StockDestructionAdjustment)
  entitiesList.push(StockReferenceAdjustment)
  entitiesList.push(StockCenter)
  entitiesList.push(DestroyedStock)
  entitiesList.push(StockEntrance)
  entitiesList.push(Inventory)
  entitiesList.push(StockLevel)
  entitiesList.push(StockOperationType)
  entitiesList.push(ReferedStockMoviment)
  entitiesList.push(AdherenceScreening)
  entitiesList.push(PregnancyScreening)
  entitiesList.push(RAMScreening)
  entitiesList.push(VitalSignsScreening)
  entitiesList.push(TBScreening)
  entitiesList.push(Localidade)
  entitiesList.push(PostoAdministrativo)
  entitiesList.push(ClinicalServiceAttributeType)
  entitiesList.push(ClinicalServiceAttribute)
  entitiesList.push(PatientVisitDetails)
  entitiesList.push(Doctor)
  entitiesList.push(Form)
  entitiesList.push(TherapeuticLine)
  entitiesList.push(DispenseType)
  entitiesList.push(DispenseMode)
  entitiesList.push(Duration)
  entitiesList.push(TherapeuticRegimensDrug)
  entitiesList.push(PatientVisit)
  entitiesList.push(Pack)
  entitiesList.push(PackagedDrug)
  entitiesList.push(Prescription)
  entitiesList.push(PrescriptionDetail)
  entitiesList.push(PrescribedDrug)
  entitiesList.push(HealthInformationSystem)
  entitiesList.push(InteroperbilityAttribute)
  entitiesList.push(InteroperabilityType)
  entitiesList.push(ClinicalServiceSector)
  entitiesList.push(PackagedDrugStock)
  entitiesList.push(GroupPackHeader)
  entitiesList.push(GroupPack)
  entitiesList.push(Report)
  entitiesList.push(PatientTransReferenceType)
  entitiesList.push(PatientTransReference)
  entitiesList.push(ClinicSectorType)
  entitiesList.push(SpetialPrescriptionMotive)
  entitiesList.push(MigrationStage)
  entitiesList.push(ProvincialServer)
  entitiesList.push(SystemConfigs)
  entitiesList.push(UserLogin)
  entitiesList.push(Role)
  entitiesList.push(Menu)
  entitiesList.push(RoleMenu)
  entitiesList.push(UserRole)
  entitiesList.push(UserClinic)
  entitiesList.push(UserClinicSector)
  entitiesList.push(SecUserRole)
  entitiesList.push(GroupMemberPrescription)
  entitiesList.push(DrugStockFileEvent)
  entitiesList.push(DrugFile)
  entitiesList.push(StockAlert)
  entitiesList.push(AuditSyncronization)
  return entitiesList
}

const database = new VuexORM.Database()
const entityList = entities()
for (let i = 0; i < entityList.length; i++) {
  database.register(entityList[i])
}

NonSqlDatabaseUtils.initDatabase(entityList)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

/*
VuexORM.use(VuexORMCordova, {
  database,

  /**
  localforage: {
    name: 'vuex' // Name is required
  },
  actions: {
    $get: '$get',
    $fetch: '$fetch',
    $create: '$create',
    $update: '$update',
    $replace: '$replace',
    $delete: '$delete',
    $deleteAll: '$deleteAll',
    $getName: '$getName'
  }
})
*/
 // VuexORM.use(NanoSQLAdapter)
 // sdatabase.register(NanoSQLAdapter.entity, NanoSQLAdapter.database())
/*
 const databaseName = 'my_database';
 const nSQL = new NanoSQL(databaseName);
 const adapter = new VuexORMAdapter(nSQL);
 VuexORM.use(adapter);

VuexORM.use(adapter)

*/
