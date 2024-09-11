export const convertToNPT = (timestamp: number) => {
  const dateUTC = new Date(timestamp * 1000) // convert to millisecond
  // Nepal time offset is UTC +5:45 (5 hours and 45 minutes)
  const nepalOffset = 5 * 60 + 45 // Offset in minutes

  // Convert UTC time to local time in NPT by adding the offset
  const nptTime = new Date(dateUTC.getTime() + nepalOffset * 60000)

  // Format time as a readable string
  return nptTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kathmandu'
  })
}

export const getTimeInNPT = (timestamp: number) => {
  const dateUTC = new Date(timestamp * 1000) // convert to millisecond
  // Nepal time offset is UTC +5:45 (5 hours and 45 minutes)
  const nepalOffset = 5 * 60 + 45 // Offset in minutes

  // Convert UTC time to local time in NPT by adding the offset
  const nptTime = new Date(dateUTC.getTime() + nepalOffset * 60000)

  // Format time as a readable string
  return nptTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Kathmandu'
  })
}
