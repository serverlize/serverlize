# Primitive types
string -> [a-zA-Z]:+      {% (d) => ({ type: "string", value: d[0].join("")}) %}
number -> [0-9]:+         {% (d) => ({ type: "number", value: d[0].join("")}) %}
boolean -> [true|false]   {% (d) => ({ type: "boolean", value: d[0].join("")}) %}
_ -> " "                  {% (d) => ({ type: "whitespace", value: d[0]}) %}
