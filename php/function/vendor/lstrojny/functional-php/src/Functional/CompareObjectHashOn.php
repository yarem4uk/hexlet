<?php
/**
 * Copyright (C) 2011-2016 by Lars Strojny <lstrojny@php.net>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
namespace Functional;

use function Functional\compose;

/**
 * Returns a comparison function that can be used with e.g. `usort()`
 *
 * @param callable $comparison A function that compares the two values. Pick e.g. strcmp() or strnatcasecmp()
 * @param callable $keyFunction A function that takes an argument and returns the value that should be compared
 * @return callable
 */
function compare_object_hash_on(callable $comparison, callable $keyFunction = null)
{
    $keyFunction = $keyFunction ? compose($keyFunction, 'spl_object_hash') : 'spl_object_hash';

    return compare_on($comparison, $keyFunction);
}

