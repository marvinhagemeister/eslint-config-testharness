const rule = require("../rules/assertions");
const RuleTester = require('eslint').RuleTester;

const runner = new RuleTester();

function getErrorObj(assertion) {
  return {
    message: `Wrong argument count: ${assertion}(${rule._messages[assertion][2]})`,
    type: "ExpressionStatement"
  }
}

[
  'assert_unreached'
].forEach(item => {
  runner.run(item, rule, {
    valid: [
      item + '(true)',
    ],
    invalid: [
      {
        code: item + '()',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true, true)',
        errors: [getErrorObj(item)]
      }
    ]
  });
});

[
  'assert_true',
  'assert_false',
].forEach(item => {
  runner.run(item, rule, {
    valid: [
      item + '(true)',
      item + '(true, "whatever")'
    ],
    invalid: [
      {
        code: item + '(true, true, true)',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true, true, true, true)',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '()',
        errors: [getErrorObj(item)]
      }
    ]
  });
});

[
  'assert_equals',
  'assert_not_equals',
  'assert_in_array',
  'assert_array_equals',
  'assert_less_than',
  'assert_greater_than',
  'assert_less_than_equal',
  'assert_greater_than_equal',
  'assert_regexp_match',
  'assert_class_string',
  'assert_own_property',
  'assert_own_inherits',
  'assert_idl_attribute',
  'assert_readonly',
  'assert_throws',
].forEach(item => {
  runner.run(item, rule, {
    valid: [
      item + '(true, true)',
      item + '(true, true, "whatever")'
    ],
    invalid: [
      {
        code: item + '()',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true)',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true, true, true, true)',
        errors: [getErrorObj(item)]
      }
    ]
  });
});

[
  'assert_approx_equals',
  'assert_between_exclusive',
  'assert_between_inclusive'
].forEach(item => {
  runner.run(item, rule, {
    valid: [
      item + '(true, true, true)',
      item + '(true, true, true, "whatever")'
    ],
    invalid: [
      {
        code: item + '()',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true)',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true, true)',
        errors: [getErrorObj(item)]
      },
      {
        code: item + '(true, true, true, true, true)',
        errors: [getErrorObj(item)]
      }
    ]
  });
});
