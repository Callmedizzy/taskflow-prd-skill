(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.TaskCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const statusNames = { pending: 'Belum Dikerjakan', progress: 'Sedang Dikerjakan', done: 'Selesai' };
  const pad = n => String(n).padStart(2, '0');
  function dateKey(value) {
    const d = value instanceof Date ? value : new Date(value);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  function parseDue(date, time = '23:59') { return new Date(`${date}T${time}:00`); }
  function isOverdue(task, now = new Date()) { return task.status !== 'done' && new Date(task.due) < now; }
  function validateTask(input, now = new Date(), editing = false) {
    const errors = {};
    if (!input.title || !input.title.trim()) errors.title = 'Nama tugas wajib diisi.';
    else if (input.title.trim().length > 150) errors.title = 'Nama tugas maksimal 150 karakter.';
    if (!input.course || !input.course.trim()) errors.course = 'Mata kuliah wajib diisi.';
    else if (input.course.trim().length > 100) errors.course = 'Mata kuliah maksimal 100 karakter.';
    if ((input.description || '').length > 1000) errors.description = 'Deskripsi maksimal 1000 karakter.';
    if (!input.date) errors.date = 'Tanggal tenggat wajib diisi.';
    if (!input.time) errors.time = 'Waktu tenggat wajib diisi.';
    let due = null;
    if (input.date && input.time) {
      due = parseDue(input.date, input.time);
      if (Number.isNaN(due.getTime())) errors.date = 'Tanggal atau waktu tenggat tidak valid.';
      else if (!editing && due < now) errors.date = 'Tenggat tidak boleh berada di masa lalu.';
    }
    return { errors, due };
  }
  function reminderSchedule(task, now = new Date()) {
    if (task.status === 'done') return [];
    const due = new Date(task.due);
    return [3, 1].map(days => {
      const at = new Date(due);
      at.setDate(at.getDate() - days);
      at.setHours(9, 0, 0, 0);
      return { kind: `H-${days}`, when: at, taskId: task.id };
    }).filter(item => item.when > now && due > now);
  }
  function dedupeAndBuildQueue(tasks, existing = {}, now = new Date()) {
    const queue = {};
    for (const task of tasks) {
      for (const reminder of reminderSchedule(task, now)) {
        const key = `${task.id}:${reminder.kind}`;
        const scheduled = { taskId: task.id, kind: reminder.kind, when: reminder.when.toISOString(), state: 'scheduled' };
        queue[key] = existing[key] && existing[key].state !== 'cancelled' && existing[key].when === scheduled.when
          ? existing[key]
          : scheduled;
      }
    }
    for (const key of Object.keys(existing)) {
      if (existing[key].state !== 'cancelled' && !queue[key]) {
        queue[key] = { ...existing[key], state: 'cancelled' };
      } else if (queue[key]) {
        queue[key] = queue[key];
      }
    }
    return queue;
  }
  function sortTasks(tasks, sortBy = 'soonest') {
    return [...tasks].sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.due) - new Date(a.due);
      if (sortBy === 'az') return a.title.localeCompare(b.title, 'id');
      if (sortBy === 'za') return b.title.localeCompare(a.title, 'id');
      return new Date(a.due) - new Date(b.due);
    });
  }
  function filterTasks(tasks, filter) {
    const now = new Date();
    if (filter === 'all') return tasks;
    if (filter === 'overdue') return tasks.filter(task => isOverdue(task, now));
    return tasks.filter(task => task.status === filter);
  }
  return { statusNames, pad, dateKey, parseDue, isOverdue, validateTask, reminderSchedule, dedupeAndBuildQueue, sortTasks, filterTasks };
});