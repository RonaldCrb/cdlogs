import { Schema, model } from 'mongoose'

const SmartlogSchema = new Schema({
  diver_name: { type: String }
  standby_diver: { type: String }
  diving_supervisor: { type: String }
  diving_contractor: { type: String }
  diver_bailout_pressure: { type: Number }
  standby_diver_bailout_pressure: { type: Number }
  breathing_gas: { type: String }
  dive_system_id: { type: String }
  sea_state: { type: String }
  bottom_temperature: { type: String }
  bottom_visibility: { type: String }
  bottom_current: { type: String }
  leave_surface: { type: String }
  leave_bottom: { type: String }
  bottom_time: { type: Number }
  depth: { type: Number }
  work_description: { type: String }
  penetration_diving: { type: String }
  post_dive_assesment: { type: String }
  dive_method: { type: String }
  decompression_completed_at: { type: String }
  location: { type: String }
  vessel: { type: String }
  client: { type: String }
})

export default model('Smartlog', SmartlogSchema)