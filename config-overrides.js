const {
    override,
    addLessLoader,
    disableEsLint
} = require("customize-cra")

module.exports = override(
    addLessLoader(),
    disableEsLint()
)