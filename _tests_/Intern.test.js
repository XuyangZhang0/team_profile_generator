const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('should have name, id, email and github properties', () => {
    const intern = new Intern('Andy', '1', 'andy@b.com' , 'UF');
    
    expect(intern.name).toBe('Andy');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('andy@b.com');
    expect(intern.school).toBe('UF');
  });

  it('should return property values via methods', () => {
    const intern = new Intern('Andy', '1', 'andy@b.com', 'UF');
    const name = intern.getName();
    const id = intern.getId();
    const email = intern.getEmail();
    const school = intern.getSchool();

    expect(name).toBe('Andy');
    expect(id).toBe('1');
    expect(email).toBe('andy@b.com');
    expect(school).toBe('UF');
  })

  it('getRole() should return "Intern"', () => {
    const intern = new Intern('Andy', '1', 'andy@b.com' ,'UF');
    const role = intern.getRole();

    expect(role).toBe('Intern');
  });
});