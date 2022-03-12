const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('should have name, id, email and github properties', () => {
    const engineer = new Engineer('Andy', '1', 'andy@b.com' , 'andy');
    
    expect(engineer.name).toBe('Andy');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('andy@b.com');
    expect(engineer.github).toBe('andy');
  });

  it('should return property values via methods', () => {
    const engineer = new Engineer('Andy', '1', 'andy@b.com', 'andy');
    const name = engineer.getName();
    const id = engineer.getId();
    const email = engineer.getEmail();
    const github = engineer.getGithub();

    expect(name).toBe('Andy');
    expect(id).toBe('1');
    expect(email).toBe('andy@b.com');
    expect(github).toBe('andy');
  })

  it('getRole() should return "Engineer"', () => {
    const engineer = new Engineer('Andy', '1', 'andy@b.com' ,'andy');
    const role = engineer.getRole();

    expect(role).toBe('Engineer');
  });
});