@preprocessor typescript

@include "./attributes.ne"
@include "./operators.ne"
@include "./parameters.ne"
@include "./primitives.ne"

# Condition expressions
condition -> opKey _ comparator _ opValue                               {% (d) => ({ type: "condition", value: d }) %}
    | opKey _ boolBetween _ opValue _ boolAnd _ opValue                 {% (d) => ({ type: "condition", value: d }) %}
    | condition _ boolAnd _ condition                                   {% (d) => ({ type: "condition", value: d }) %}
    | condition _ boolOr _ condition                                    {% (d) => ({ type: "condition", value: d }) %}
    | opKey _ boolIn _ "(" opValues ")"                                 {% (d) => ({ type: "condition", value: d }) %}
    | function                                                          {% (d) => { return d; } %}
    | function _ comparator _ opValue                                   {% (d) => ({ type: "condition", value: d }) %}
    | boolNot _ condition                                               {% (d) => ({ type: "condition", value: d }) %}
    | "(" condition ")"                                                 {% (d) => ({ type: "condition", value: d }) %}

function ->
    "attribute_exists" _:? "(" path ")"                                 {% (d) => ({ type: "function", value: d }) %}
    | "attribute_not_exists" _:? "(" path ")"                           {% (d) => ({ type: "function", value: d }) %}
    | "attribute_type" _:? "(" path "," _:? type ")"                    {% (d) => ({ type: "function", value: d }) %}
    | "begins_with" _:? "(" path "," _:? substr ")"                     {% (d) => ({ type: "function", value: d }) %}
    | "contains" _:? "(" path "," _:? operand ")"                        {% (d) => ({ type: "function", value: d }) %}
    | "size" _:? "(" path ")"                                           {% (d) => ({ type: "function", value: d }) %}
