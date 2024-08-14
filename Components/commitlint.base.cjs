const defaultTypes = {
  feat: {
    description: "A new feature",
    title: "Features",
  },
  fix: {
    description: "A bug fix",
    title: "Bug Fixes",
  },
  docs: {
    description: "Documentation only changes",
    title: "Documentation",
  },
  refactor: {
    description: "A code change that neither fixes a bug nor adds a feature",
    title: "Code Refactoring",
  },
  perf: {
    description: "Improvements that will make your code perform better",
    title: "Performance",
  },
  test: {
    description: "Adding missing tests or correcting existing tests",
    title: "Tests",
  },
  build: {
    description:
      "Changes that affect the build system or external dependencies (npm, webpack, typescript)",
    title: "Builds",
  },
  ci: {
    description:
      "Changes to our CI configuration files and scripts (NOTE: Does not bump the version)",
    title: "Continuous Integrations",
  },
  chore: {
    description: "Other changes that don't modify src or test files",
    title: "Chores",
  },
  revert: {
    description: "Reverts a previous commit",
    title: "Reverts",
  },
  i18n: {
    description: "Update language resource",
    title: "i18n",
  },
  vendor: {
    description: "Update dependencies",
    title: "Vendor",
  },
};

module.exports = {
  types: defaultTypes,
  scopes: ["Mobile", "API", "Build", "CI"].map((scope) => scope.toLowerCase()),
};
