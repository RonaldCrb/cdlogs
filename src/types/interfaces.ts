import { Document } from 'mongoose'

export interface ISmartlog {
  date: string
  diver: string
  location: string
  vessel: string
  sea_state: string
  bottom_temperature: string
  bottom_visibility: string
  bottom_current: string
  depth: number
  leave_surface: string
  leave_bottom: string
  bottom_time: number
  decompression_completed_at: string
  breathing_gas: string
  work_description: string
  penetration_diving: string
  diving_contractor: string
  diving_supervisor: string
}

export interface ISmartlogModel extends Document {
  date: string
  diver: string
  location: string
  vessel: string
  sea_state: string
  bottom_temperature: string
  bottom_visibility: string
  bottom_current: string
  depth: number
  leave_surface: string
  leave_bottom: string
  bottom_time: number
  decompression_completed_at: string
  breathing_gas: string
  work_description: string
  penetration_diving: string
  diving_contractor: string
  diving_supervisor: string
}