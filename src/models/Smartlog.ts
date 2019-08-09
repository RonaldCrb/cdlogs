import { Schema, model } from 'mongoose'
import { ISmartlogModel } from '../types/interfaces'

const SmartlogSchema = new Schema({
  date: { type: String },
  diver: { type: String },
  location: { type: String },
  vessel: { type: String },
  sea_state: { type: String },
  bottom_temperature: { type: String },
  bottom_visibility: { type: String },
  bottom_current: { type: String },
  depth: { type: Number },
  leave_surface: { type: String },
  leave_bottom: { type: String },
  bottom_time: { type: Number },
  decompression_completed_at: { type: String },
  breathing_gas: { type: String },
  work_description: { type: String },
  penetration_diving: { type: String },
  diving_contractor: { type: String },
  diving_supervisor: { type: String },
})

export default model<ISmartlogModel>('Smartlog', SmartlogSchema)