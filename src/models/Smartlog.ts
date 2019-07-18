import { Schema, model } from 'mongoose'

const SmartlogSchema = new Schema({
  date: { type: Date },
  name: { type: String },
  location: { type: String },
  vessel: { type: String },
  bottom_condition: { type: String },
  sea_state: { type: String },
  bottom_temperature: { type: String },
  bottom_visibility: { type: String },
  bottom_current: { type: String },
  diving_method: { type: String },
  depth: { type: Number },
  leave_surface: { type: Date },
  leave_bottom: { type: Date },
  bottom_time: { type: Number },
  decompression_completed_at: { type: Date },
  dive_system: { type: String },
  breathing_gas: { type: String },
  work_description: { type: String },
  equipment_testing_record: { type: String },
  decompression_schedule: { type: String },
  decompression_sickness: { type: String },
  penetration_diving: { type: String },
  diving_contractor: { type: String },
  diving_supervisor: { type: String },
  signature_date: { type: Date },
})

export default model('Smartlog', SmartlogSchema)