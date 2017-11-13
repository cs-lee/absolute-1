/**
 * Copyright (c) 2017 The Absolute Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { } from 'jest';
import absolute from '../absolute';

test('absolute.indexeddb.set()', async () => {
  expect(await absolute.indexeddb.set('test_key', {v: 'value'})).toBe(false);
});

test('absolute.indexeddb.get()', async () => {
  expect(await absolute.indexeddb.get('test_key')).toBe(null);
});

test('absolute.indexeddb.remove()', async () => {
  expect(await absolute.indexeddb.remove('test_key')).toBe(null);
});