'use strict';

if (self.importScripts) {
  self.importScripts('/resources/testharness.js');
  self.importScripts('../resources/test-utils.js');
  self.importScripts('../resources/my-test.js');
}

const obj = {};
const myclass = {};
const whatever = null;

promise_test(() => {
  assert_true(true);
  assert_false(false);
  assert_equals(1, 1, 'foo1');
  assert_not_equals(true, false, 'foo');
  assert_in_array(1, [1, 2]);
  assert_array_equals([1, 2], [1, 2], 'foo');
  assert_approx_equals(1, 2);
  assert_less_than(1, 2);
  assert_greater_than(2, 1);
  assert_between_exclusive(2, 1, 3);
  assert_less_than_equal(1, 10);
  assert_greater_than_equal(10, 1);
  assert_between_inclusive(1, 1, 2);
  assert_regexp_match(/foo/g, /foo/g);
  assert_class_string(myclass, 'MyClass');
  assert_own_property(obj, 'myproperty');
  assert_inherits(obj, 'myproperty');
  assert_idl_attribute(obj, 'myproperty');
  assert_readonly(obj, 'myproperty');
  assert_throws(Error, () => { throw new Error() });
  assert_unreached('this is not reached');
  assert_any(whatever);
}, 'foo');

test(() => {
  assert_true(true);
}, 'true');

async_test(() => {
  assert_true(true);
  done();
}, 'loaded');

promise_test(t => {
  function bar() {
    return Promise.reject(new TypeError());
  }

  return promise_rejects(t, new TypeError(), bar());
}, "Another example");
