// Test file for validating ESLint rules
// This file should have no lint errors when using the config

export interface TestInterface {
  camelCaseProperty: string;
  anotherProperty: number;
}

export class TestClass {
  #privateProperty: string;
  protected _protectedProperty: number;

  constructor(readonlyParam: string) {
    this.#privateProperty = readonlyParam;
    this._protectedProperty = 42;
  }

  async testMethod(): Promise<void> {
    const localVariable = 'test';
    const _unusedConstant = 100;
    const { camelCaseProperty: _camelCaseProperty } = { camelCaseProperty: 'test' };
    
    if (localVariable === 'test') {
      return;
    }
    
    // Using private property to avoid unused error
    await this.#privateMethod();
  }

  async #privateMethod(): Promise<void> {
    await Promise.resolve();
    // Use the private property to avoid unused warning
    const temp = this.#privateProperty;
    this.#privateProperty = `${temp}-updated`;
  }
}

export function testFunction(): void {
  const arrowFunction = (): string => 'test';
  const _result = arrowFunction();
}

// Test PascalCase for React component (should be allowed)
export const TestReactComponent = (): string => 'test';

export enum TestEnum {
  FirstValue = 'first',
  SecondValue = 'second',
}