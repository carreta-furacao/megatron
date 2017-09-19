import { danger, markdown } from 'danger'
import _ from 'lodash'
import fs from 'fs'

const prepushLog = 'prepush.log'
const linterOutput = fs.readFileSync(prepushLog).toString()

if (_.contains(linterOutput, 'Failed')) {
  markdown(`These changes failed to pass the linter:
${linterOutput}
  `)
}