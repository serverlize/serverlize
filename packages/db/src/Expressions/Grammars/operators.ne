# Comparators
comparator -> "="           {% (d) => ({ type: "comparator", value: d[0]}) %}
    | "<>"                  {% (d) => ({ type: "comparator", value: d[0]}) %}
    | "<"                   {% (d) => ({ type: "comparator", value: d[0]}) %}
    | "<="                  {% (d) => ({ type: "comparator", value: d[0]}) %}
    | ">"                   {% (d) => ({ type: "comparator", value: d[0]}) %}
    | ">="                  {% (d) => ({ type: "comparator", value: d[0]}) %}

# Boolean keywords
boolBetween -> "BETWEEN"    {% (d) => ({ type: "boolBetween", value: d[0]}) %}
boolAnd -> "AND"            {% (d) => ({ type: "boolAnd", value: d[0]}) %}
boolOr -> "OR"              {% (d) => ({ type: "boolOr", value: d[0]}) %}
boolNot -> "NOT"            {% (d) => ({ type: "boolNot", value: d[0]}) %}
boolIn -> "IN"              {% (d) => ({ type: "boolIn", value: d[0]}) %}
