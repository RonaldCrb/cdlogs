import { Schema, model } from 'mongoose'
import { ISmartlogModel } from '../types/interfaces'

const SmartlogSchema = new Schema({
  // Project context
  diver_name: { type: String },
  standby_diver: { type: String },
  diving_supervisor: { type: String },
  diving_contractor: { type: String },
  vessel: { type: String },
  location: { type: String },
  client: { type: String },
  date: { type: String },
  
  // Dive Profile Details
  dive_method: { type: String },
  breathing_gas: { type: String },
  leave_surface: { type: String },
  leave_bottom: { type: String },
  bottom_time: { type: Number },
  depth: { type: Number },
  decompression_completed_at: { type: String },
  post_dive_assesment: { type: String },
  
  // Equipment Assurance
  diver_bailout_pressure: { type: Number },
  standby_diver_bailout_pressure: { type: Number },
  dive_system_id: { type: String },
  work_description: { type: String },
  penetration_diving: { type: String },
  
  // Weather Considerations
  sea_state: { type: String },
  bottom_temperature: { type: String },
  bottom_visibility: { type: String },
  bottom_current: { type: String },
})

export default model<ISmartlogModel>('Smartlog', SmartlogSchema)