function generateManagerElement (manager) {
    const managerEl = `<div class="card text-center bg-light mb-3 col-10" style="margin:auto">
    <div class="card-header bg-warning">
        Manager
    </div>
    <div class="card-body">
        <h3 class="card-title">${manager.name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">ID: ${manager.id}</h4>
        <a href="mailto:${manager.email}" class="btn btn-primary">${manager.email}</a>
        <p>OfficeNumber: ${manager.officeNumber}</p>
    </div>
    </div>`
return managerEl;
}

function generateEngineerElement (engineers) {
    let engineerEl='';
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = `<div class="card text-center bg-light mb-3 col-md-4 col-sm-6">
        <div class="card-header bg-info">
            Engineer
        </div>
        <div class="card-body">
        <h3 class="card-title">${engineer.name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">ID: ${engineer.id}</h4>
        <a href="mailto:${engineer.email}" class="btn btn-info">${engineer.email}</a>
        <a href="https://www.github.com/${engineer.github}" target="_blank" class="card-link">GitHub: ${engineer.github}</a>
    </div>
    </div>`
    engineerEl += card;
    }
    return engineerEl;
}


function generateInternElement (interns) {
    let internEl='';
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = `<div class="card text-center bg-light mb-3 col-md-4 col-sm-6">
        <div class="card-header bg-success">
                Intern
        </div>
        <div class="card-body">
                <h3 class="card-title">${intern.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">ID: ${intern.id}</h4>
                <a href="mailto:${intern.email}" class="btn btn-success">${intern.email}</a>
                <p>${intern.school}</p>
        </div>
        </div>`

    internEl += card;
    }
    return internEl;
}


module.exports = { generateManagerElement, generateEngineerElement, generateInternElement }