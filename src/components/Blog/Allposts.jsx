import React from 'react'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    
  },
]

const Allposts= () => 

<Card.Group items={items} />

export default Allposts