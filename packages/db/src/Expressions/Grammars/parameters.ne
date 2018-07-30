# Condition parameters
opValues -> opValue extraOpValue:*							        {% (d) => ({ type: "opValues", value: [d[0]].concat(d[1]) }) %}
extraOpValue -> ("," _:? opValue )	                                    {% (d) => { return d[0][2]; } %}

# Function parameters
path -> opKey                                                           {% (d) => { return d; } %}
type -> attribute                                                       {% (d) => { return d; } %}
substr -> opValue                                                       {% (d) => { return d; } %}
operand -> opValue                                                      {% (d) => { return d; } %}

# DynamoDB keys, including nested properties
opKey -> string "." string                                              {% (d) => ({ type: "opKey", value: d }) %}
    | string                                                            {% (d) => ({ type: "opKey", value: d[0]}) %}

# DynamoDB values
opValue -> string                                                       {% (d) => ({ type: "opValue", value: d[0]}) %}
    | number                                                            {% (d) => ({ type: "opValue", value: d[0]}) %}
    | boolean                                                           {% (d) => ({ type: "opValue", value: d[0]}) %}
