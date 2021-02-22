const Climb = require('../models/Climb')

const boulderGrades = [
  'V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17'
]

const sportGrades = [
  '5.0', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10-', '5.10', '5.10+', '5.11-', '5.11', '5.11+', '5.12-', '5.12', '5.12+', '5.13-', '5.13', '5.13+',
  '5.14-', '5.14', '5.14+', '5.15-', '5.15', '5.15+'
]

const climbGrades = {
  boulder: boulderGrades,
  sport: sportGrades
}

module.exports = {
  create,
  getOne,
  update,
  delete: deleteOne,
  search
}

function create(req, res) {
  Climb.create(req.body)
    .then((climb) => res.json(climb))
}

function getOne(req, res) {
  Climb.findById(req.params.id)
    .then((climb) => {
      if (climb) return res.json(climb)
      return res.json({ msg: 'Route does not exist!' })
    })
}

function update(req, res) {
  Climb.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((climb) => {
      res.json(climb)
    })
}

function deleteOne(req, res) {
  console.log(req.params.id)
  Climb.findByIdAndDelete(req.params.id)
    .then((climb) => {
      if (climb) res.json({ msg: 'Climb deleted succesfully' })
    })
}

function search(req, res) {
  const filters = Object.assign({}, req.body)

  Climb.find({})
    .then((climbs) => {
      let filteredClimbs = climbs.slice()
      if (filters['name']) {
        const filterNames = separateString(filters.name.toLowerCase())
        
        filteredClimbs = filteredClimbs.filter(climb => {
          const climbNames = separateString(climb.name.toLowerCase())
          let isMatch = false

          filterNames.forEach(filterName => {
            if(climbNames.includes(filterName)) {
              isMatch = true
            }
          })

          if(isMatch) return climb
        })
      }

      if (filters['type']) {
        filteredClimbs = filteredClimbs.filter((climb) => climb.type === filters.type)
      }

      if (filters['gradeMin'] && filters['gradeMax']) {
        if (filters['type'] === 'Boulder') {
          filteredClimbs = filteredClimbs.filter((climb) => climbGrades.boulder.indexOf(climb.grade) >= climbGrades.boulder.indexOf(filters.gradeMin) && climbGrades.boulder.indexOf(climb.grade) <= climbGrades.boulder.indexOf(filters.gradeMax))
        } else if (filters['type'] === 'Sport') {
          filteredClimbs = filteredClimbs.filter((climb) => climbGrades.sport.indexOf(climb.grade) >= climbGrades.sport.indexOf(filters.gradeMin) && climbGrades.sport.indexOf(climb.grade) <= climbGrades.sport.indexOf(filters.gradeMax))
        }
      }

      if (filters['location']) {
        filteredClimbs = filteredClimbs.filter((climb) => climb.location.toLowerCase() === filters.location.toLowerCase())
      }

      res.json(filteredClimbs)
    })
}

function separateString(str) {
  let strArray = []

  if(str.includes(' ')) {
    strArray = str.split(' ')
  } else {
    strArray.push(str)
  }

  const triggerChars = [',', '-']
  triggerChars.forEach(triggerChar => {
    if(str.includes(triggerChar)) {
      for(let word in strArray) {
        if(strArray[word].includes(triggerChar)) {
          for(let char in strArray[word]) {
            if(strArray[word][char] === triggerChar) {
              const otherWord = strArray[word].slice(parseInt(char) + 1, strArray[word].length)
              if(otherWord !== '') strArray.push(strArray[word].slice(parseInt(char) + 1, strArray[word].length))
  
              strArray[word] = strArray[word].slice(0, char)
            }
          }
        }
      }
    }
  })

  return strArray
}