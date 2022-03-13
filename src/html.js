function generateHtml(managerEl, engineerEl, internEl) {
    const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="row justify-content-between">
                ${managerEl}
            
                ${engineerEl}

                ${internEl}
            </div>
        </main>
    </body>
    </html>`
    return htmlTemplate
}

module.exports = generateHtml;