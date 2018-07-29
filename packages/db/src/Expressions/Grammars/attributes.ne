# Attributes
attribute -> "S"    {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "SS"          {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "N"           {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "NS"          {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "B"           {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "BS"          {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "BOOL"        {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "NULL"        {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "L"           {% (d) => ({ type: "attribute", value: d[0]}) %}
    | "M"           {% (d) => ({ type: "attribute", value: d[0]}) %}
