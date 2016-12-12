<?php

  date_default_timezone_set('Australia/Victoria');
  header('Content-Type: text/event-stream');
  header('Cache-Control: no-cache');

  echo "event: date\n";
  echo "retry: 1000\n";
  echo "data: " . date('r') . "\n\n";
