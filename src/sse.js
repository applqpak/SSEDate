function sse()
{
  var sse = new EventSource('sse.php');
  var el = document.getElementById('result');
  sse.addEventListener('date', function(e)
  {
    el.innerHTML = e.data + '<br/>';
  }, false);
}

window.onload = function()
{
  sse();
};
