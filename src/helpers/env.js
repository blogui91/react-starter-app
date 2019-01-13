export default function env (value, fallback) {
  return process.env[value] || process.env[`REACT_APP_${value}`] || fallback
}
