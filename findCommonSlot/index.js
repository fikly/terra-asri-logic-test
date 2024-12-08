function find_common_slot(meetings) {
  if (!meetings.length) return 'No common slot available'

  const availableTimes = Array(24).fill(0)

  meetings.forEach((slots) => {
    ;(Array.isArray(slots[0]) ? slots : [slots]).forEach(([start, end]) => {
      if (start === undefined || end === undefined) {
        throw new Error('Start time and End time should exist in the time slot')
      }
      for (let time = start; time <= end; time++) {
        availableTimes[time]++
      }
    })
  })

  const commonSlots = availableTimes
    .map((count, time) => (count === meetings.length ? time : null))
    .filter((time) => time !== null)

  if (commonSlots.length < 2) return 'No common slot available'

  return [commonSlots[0], commonSlots[1]]
}

console.log(
  find_common_slot([
    [
      [9, 12],
      [14, 16],
    ],
    [
      [10, 12],
      [15, 17],
    ],
    [
      [11, 13],
      [16, 18],
    ],
  ])
)

console.log(
  find_common_slot([
    [8, 10],
    [12, 14],
    [9, 11],
  ])
)
