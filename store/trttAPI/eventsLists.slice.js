import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_appointment_service_appointment_single_retrieve = createAsyncThunk(
  "eventsLists/modules_appointment_service_appointment_single_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_service_appointment_single_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_appointment_service_appointment_create_create = createAsyncThunk(
  "eventsLists/modules_appointment_service_appointment_create_create",
  async payload => {
    const response = await apiService.modules_appointment_service_appointment_create_create(
      payload
    )
    return response.data
  }
)
export const modules_appointment_service_appointment_list_retrieve = createAsyncThunk(
  "eventsLists/modules_appointment_service_appointment_list_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_service_appointment_list_retrieve(
      payload
    )
    return response.data
  }
)
export const modules_appointment_service_appointment_synced_list_retrieve = createAsyncThunk(
  "eventsLists/modules_appointment_service_appointment_synced_list_retrieve",
  async payload => {
    const response = await apiService.modules_appointment_service_appointment_synced_list_retrieve(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const eventsListsSlice = createSlice({
  name: "eventsLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_appointment_service_appointment_single_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_single_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_single_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_create_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_create_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_create_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_list_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_list_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_list_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_synced_list_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_synced_list_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_synced_list_retrieve.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_appointment_service_appointment_single_retrieve,
  modules_appointment_service_appointment_create_create,
  modules_appointment_service_appointment_list_retrieve,
  modules_appointment_service_appointment_synced_list_retrieve,
  slice: eventsListsSlice
}
