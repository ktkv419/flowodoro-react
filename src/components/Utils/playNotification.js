const playNotification = async () => {
  try {
    const audio = new Audio('/src/assets/wood.mp3')
    await audio.play()
  } catch (err) {
    //
  }
}

export default playNotification
