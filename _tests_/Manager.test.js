const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('should have name, id, email and github properties', () => {
    const manager = new Manager('Andy', '1', 'andy@b.com' , '1');
    
    expect(manager.name).toBe('Andy');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('andy@b.com');
    expect(manager.officeNumber).toBe('1');
  });

 
  it('should return property values via methods', () => {
    const manager = new Manager('Andy', '1', 'andy@b.com', 'UF');
    const name = manager.getName();
    const id = manager.getId();
    const email = manager.getEmail();
    

    expect(name).toBe('Andy');
    expect(id).toBe('1');
    expect(email).toBe('andy@b.com');
    // expect(school).toBe('UF');
  })

  it('getRole() should return "Manager"', () => {
    const manager = new Manager('Andy', '1', 'andy@b.com' ,'1');
    const role = manager.getRole();

    expect(role).toBe('Manager');
  });
});