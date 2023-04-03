const Timer = (fn, countdown) => {
  var ident,
    complete = false;

  function _time_diff(date1, date2) {
    console.log(date1, date2);
    return date2 ? date2 - date1 : new Date().getTime() - date1;
  }

  function cancel() {
    clearTimeout(ident);
  }

  function pause() {
    clearTimeout(ident);
    total_time_run = _time_diff(start_time);
    complete = total_time_run >= countdown;
  }

  function resume() {
    ident = complete ? -1 : setTimeout(fn, countdown - total_time_run);
  }

  var start_time = new Date().getTime();
  ident = setTimeout(fn, countdown);

  return { cancel: cancel, pause: pause, resume: resume };
}

export default Timer;