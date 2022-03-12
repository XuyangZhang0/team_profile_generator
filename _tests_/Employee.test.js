const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('should have name, id, and email', () => {
    const employee = new Employee('Andy', '1', 'andy@b.com');
    
    expect(employee.name).toBe('Andy');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('andy@b.com');
  });

  it('should return property values via methods', () => {
    const employee = new Employee('Andy', '1', 'andy@b.com');
    const name = employee.getName();
    const id = employee.getId();
    const email = employee.getEmail();

    expect(name).toBe('Andy')
    expect(id).toBe('1')
    expect(email).toBe('andy@b.com')
  })

  it('getRole() should return "Employee"', () => {
    const employee = new Employee('Andy', '1', 'andy@b.com');
    const role = employee.getRole();

    expect(role).toBe('Employee');
  });
});