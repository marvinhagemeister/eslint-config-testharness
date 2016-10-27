const assertions = {
  assert_true: [1, 2, 'actual: any, message?: string'],
  assert_false: [1, 2, 'actual: any, message?: string'],
  assert_equals: [2, 3, 'actual: any, expected: any, message?: string'],
  assert_not_equals: [2, 3, 'actual: any, expected: any, message?: string'],
  assert_in_array: [2, 3, 'needle: any, haystack: Array<any>, message?: string'],
  assert_array_equals: [2, 3, 'actual: Array<any>, expected: Array<any>, message?: string'],
  assert_approx_equals:[3, 4, 'actual: number, expected: number, epsilon: number, message?: string'],
  assert_less_than: [2, 3, 'actual: number, target: number, message?: string'],
  assert_greater_than: [2, 3, 'actual: number, target: number, message?: string'],
  assert_between_exclusive: [3, 4, 'needle: number, lower: number, upper: number, message?: string'],
  assert_less_than_equal: [2, 3, 'actual: number, upper: number, message?: string'],
  assert_greater_than_equal: [2, 3, 'actual: number, lower: number, message?: string'],
  assert_between_inclusive: [3, 4, 'needle: number, lower: number, upper: number, message?: string'],
  assert_regexp_match: [2, 3, 'actual: any, expected: any, message?: string'],
  assert_class_string: [2, 3, 'class: Object, name: string, message?: string'],
  assert_own_property: [2, 3, 'object: Object, property: string, message?: string'],
  assert_own_inherits: [2, 3, 'object: Object, property: string, message?: string'],
  assert_idl_attribute: [2, 3, 'object: Object, attribute: string, message?: string'],
  assert_readonly: [2, 3, 'object: Object, property: string, message?: string'],
  assert_throws: [2, 3, 'code: string | Object | null, func: Function, message?: string'],
  assert_unreached: [1, 1, 'message: string'],
  // TODO
  // assert_any: false,
}

module.exports = context => {
  return {
    ExpressionStatement: node => {
      const { callee, arguments } = node.expression;
      if (typeof callee === 'undefined') {
        return;
      }

      const rule = assertions[callee.name];
      if (rule
        && (arguments.length < rule[0] || arguments.length > rule[1])) {
        context.report(
          node,
          `Wrong argument count: ${callee.name}(${rule[2]})`
        );
      }
    }
  };
};

module.exports.schema = [];
module.exports._messages = assertions;
