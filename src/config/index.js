import api from './api'
import auth from './auth'
import { findValue } from '../utils'

export default function(value = '', fallback = null) {
  const values = {
    api,
    auth
  }
  return findValue(value, values) || fallback
}
