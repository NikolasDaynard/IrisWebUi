function loadScript(url, callback) {
  if (typeof callback !== 'function') {
    callback = () => {};
  }
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => callback();
  document.head.appendChild(script);
}

const iframe = document.getElementById('content');

function run(irisScript) {
  const lexer = new Lexer(irisScript);
  lexer.scan();

  const parser = new Parser(lexer.tokens);
  parser.parse();

  const codegen = new CodeGen(parser.ast);
  console.log("thing")
  if (!parser.errored) {
    codegen.generate();
    try {
      console.log(codegen.html);
      // contentDiv.innerHTML += codegen.html;
      // // page.setContentHtml
      // // fs.writeFileSync(`./${filename}.html`, codegen.html);
      iframe.contentDocument.open();
      iframe.contentDocument.write(codegen.html);
      iframe.contentDocument.close();
    } catch (err) {
      console.error(err);
    }
  }
}