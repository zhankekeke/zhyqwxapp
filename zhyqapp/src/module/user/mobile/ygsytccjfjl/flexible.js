'use strict'
!(function(e, t) {
  var n,
    i = document,
    d = window,
    o = i.documentElement,
    a = document.createElement('style')
  function s() {
    var n = o.getBoundingClientRect().width
    n > (t = t || 540) && (n = t)
    var i = (100 * n) / e
    a.innerHTML = 'html{font-size:' + i + 'px;}'
  }
  if (o.firstElementChild) o.firstElementChild.appendChild(a)
  else {
    var r = i.createElement('div')
    r.appendChild(a), i.write(r.innerHTML), (r = null)
  }
  s(),
    d.addEventListener(
      'resize',
      function() {
        clearTimeout(n), (n = setTimeout(s, 300))
      },
      !1
    ),
    d.addEventListener(
      'pageshow',
      function(e) {
        e.persisted && (clearTimeout(n), (n = setTimeout(s, 300)))
      },
      !1
    ),
    'complete' === i.readyState
      ? (i.body.style.cssText =
          'fontSize:16px;maxWidth:' + t + 'px;margin:0 auto;')
      : i.addEventListener(
          'DOMContentLoaded',
          function(e) {
            i.body.style.cssText =
              'font-size:16px;max-width:' + t + 'px;margin:0 auto;'
          },
          !1
        )
})(750, 750)