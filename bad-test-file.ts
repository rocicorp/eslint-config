// Test file for validating ESLint rules catch violations
// This file should have lint errors when using the config

export interface BadInterface {
  snake_case_property: string; // Should error: naming convention
  CamelCaseProperty: string; // Should error: naming convention
}

export class BadClass {
  private _private_field: string; // Should error: should use # private
  protected bad_protected: number; // Should error: naming convention
  
  constructor() {
    this._private_field = 'test';
    this.bad_protected = 42;
  }

  public badMethod(): void { // Should error: explicit accessibility on public
    console.log('test'); // Should error: no-console
    var badVar = 'test'; // Should error: no-var
    const snake_case_var = 'test'; // Should error: naming convention
    
    if (badVar == 'test') { // Should error: eqeqeq
      console.log('found');
    } else {
      return 'unnecessary else'; // Should error: no-else-return
    }
  }
}

// Should error: naming convention (function should be camelCase or PascalCase)
export function bad_function() {
  // Arrow function without parentheses when body could be simplified
  const arrow = () => { return 'test'; }; // Should error: arrow-body-style
}

// Test that no-only-tests plugin works
describe.only('test', () => { // Should error: no-only-tests
  test('should fail', () => {
    expect(true).toBe(true);
  });
});