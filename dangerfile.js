import { danger, markdown } from 'danger'
import _ from 'lodash'
import fs from 'fs'

checkLinterErrors()
checkSkippedTests()

function checkSkippedTests() {
  const modifiedSpecFiles =  danger.git.modified_files.filter(filePath => filePath.match(/.test.(js|jsx)$/gi))

  const testFilesIncludeExclusion = modifiedSpecFiles.reduce((acc, value) => {
    const content = fs.readFileSync(value).toString()
    const invalid = _.includes(content, 'it.only') || _.includes(content, 'describe.only') || _.includes(content, 'fdescribe') || _.includes(content, 'fit(')
    if (invalid) { acc.push(value) }
    return acc
  }, [])

  if (testFilesIncludeExclusion.length > 0) {
    fail(`skipped test was left in tests (${testFilesIncludeExclusion})`)
  }
}

function checkLinterErrors() {
  const linterOutput = fs.readFileSync('prepush.log').toString()
  const thereWarningOrErrors = _.includes(linterOutput, 'error') || _.includes(linterOutput, 'warning')

  if (thereWarningOrErrors) {
    markdown('O linter está reclamando sobre: ')

    _.each(linterOutput.split('\n'), (line) => {
      if (!_.startsWith(line, '>')) {
        markdown(line)
      }
    })
  }
}
