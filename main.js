// Javascript for Chicago Art Institute API

async function getText(id) {
  let x = await fetch('https://api.artic.edu/api/v1/artworks/' + id + '/?fields=id,title,artist_display,artist_title,thumbnail');
  let y = await x.text();
  let obj = JSON.parse(y).data
  console.log(obj.title)
  document.getElementsByClassName(id)[0].innerHTML = obj.title
  document.getElementsByClassName(id)[1].innerHTML = 'Artist- ' + obj.artist_display
  document.getElementsByClassName(id)[2].innerHTML = 'Details- ' + obj.thumbnail.alt_text
  document.getElementsByClassName(id)[3].innerHTML = 'ID- ' + obj.id
}

// A City Park
getText(28849)
// Glasses and Pipe
getText(50157)
// On the Bank
getText(81539)
// Solitude
getText(183293)
// Flowers
getText(66149)
// Niagara Falls
getText(90048)
// Cotopaxi
getText(76571)
// Flowers
getText(72180)

/**API Reference -  getText() Returns the visible text for the element */