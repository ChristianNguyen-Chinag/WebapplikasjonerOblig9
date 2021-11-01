const trivias = [
  {
    title: 'Fun Elephant Fact!',
    text: 'Elephant spends almost three-quarters of their day eating!',
  },
  {
    title: 'Another Fun Elephant Fact!',
    text: 'Botswana has more elephants than any other country!',
  },
  {
    title: 'Yet Another Fun Elephant Fact!',
    text:
      'Elephants can communicate through vibrations by detecting it with their bones!',
  },
  {
    title: 'Whoa, A Fun Elephant Fact!',
    text: 'Their famous tusks are actually their teeth!',
  },
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    trivias.push(data)

    res.status(201).json({ success: true, data: trivias })
  } else if (req.method === 'PUT') {
    res.status(405).end()
  } else {
    res.status(200).json({ success: true, data: trivias })
  }
}
