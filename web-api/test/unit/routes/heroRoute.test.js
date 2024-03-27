import test from 'node:test';
import assert from 'node:assert';
const callTracker = new assert.CallTracker();
process.on('exit', () => callTracker.verify());

import { routes } from './../../../src/routes/heroRoute.js';
import { DEFAULT_HEADER } from '../../../src/util/util.js';

test('Hero routes - endpoints test suites', async (t) => {
  await t.test('it should call /heroes:get route', async () => {
    const databaseMock = [
      {
        id: '22864261-afbb-4776-b93e-9641f87f3066',
        name: 'Batman',
        age: 50,
        power: 'rich',
      },
    ];

    const heroServiceStub = {
      find: async () => databaseMock,
    };

    const endpoints = routes({
      heroService: heroServiceStub,
    });

    const endpoint = '/heroes:get';
    const request = {};
    const response = {
      write: callTracker.calls((item) => {
        const expected = JSON.stringify({
          results: databaseMock,
        });
        assert.strictEqual(
          item,
          expected,
          'write should be called with correct payload'
        );
      }),
      end: callTracker.calls((item) => {
        assert.strictEqual(
          item,
          undefined,
          'end should be called without params'
        );
      }),
    };
    const route = endpoints[endpoint];

    await route(request, response); // Parei em 1:15:33
  });
  await t.todo('it should call /heroes:post route');
});
