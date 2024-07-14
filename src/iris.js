function loadScript(url, callback) {
  if (typeof callback !== 'function') {
    callback = () => {};
  }
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => callback();
  document.head.appendChild(script);
}

// const lexer = loadScript('./src/lexer.js', () => {return getLexer()});
const parserScript = loadScript('./src/parser.js');
const codegenScript = loadScript('./src/codegen.js');

function run(filename) {
  console.log(loadScript('./src/lexer.js', () => {return getLexer()}));
  console.log(lexer);
  getLexer();
  
  const lexer = new getLexer()();
  lexer.scan();

  // const parser = new Parser(lexer.tokens);
  parser.parse();

  // const codegen = new CodeGen(parser.ast);
  if (!parser.errored) {
    codegen.generate();
    try {
      fs.writeFileSync(`./${filename}.html`, codegen.html);
    } catch (err) {
      console.error(err);
    }
  }
}