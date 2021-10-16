const http = require('http')

const server = http.createServer((req, res) => {
  // if(req.url === '/'){
  //   res.end('Welcome welcome nyan, Ohayo Zinxu mastah!!!')
  // }
  // if(req.url === '/about'){
  //   res.end("Hemlo, Oh! you wanna know more about me heh? Ara! Ara!")
  // }
  // res.end(`
  // <h1>Ehhhhh, Hentai bakaaa, what are you trying to find? Baka. </h1>
  // <a href="/">Get out baka</a>
  // `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome welcome nyan, Ohayo Zinxu mastah!!!')
  } else if (req.url === '/about') {
    res.end("Hemlo, Oh! you wanna know more about me heh? Ara! Ara!")
  } else {
    res.end(`
  <h1>Ehhhhh, Hentai bakaaa, what are you trying to find? Baka. </h1>
  <a href="/">Get out baka</a>
  `)
  }
})

server.listen(5000)
