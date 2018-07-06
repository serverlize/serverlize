import ExpressionInterface from './ExpressionInterface';

export default abstract class AbstractExpression<O> implements ExpressionInterface<O> {

  protected attribute: string;
  protected operator: string;
  protected value: string;

  constructor(attribute: string, operator: string, value: string) {
    this.attribute = attribute;
    this.operator = operator;
    this.value = value;
  }

  abstract generate: () => O;
}
