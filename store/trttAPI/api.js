import axios from "axios"
const trttAPI = axios.create({
  baseURL: "https://trtt-46995.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return trttAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return trttAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return trttAPI.post(`/api/v1/signup/`, payload)
}
function modules_appointment_service_appointment_remove_destroy(payload) {
  return trttAPI.delete(
    `/modules/appointment/service/${payload.id}/appointment/remove/`
  )
}
function modules_appointment_service_appointment_single_retrieve(payload) {
  return trttAPI.get(
    `/modules/appointment/service/${payload.id}/appointment/single/`
  )
}
function modules_appointment_service_appointment_create_create(payload) {
  return trttAPI.post(
    `/modules/appointment/service/appointment/create/`,
    payload
  )
}
function modules_appointment_service_appointment_list_retrieve(payload) {
  return trttAPI.get(`/modules/appointment/service/appointment/list/`)
}
function modules_appointment_service_appointment_sync_create(payload) {
  return trttAPI.post(`/modules/appointment/service/appointment/sync/`, payload)
}
function modules_appointment_service_appointment_synced_list_retrieve(payload) {
  return trttAPI.get(`/modules/appointment/service/appointment/synced/list/`)
}
function rest_auth_login_create(payload) {
  return trttAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return trttAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return trttAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return trttAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return trttAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return trttAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return trttAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return trttAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return trttAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return trttAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return trttAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_appointment_service_appointment_remove_destroy,
  modules_appointment_service_appointment_single_retrieve,
  modules_appointment_service_appointment_create_create,
  modules_appointment_service_appointment_list_retrieve,
  modules_appointment_service_appointment_sync_create,
  modules_appointment_service_appointment_synced_list_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
