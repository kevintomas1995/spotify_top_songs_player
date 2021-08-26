// url: https://www.ikea.com/us/en/cat/chairs-fu002/
// script
/*
let data = []; 
let elms = document.getElementsByClassName('product-compact')
for(var i=0; i < elms.length; i++) { 
    const curr = elms[i];
    const price = curr.getElementsByClassName('product-compact__price__value')[0].innerText;
    const name = curr.getElementsByClassName('product-compact__name')[0].innerText;
    const image = curr.getElementsByTagName('img')[0].src;
    data.push({
      id: curr.dataset.refId,
      price,
      name,
      image
    })
}
JSON.stringify(data, null, 2)
*/
export default [
  {
    id: "40454230",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "70078463",
    artist: "MEUTE",
    name: "Rushing Back",
    image: "https://i.scdn.co/image/ab67616d0000b27360720027ca18e605171e96c6",
    uri: "spotify:track:2BGX0YY0Rq3dEsgqFGNg6h",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "99305926",
    artist: "Mädness",
    name: "Handbremse",
    image: "https://i.scdn.co/image/ab67616d0000b2732b26313a5b53057b7b22cd0d",
    uri: "spotify:track:7Mi1RBGMF18aWN1eLgze8A",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "90359829",
    artist: "Anton MC",
    name: "2x2=5",
    image: "https://i.scdn.co/image/ab67616d0000b273babdb7928f89ba1bea9e959f",
    uri: "spotify:track:2t0h1FpXfIuG77BdyYBsYK",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "29221746",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89129085",
    artist: "Dope Lemon",
    name: "Rose Pink Cadillac",
    image: "https://i.scdn.co/image/ab67616d0000b273690f77e72aea2030c129dd58",
    uri: "spotify:track:3YC7FYhduZbYObLRCdhANa",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "40344760",
    artist: "Weezer",
    name: "Island In The Sun",
    image: "https://i.scdn.co/image/ab67616d0000b2731e0dc5baaabda304b0ad1815",
    uri: "spotify:track:2MLHyLy5z5l5YRp7momlgw",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "00425777",
    artist: "Halid Bešlić",
    name: "Sarajevo",
    image: "https://i.scdn.co/image/ab67616d0000b2731c97c8dc3d8379e7f9fedc6a",
    uri: "spotify:track:2EE79Y5C1pPV0GqWblxe9o",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "69299012",
    artist: "Halid Bešlić",
    name: "Miljacka",
    image: "https://i.scdn.co/image/ab67616d0000b2731074029a835e9e3ef095186f",
    uri: "spotify:track:42Q5mk3TjmhcEeWbq2ffSD",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "40262877",
    artist: "Halid Bešlić",
    name: "Taman Je",
    image: "https://i.scdn.co/image/ab67616d0000b27351b9b3eab173e90b1ccbce2a",
    uri: "spotify:track:5rvCzTLl7V3CVxGaMK59Yy",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "10407136",
    artist: "Dino Merlin",
    name: "Kad Si Rekla Da Me Voliš",
    image: "https://i.scdn.co/image/ab67616d0000b273b6cda7e73387f9eb7e473920",
    uri: "spotify:track:1HI6zseO8LvOaJMQlU3b2f",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "10233532",
    artist: "Dino Merlin",
    name: "Godinama",
    image: "https://i.scdn.co/image/ab67616d0000b273b6cda7e73387f9eb7e473920",
    uri: "spotify:track:0o8oegulfBawjoKW98wtXU",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "90359848",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "30299032",
    artist: "Milky Chance",
    name: "Flashed Junk Mind",
    image: "https://i.scdn.co/image/ab67616d0000b27323444c767d67417474f103e3",
    uri: "spotify:track:7EuTFqQnMZoIaGisMRCtf6",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "59275912",
    artist: "MEUTE",
    name: "YOU & ME",
    image: "https://i.scdn.co/image/ab67616d0000b2731e4b57f1cfb61e9bfef1e8ca",
    uri: "spotify:track:1MdbDBwEEecnlLiyWChJFh",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89272714",
    artist:"futurebae",
    name: "Coca Cabana",
    image: "https://i.scdn.co/image/ab67616d0000b27336f41097353ff7cbc4b4e589",
    uri: "spotify:track:6idUCoDhkX3LuUu01q0Knd",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "39254821",
    artist: "Gentleman",
    name: "Widerstand (feat. Gentleman)",
    image: "https://i.scdn.co/image/ab67616d0000b2736eb5efb57dc78c08736a8caa",
    uri: "spotify:track:3SREWQTntVkUDdhAqgOGy5",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89129306",
    artist: "Ten Fé",
    name: "Elodie",
    image: "https://i.scdn.co/image/ab67616d0000b273fdfcf00a89f0d55381814622",
    uri: "spotify:track:2fTKshQHePb3vVTwoczm1j",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89297187",
    artist: "K.Flay",
    name: "Everyone I Know",
    image: "https://i.scdn.co/image/ab67616d0000b273916892cf162d3ea13a3e6373",
    uri: "spotify:track:2szRAmUqMmw5EAzhqfWVh8",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89829138",
    artist: "Pish",
    name: "These Lines",
    image: "https://i.scdn.co/image/ab67616d0000b2734814faa2476912dfe565a279",
    uri: "spotify:track:61WSAmzu53iahlNURS17mP",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "10370741",
    artist: "Modest Mouse",
    name: "Night On the Sun",
    image:"https://i.scdn.co/image/ab67616d0000b27320e556fb20c8c4fe4c9a5e96",
    uri: "spotify:track:6FnCv3N1Vi59JlBu0CTZzu",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "49251935",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "50423587",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "70262890",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89221734",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "59221716",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "19336026",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "90434310",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "40456960",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "80423581",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "40392548",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "59269162",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "99033544",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "30276667",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "09031808",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "40233535",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "59192399",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "30433243",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "79135652",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "50262891",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "70434311",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "50058376",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "99135750",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "89277491",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "50295472",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "50262872",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
  {
    id: "79257101",
    artist: "Empire Of The Sun",
    name: "Half Mast",
    image: "https://i.scdn.co/image/ab67616d0000b273f3aa0e6ca22a382007f61e4d",
    uri: "spotify:track:49Hkgl03InFFqBklOQxunt",
    external_album_uri: "spotify:album:1AvkRISSdzC7cq7eLoS5w1"
  },
];
