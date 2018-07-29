@preprocessor typescript

@include "./primitives.ne"
@include "./attributes.ne"
@include "./operators.ne"

# Condition expressions
condition -> opKey _ comparator _ opValue                               {% (d) => ({ type: "condition", value: d }) %}
    | opKey _ boolBetween _ opValue _ boolAnd _ opValue                 {% (d) => ({ type: "condition", value: d }) %}
    | condition _ boolAnd _ condition                                   {% (d) => ({ type: "condition", value: d }) %}
    | condition _ boolOr _ condition                                    {% (d) => ({ type: "condition", value: d }) %}
    | opKey _ boolIn _ "(" opValue ("," _:? opValue ):* ")"             {% (d) => ({ type: "condition", value: d }) %}
    | function
    | boolNot _ condition                                               {% (d) => ({ type: "condition", value: d }) %}
    | "(" condition ")"                                                 {% (d) => ({ type: "condition", value: d }) %}

function ->
    "attribute_exists" _:? "(" path ")"                                 {% (d) => ({ type: "function", value: d }) %}
    | "attribute_not_exists" _:? "(" path ")"                           {% (d) => ({ type: "function", value: d }) %}
    | "attribute_type" _:? "(" path "," _:? type ")"                    {% (d) => ({ type: "function", value: d }) %}
    | "begins_with" _:? "(" path "," _:? substr ")"                     {% (d) => ({ type: "function", value: d }) %}
    | "contains" _:? "(" path "," _:? operand ")"                        {% (d) => ({ type: "function", value: d }) %}
    | "size" _:? "(" path ")"                                           {% (d) => ({ type: "function", value: d }) %}

path -> opKey                                                           {% (d) => ({ type: "parameter", value: d }) %}
type -> attribute                                                       {% (d) => ({ type: "parameter", value: d }) %}
substr -> opValue                                                       {% (d) => ({ type: "parameter", value: d }) %}
operand -> opValue                                                      {% (d) => ({ type: "parameter", value: d }) %}

# DynamoDB keys, including nested properties
opKey -> string "." string                                              {% (d) => ({ type: "opKey", value: d }) %}
    | string                                                            {% (d) => ({ type: "opKey", value: d[0]}) %}

# DynamoDB values
opValue -> string                                                       {% (d) => ({ type: "opValue", value: d[0]}) %}
    | number                                                            {% (d) => ({ type: "opValue", value: d[0]}) %}
    | boolean                                                           {% (d) => ({ type: "opValue", value: d[0]}) %}
