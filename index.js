const assertions = require('./rules/assertions');

module.exports = {
  environments: {
    testharness: {
      globals: {
        assert_true: false,
        assert_false: false,
        assert_equals: false,
        assert_not_equals: false,
        assert_in_array: false,
        assert_array_equals: false,
        assert_approx_equals: false,
        assert_less_than: false,
        assert_greater_than: false,
        assert_between_exclusive: false,
        assert_less_than_equal: false,
        assert_greater_than_equal: false,
        assert_between_inclusive: false,
        assert_regexp_match: false,
        assert_class_string: false,
        assert_own_property: false,
        assert_inherits: false,
        assert_idl_attribute: false,
        assert_readonly: false,
        assert_throws: false,
        assert_unreached: false,
        assert_any: false,
        self: false,
        test: false,
        async_test: false,
        done: false,
        promise_test: false,
        promise_rejects: false
      },
      rules: {
        "testharness/assertions": "error"
      }
    }
  },
  rules: {
    assertions: assertions
  }
};
