const configBase = require("./commitlint.base.cjs");

// eslint-disable-next-line no-undef
const isRunningInCI = !!process.env.GITLAB_CI;
const level = isRunningInCI ? 1 : 2;

module.exports = {
  rules: {
    "type-enum": [level, "always", Object.keys(configBase.types)],
    "type-case": [level, "always", "lower-case"],
    "type-empty": [level, "never"],
    "scope-enum": [level, "always", configBase.scopes],
    "scope-empty": [level, "never"],
    "subject-empty": [level, "never"],
    "jira-empty": [level, "never"],
  },
  plugins: [
    {
      rules: {
        "jira-empty": ({ subject }) => {
          const jira_matcher = /QOOEO-\d+/;
          jira_matcher.test(subject);
          const passed = jira_matcher.test(subject);
          const errorMsg = "You must provide refer";
          return [passed, errorMsg];
        },
      },
    },
  ],
  messages: {
    skip: ":skip",
    max: "upper %d chars",
    min: "%d chars at least",
    emptyWarning: "can not be empty",
    upperLimitWarning: "over limit",
    lowerLimitWarning: "below limit",
  },
  helpUrl: "",
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ",",
    },
    questions: {
      type: {
        description: "type",
        enum: configBase.types,
      },
      scope: {
        description: "scope",
        enum: configBase.scopes,
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
      body: {
        description: "Provide a longer description of the change",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      breaking: {
        description: "Describe the breaking changes",
      },
      jira: {
        description: "Add reference",
      },
    },
  },
};
