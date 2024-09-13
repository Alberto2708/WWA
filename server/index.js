const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
const port = 3000;

// express functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// testing
app.get("/", (req, res) => { 
  res.json({obra: "¿Qué es WWA?",
    artista: "Una propuesta para conocer el arte de diversas culturas, a lo largo del tiempo",
    imageurl: "https://www.nga.gov/content/dam/ngaweb/press/acquisitions/2021/stein/lrg-bearden.jpg",
    descripcion: "Se pretende que este proyecto ayude a las personas a concientizar sobre las diversas culturas que existen"
  })
  });

app.get("/0", (req,res) =>{
    res.json({obra: "Shringaar",
      artista: "Amrita Sher-Gil",
      imageurl: "https://uploads0.wikiart.org/images/amrita-sher-gil/shringaar-1940.jpg",
      descripcion: "Amrita Sher-Gil fue una pintora india.​ Su padre, Umrao Singh Majitha, era un aristócrata punjabí sikh especialista en sánscrito y su madre, Marie Antoinette Gottesmann, era una cantante de ópera húngara-judía.​ Amrita es conocida como «la Frida Kahlo de la India», ​ considerada como la pintora más importante del siglo XX de este país, cuyo legado es comparado con los maestros del Renacimiento bengalí, a pesar de que manifestó tener diferencias estilísticas.​ Por ello es conocida como la pintora más destacada de la India.​​​ Es la única asiática que formó parte del Gran Salón de París.​ Gran parte de su vida está documentada dado que su padre era un fotógrafo aficionado, algo raro para la época.​"
    })
})

app.get("/1", (req,res) =>{
  res.json({obra: "Sol y vida",
    artista: "Frida Kahlo",
    imageurl: "http://WahooArt.com/A55A04/w.nsf/O/BRUE-8CEFHY/$File/FRIDA-KAHLO-SUN-AND-LIFE.JPG",
    descripcion: "Magdalena Carmen Frida Kahlo Calderón, ​ conocida mundialmente como Frida Kahlo, fue una pintora mexicana reconocida como un icono pop de la cultura de México.​ Su obra gira temáticamente en torno a su biografía y a su propio sufrimiento. Fue autora de 150 obras, principalmente autorretratos, en los que proyectó sus dificultades por sobrevivir."
  })
})

app.get("/2", (req,res) =>{
  res.json({obra: "UNITY",
    artista: "Thandiwe Murui",
    imageurl: "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy,q_auto/artlogicstorage/193gallery/images/view/f12e23107633f2f3cce69598cba27205j/193gallery-thandiwe-muriu-unity-2022.jpg",
    descripcion: "Thandiwe Muriu no tuvo la típica educación africana. En vez de aprender sobre tareas domésticas como otras chicas de Nairobi, pasó su niñez, junto a sus tres hermanas, aprendiendo con su padre."
  })
})


app.get("/3", (req,res) =>{
  res.json({obra: "Laughing Demon (Warai Hannya)",
    artista: "Katsushika Hokusai",
    imageurl: "https://uploads3.wikiart.org/images/katsushika-hokusai/laughing-demon.jpg",
    descripcion: "Katsushika Hokusai, conocido simplemente como Hokusai, fue un pintor y grabador japonés, adscrito a la escuela Ukiyo-e del periodo Edo. Es uno de los principales artistas de esta escuela conocida como «pinturas del mundo flotante».​ También es conocido por la diversidad de nombres que utilizó a lo largo de su carrera profesional, como Shunro, Sori, Kako, Taito, Kakyoin, Iitsu y Manji.​"
  })
})

app.get("/4", (req,res) =>{
  res.json({obra: "Rote Weste",
    artista: "Paul Klee",
    imageurl: "https://uploads1.wikiart.org/images/paul-klee/red-waistcoat-1938(1).jpg",
    descripcion: "Paul Klee fue un pintor alemán nacido en Suiza, ​ cuyo estilo varía entre el surrealismo, el expresionismo y la abstracción."
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


          