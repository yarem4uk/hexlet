# Functional PHP

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Functional PHP](#functional-php)
    - [Import functions](#import-functions)
    - [Example](#example)
- [Function overview](#function-overview)
  - [every() & invoke()](#every--invoke)
  - [some()](#some)
  - [none()](#none)
  - [reject() & select()](#reject--select)
  - [drop_first() & drop_last()](#drop_first--drop_last)
  - [true() & false()](#true--false)
  - [truthy() & falsy()](#truthy--falsy)
  - [contains()](#contains)
  - [sort()](#sort)
  - [Other:](#other)
- [Partial application](#partial-application)
  - [Introduction](#introduction)
  - [partial_left() & partial_right()](#partial_left--partial_right)
  - [partial_any()](#partial_any)
  - [partial_method()](#partial_method)
- [Access functions](#access-functions)
  - [with()](#with)
  - [invoke_if()](#invoke_if)
  - [invoke(), invoke_last(), invoke_first()](#invoke-invoke_last-invoke_first)
  - [invoker()](#invoker)
  - [pluck()](#pluck)
  - [pick()](#pick)
  - [first_index_of()](#first_index_of)
  - [last_index_of()](#last_index_of)
  - [indexes_of()](#indexes_of)
- [Function functions](#function-functions)
  - [retry()](#retry)
  - [poll()](#poll)
  - [capture()](#capture)
  - [compose()](#compose)
  - [Other](#other)
- [Mathematical functions](#mathematical-functions)
- [Transformation functions](#transformation-functions)
  - [partition()](#partition)
  - [group()](#group)
  - [zip()](#zip)
  - [flatten()](#flatten)
  - [reduce_left() & reduce_right()](#reduce_left--reduce_right)
  - [Other](#other-1)
- [Higher order comparison functions](#higher-order-comparison-functions)
  - [compare_on & compare_object_hash_on](#compare_on--compare_object_hash_on)
- [Miscellaneous](#miscellaneous)
  - [const_function()](#const_function)
  - [id()](#id)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Import functions

Whenever you want to work with Functional PHP and not reference the fully qualified name, add `use Functional as F;` on 
top of your PHP file or use `use function Functional\function_name`. The latter is used in the documentation is the 
preferred way starting with PHP 5.6.

### Example

```php
use function Functional\map;

map(range(0, 100), function($v) {return $v + 1;});
```

# Function overview


## every() & invoke()

``Functional\every(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\every;
use function Functional\invoke;

// If all users are active, set them all inactive
if (every($users, function($user, $collectionKey, $collection) {return $user->isActive();})) {
    invoke($users, 'setActive', [false]);
}
```


## some()

``bool Functional\some(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\some;

if (some($users, function($user, $collectionKey, $collection) use($me) {return $user->isFriendOf($me);})) {
    // One of those users is a friend of me
}
```


## none()

``bool Functional\none(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\none;

if (none($users, function($user, $collectionKey, $collection) {return $user->isActive();})) {
    // Do something with a whole list of inactive users
}
```


## reject() & select()

``array Functional\select(array|Traversable $collection, callable $callback)``

``array Functional\reject(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\select;
use function Functional\reject;

$fn = function($user, $collectionKey, $collection) {
    return $user->isActive();
};
$activeUsers = select($users, $fn);
$inactiveUsers = reject($users, $fn);
```

Alias for `Functional\select()` is `Functional\filter()`


## drop_first() & drop_last()

``array Functional\drop_first(array|Traversable $collection, callable $callback)``

``array Functional\drop_last(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\drop_first;
use function Functional\drop_last;

$fn = function($user, $index, $collection) {
    return $index <= 2;
};

// All users except the first three
drop_first($users, $fn);
// First three users
drop_last($users, $fn);
```


## true() & false()
Returns true or false if all elements in the collection are strictly true or false

``bool Functional\true(array|Traversable $collection)``
``bool Functional\false(array|Traversable $collection)``

```php
<?php
use function Functional\true;
use function Functional\false;

// Returns true
true([true, true]);
// Returns false
true([true, 1]);

// Returns true
false([false, false, false]);
// Returns false
false([false, 0, null, false]);
```


## truthy() & falsy()
Returns true or false if all elements in the collection evaluate to true or false

``bool Functional\truthy(array|Traversable $collection)``
``bool Functional\falsy(array|Traversable $collection)``

```php
<?php
use function Functional\truthy;
use function Functional\falsy;

// Returns true
truthy([true, true, 1, 'foo']);
// Returns false
truthy([true, 0, false]);

// Returns true
falsy([false, false, 0, null]);
// Returns false
falsy([false, 'str', null, false]);
```


## contains()
Returns true if given collection contains given element. If third parameter is true, the comparison
will be strict

``bool Functional\contains(array|Traversable $collection, mixed $value[, bool $strict = true])``

```php
<?php
use function Functional\contains;

// Returns true
contains(['el1', 'el2'], 'el1');

// Returns false
contains(['0', '1', '2'], 2);
// Returns true
contains(['0', '1', '2'], 2, false);
```


## sort()
Sorts a collection with a user-defined function, optionally preserving array keys

```php
<?php
use function Functional\sort;

// Sorts a collection alphabetically
sort($collection, function($left, $right) {
    return strcmp($left, $right);
});

// Sorts a collection alphabetically, preserving keys
sort($collection, function($left, $right) {
    return strcmp($left, $right);
}, true);

// Sorts a collection of users by age
sort($collection, function($user1, $user2) {
    if ($user1->getAge() == $user2->getAge()) {
        return 0;
    }

    return ($user1->getAge() < $user2->getAge()) ? -1 : 1;
});
```


## Other:

`void Functional\each(array|Traversable $collection, callable $callback)`
Applies a callback to each element


`array Functional\map(array|Traversable $collection, callable $callback)`
Applies a callback to each element in the collection and collects the return value


`mixed Functional\first(array|Traversable $collection[, callable $callback])`
`mixed Functional\head(array|Traversable $collection[, callable $callback])`
Returns the first element of the collection where the callback returned true. If no callback is given, the first element
is returned


`mixed Functional\last(array|Traversable $collection[, callable $callback])`
Returns the last element of the collection where the callback returned true. If no callback is given, the last element
is returned


`mixed Functional\tail(array|Traversable $collection[, callable $callback])`
Returns every element of the collection except the first one. Elements are optionally filtered by callback.

# Partial application

## Introduction

Partial application is a concept where a higher-order function returns a new function by applying the passed arguments
to the new function. Let’s have a look at the following simple function that takes two parameters and subtracts them:

```php
$subtractor = function ($a, $b) {
    return $a - $b;
};
$subtractor(10, 20); // -> -10
```

The same function can be reduced to two nested functions each with a single argument:

```php
$subtractor = function ($a) {
    return function ($b) use ($a) {
        return $a - $b;
    };
}
$partiallyAppliedSubtractor = $subtractor(10);
$partiallyAppliedSubtractor(20); // -> -10
```


## partial_left() & partial_right()

`Functional\partial_left()` and `Functional\partial_right` are shortcuts to create partially applied functions. Let’s revisit
our example again, this time using `partial_left`:

```php
use function Functional\partial_left;

$partiallyAppliedSubtractor = partial_left($subtractor, 10);
$partiallyAppliedSubtractor(20); // -> -10
```

A slightly different example with `partial_right` where we do the calculation `20 - 10`:

```php
use function Functional\partial_right;

$partiallyAppliedSubtractor = partial_right($subtractor, 10);
$partiallyAppliedSubtractor(20); // -> 10
```

## partial_any()

There is a third function in the family called `partial_any`. Unlike its siblings it doesn’t automatically merge but it
only resolves placeholders that can either be indicated by calling `Functional\placeholder()`, `Functional\…()` or the
constant `Functional\…` As a subtraction function is kind of useless, let’s do something more practical and use partial
application in combination with `select` to find all elements that contain `jo`:

```php
use function Functional\select;

$elements = [
    'john',
    'joe',
    'joanna',
    'patrick',
];
$selected = select($elements, function ($element) {
    return substr_count($element, 'jo');
});
```

Instead of writing that slightly obnoxious callback, let’s use a partially applied function:

```php
use function Functional\select;
use function Functional\partial_any;
use const Functional\…;

$elements = [
    'john',
    'joe',
    'joanna',
    'patrick',
];
$selected = select($elements, partial_any('substr_count', …, 'jo'));
```


## partial_method()

The fourth member of the partial application family is the `partial_method` function. It returns a function with a bound
method call expecting the object that receives the method call as a first parameter. Let’s assume we want to filter a
list of objects by a predicate that belongs to the object:

```php
use function Functional\select;
use function Functional\partial_method;

$users = [new User(), new User()];
$registeredUsers = select($users, function (User $user) {
    return $user->isRegistered();
});
```

We can rewrite the above example like this:

```php
use function Functional\select;
use function Functional\partial_method;

$users = [new User(), new User()];
$registeredUsers = select($users, partial_method('isRegistered'));
```

# Access functions

Functional PHP comes with a set of invocation helpers that ease calling function or methods or accessing nested values.


## with()
Invoke a callback on a value if the value is not null

```php
<?php
use function Functional\with;

$retval = with($value, function($value) {
    $this->doSomethingWithValue($value);

    return 'my_result';
});
```

`with()` returns whatever the callback returns. In the above example
`$retval` would be `'my_result'`.

## invoke_if()

``mixed Functional\invoke_if(mixed $object, string $methodName[, array $methodArguments, mixed $defaultValue])``

```php
<?php
use function Functional\invoke_if;

// if $user is an object and has a public method getId() it is returned,
// otherwise default value 0 (4th argument) is used
$userId = invoke_if($user, 'getId', [], 0);
```


## invoke(), invoke_last(), invoke_first()

``array Functional\invoke(array|Traversable $collection, string $methodName[, array $methodArguments])``
Invokes method `$methodName` on each object in the `$collection` and returns the results of the call

``mixed Functional\invoke_first(array|Traversable $collection, string $methodName[, array $methodArguments])``
Invokes method `$methodName` on the first object in the `$collection` and returns the results of the call

``mixed Functional\invoke_last(array|Traversable $collection, string $methodName[, array $methodArguments])``
Invokes method `$methodName` on the last object in the `$collection` and returns the results of the call


## invoker()

``callable Functional\invoker(string $method[, array $methodArguments])``
Returns a function that invokes method `$method` with arguments `$methodArguments` on the object

## pluck()
Fetch a single property from a collection of objects or arrays.

``array Functional\pluck(array|Traversable $collection, string|integer|float|null $propertyName)``

```php
<?php
use function Functional\pluck;

$names = pluck($users, 'name');
```


## pick()
Pick a single element from a collection of objects or an array by index.
If no such index exists, return the default value.

``array Functional\pick(array|Traversable $collection, mixed $propertyName, mixed $default, callable $callback)``

```php
<?php
use function Functional\pick;

$array = ['one' => 1, 'two' => 2, 'three' => 3];
pick($array, 'one'); // -> 1
pick($array, 'ten'); // -> null
pick($array, 'ten', 10); // -> 10
```


## first_index_of()
Returns the first index holding specified value in the collection. Returns false if value was not found

``array Functional\first_index_of(array|Traversable $collection, mixed $value)``

```php
<?php
use function Functional\first_index_of;

// $index will be 0
$index = first_index_of(['value', 'value'], 'value');
```


## last_index_of()
Returns the last index holding specified value in the collection. Returns false if value was not found

``array Functional\last_index_of(array|Traversable $collection, mixed $value)``

```php
<?php
use function Functional\last_index_of;

// $index will be 1
$index = last_index_of(['value', 'value'], 'value');
```


## indexes_of()
Returns a list of array indexes, either matching the predicate or strictly equal to the the passed value. Returns an empty array if no values were found.

``array Functional\indexes_of(Traversable|array $collection, mixed|callable $value)``

```php
<?php
use function Functional\indexes_of;

// $indexes will be array(0, 2)
$indexes = indexes_of(['value', 'value2', 'value'], 'value');
```

# Function functions

Function functions take a function or functions and return a new, modified version of the function.


## retry()
Retry a callback until the number of retries are reached or the callback does no longer throw an exception

```php
use function Functional\retry;
use function Functional\sequence_exponential;

assert_options(ASSERT_CALLBACK, function () {throw new Exception('Assertion failed');});

// Assert that a file exists 10 times with an exponential back-off
retry(
    function() {assert(file_exists('/tmp/lockfile'));},
    10,
    sequence_exponential(1, 100)
);
```


## poll()
Retry a callback until it returns a truthy value or the timeout (in microseconds) is reached

```php
use function Functional\poll;
use function Functional\sequence_linear;

// Poll if a file exists for 10,000 microseconds with a linearly growing back-off starting at 100 milliseconds
poll(
    function() {
        return file_exists('/tmp/lockfile');
    },
    10000,
    sequence_linear(100, 1)
);
```

You can pass any `Traversable` as a sequence for the delay but Functional comes with `Functional\sequence_constant()`, `Functional\sequence_linear()` and `Functional\sequence_exponential()`.

## capture()
Return a new function that captures the return value of $callback in $result and returns the callbacks return value

```php
use function Functional\capture;

$fn = capture(
    function() {
        return 'Hello world';
    },
    $result
);

$fn();

var_dump($result); // 'Hello world'
```


## compose()
Return a new function that composes multiple functions into a single callable

```php
use function Functional\compose;

$plus2 = function ($x) { return $x + 2; };
$times4 = function ($x) { return $x * 4; };

$composed = compose($plus2, $times4);

$result = array_map($composed, array(1, 2, 5, 8));

var_dump($result); // array(12, 16, 28, 40)
```



## Other

`mixed Functional\memoize(callable $callback[, array $arguments = []], [mixed $key = null]])`
Returns and stores the result of the function call. Second call to the same function will return the same result without calling the function again

# Mathematical functions

`mixed Functional\maximum(array|Traversable $collection)`
Returns the highest element in the array or collection


`mixed Functional\minimum(array|Traversable $collection)`
Returns the lowest element in the array or collection


`integer|float Functional\product(array|Traversable $collection, $initial = 1)`
Calculates the product of all numeric elements, starting with `$initial`


`integer|float Functional\ratio(array|Traversable $collection, $initial = 1)`
Calculates the ratio of all numeric elements, starting with `$initial`


`integer|float Functional\sum(array|Traversable $collection, $initial = 0)`
Calculates the sum of all numeric elements, starting with `$initial`


`integer|float Functional\difference(array|Traversable $collection, $initial = 0)`
Calculates the difference of all elements, starting with `$initial`


`integer|float|null Functional\average(array|Traversable $collection)`
Calculates the average of all numeric elements

# Transformation functions


## partition()
Splits a collection into two by callback. Truthy values come first

``array Functional\partition(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\partition;

list($admins, $users) = partition($collection, function($user) {
    return $user->isAdmin();
});
```


## group()
Splits a collection into groups by the index returned by the callback

``array Functional\group(array|Traversable $collection, callable $callback)``

```php
<?php
use function Functional\group;

$groupedUser = group($collection, function($user) {
    return $user->getGroup()->getName();
});
```


## zip()
Recombines arrays by index and applies a callback optionally

``array Functional\zip(array|Traversable $collection1[, array|Traversable ...[, callable $callback]])``

```php
<?php
use function Functional\zip;

// Returns [['one', 1], ['two', 2], ['three', 3]]
zip(['one', 'two', 'three'], [1, 2, 3]);

// Returns ['one|1', 'two|2', 'three|3']
zip(
    ['one', 'two', 'three'],
    [1, 2, 3],
    function($one, $two) {
        return $one . '|' . $two;
    }
);
```


## flatten()
Takes a nested combination of collections and returns their contents as a single, flat array. Does not preserve indexes.

``array Functional\flatten(array|Traversable $collection)``

```php
<?php
use function Functional\flatten;

$flattened = flatten([1, 2, 3, [1, 2, 3, 4], 5]);
// [1, 2, 3, 1, 2, 3, 4, 5];
```


## reduce_left() & reduce_right()
Applies a callback to each element in the collection and reduces the collection to a single scalar value.
`Functional\reduce_left()` starts with the first element in the collection, while `Functional\reduce_right()` starts
with the last element.

``mixed Functional\reduce_left(array|Traversable $collection, callable $callback[, $initial = null])``

``mixed Functional\reduce_right(array|Traversable $collection, callable $callback[, $initial = null])``

```php
<?php
use function Functional\reduce_left;
use function Functional\reduce_right;

// $str will be "223"
$str = reduce_left([2, 3], function($value, $index, $collection, $reduction) {
    return $reduction . $value;
}, 2);

// $str will be "232"
$str = reduce_right([2, 3], function($value, $index, $collection, $reduction) {
    return $reduction . $value;
}, 2);
```


## Other

`array Functional\unique(array|Traversable $collection[, callback $indexer[, bool $strict = true]])`
Returns a unified array based on the index value returned by the callback, use `$strict` to change comparison mode


`array Functional\flat_map(array|Traversable $collection, callable $callback)`
Applies a callback to each element in the collection and collects the return values flattening one level of nested arrays.

# Higher order comparison functions

## compare_on & compare_object_hash_on

``callable compare_on(callable $comparison; callable $keyFunction = Functional\const_function)``
Returns a compare function that can be used with e.g. `usort()`, `array_udiff`, `array_uintersect` and so on. Takes a
comparison function as the first argument, pick e.g. `strcmp`, `strnatcmp` or `strnatcasecmp`. Second argument can be a
key function that is applied to both parameters passed to the compare function.

``callable compare_object_hash_on(callable $comparison = 'strnatcasecmp', callable $keyFunction = 'Functional\const_function')``
Returns a compare function function that expects `$left` and `$right` to be an object and compares them using the value
of `spl_object_hash`. First argument is the comparison function, pick e.g. `strcmp`, `strnatcmp` or `strnatcasecmp`.
Takes a key function as an optional argument that is invoked on both parameters passed to the compare function. It is
just a shortcut to `compare_on` as it composes the given key function with `spl_object_hash()` as a key function.

# Miscellaneous


## const_function()
Returns new function, that will constantly return its first argument (constant function)

```php
<?php
use function Functional\const_function;

$one = const_function(1);
$one(); // -> 1
```


## id()
Proxy function, that do nothing, except returning its first argument

```php
<?php
use function Functional\id;

1 === id(1);
```
