import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_appointment_service_appointment_sync_create = createAsyncThunk(
  "meetings/modules_appointment_service_appointment_sync_create",
  async payload => {
    const response = await apiService.modules_appointment_service_appointment_sync_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_appointment_service_appointment_sync_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_sync_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_appointment_service_appointment_sync_create.rejected,
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
  modules_appointment_service_appointment_sync_create,
  slice: meetingsSlice
}
