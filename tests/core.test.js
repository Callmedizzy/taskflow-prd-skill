const test = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../src/utils/core.js');

const now = new Date('2026-11-23T10:00:00');

test('required fields and past deadline are rejected', () => {
  const validation = Core.validateTask({ title:'   ', course:'', description:'', date:'2026-11-22', time:'09:00' }, now, false);
  assert.ok(validation.errors.title);
  assert.ok(validation.errors.course);
  assert.ok(validation.errors.date);
});

test('task created less than three days schedules only H-1 if H-3 is past', () => {
  const task = { id:'a', title:'Tugas', due:'2026-11-25T23:59:00', status:'pending' };
  const schedule = Core.reminderSchedule(task, now);
  assert.equal(schedule.length, 1);
  assert.equal(schedule[0].kind, 'H-1');
});

test('completed and overdue rules are derived correctly', () => {
  assert.equal(Core.isOverdue({ status:'done', due:'2020-01-01T23:59:00' }, now), false);
  assert.equal(Core.isOverdue({ status:'pending', due:'2020-01-01T23:59:00' }, now), true);
});

test('completed task cancels reminder queue', () => {
  const task = { id:'a', title:'Tugas', due:'2026-12-01T23:59:00', status:'done' };
  const queue = Core.dedupeAndBuildQueue([task], { 'a:H-3':{taskId:'a',kind:'H-3',when:'2026-11-28T09:00:00.000Z',state:'scheduled'} }, now);
  assert.equal(queue['a:H-3'].state, 'cancelled');
});

test('deadline edit reschedules reminder instead of retaining old time', () => {
  const task = { id:'a', title:'Tugas', due:'2026-12-01T23:59:00', status:'pending' };
  const existing = { 'a:H-3':{taskId:'a',kind:'H-3',when:'2026-11-27T09:00:00.000Z',state:'scheduled'} };
  const queue = Core.dedupeAndBuildQueue([task], existing, now);
  assert.notEqual(queue['a:H-3'].when, existing['a:H-3'].when);
  assert.equal(queue['a:H-3'].state, 'scheduled');
});

test('overdue filter and sorting work', () => {
  const tasks = [
    { id:'1', title:'Zeta', status:'pending', due:'2026-11-22T23:59:00' },
    { id:'2', title:'Alpha', status:'done', due:'2026-11-30T23:59:00' },
    { id:'3', title:'Beta', status:'progress', due:'2026-11-25T23:59:00' }
  ];
  assert.equal(Core.filterTasks(tasks, 'overdue').length, 1);
  assert.equal(Core.sortTasks(tasks, 'az')[0].title, 'Alpha');
  assert.equal(Core.sortTasks(tasks, 'soonest')[0].id, '1');
});

test('name and description limits are enforced', () => {
  const validation = Core.validateTask({ title:'x'.repeat(151), course:'x'.repeat(101), description:'x'.repeat(1001), date:'2026-12-01', time:'09:00' }, now, false);
  assert.ok(validation.errors.title);
  assert.ok(validation.errors.course);
  assert.ok(validation.errors.description);
});
