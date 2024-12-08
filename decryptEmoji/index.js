const emojis = [
  {
    emoji: '🍔',
    string: 'burger',
  },
  {
    emoji: '🍟',
    string: 'fries',
  },
  {
    emoji: '🍕',
    string: 'pizza',
  },
  {
    emoji: '✈️',
    string: 'airplane',
  },
  {
    emoji: '🛳',
    string: 'cruise ship',
  },
  {
    emoji: '🗺',
    string: 'map',
  },
  {
    emoji: '😄',
    string: 'happy',
  },
  {
    emoji: '🥹',
    string: 'sad',
  },
  {
    emoji: '🤔',
    string: 'thinking',
  },
  {
    emoji: '🐝',
    string: 'bee',
  },
  {
    emoji: '🤖',
    string: 'think',
  },
  {
    emoji: '🎊',
    string: 'celebration',
  },
  {
    emoji: '🥷🏼',
    string: 'secret',
  },
  {
    emoji: '🥷🏼!',
    string: 'keep it secret!',
  },
  {
    emoji: '☄️',
    string: 'blast off',
  },
  {
    emoji: '🧑‍🍳🍴',
    string: 'chef cooks a dish',
  },
  {
    emoji: '🚵‍♀️🎊',
    string: 'win a race',
  },
]

function decryptEmoji(paragraph) {
  const splitParagraph = paragraph.split(' ')

  splitParagraph.forEach((text, index) => {
    const selectedEmoji = emojis.find((row) => row.emoji === text)
    if (selectedEmoji) {
      splitParagraph[index] = selectedEmoji.string
    }
  })

  return splitParagraph.join(' ')
}

console.log(
  decryptEmoji(
    "I'm feeling 🤔 about the upcoming ✈️ trip. Will we see 🗺 landmarks?"
  )
)

console.log(
  decryptEmoji('🥷🏼! 🎊 for the 🥷🏼 birthday surprise! ☄️ to the party place!')
)
