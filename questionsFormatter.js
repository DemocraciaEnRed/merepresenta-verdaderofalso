const _ = require("lodash");

const questions = [
  {
    "Pregunta Nº": 1,
    "Tema": "Política Nacional",
    "Pregunta": "¿En qué año se comenzó a aplicar el esquema de pago de ganancias conocido como la 'Tablita de Machinea'?",
    "Respuesta correcta": 2000,
    "Respuesta incorrecta 1": 1990,
    "Respuesta incorrecta 2": 1980,
    "Descripción": "La reforma tributaria impulsada por el gobierno de la Alianza fue aprobada por el Congreso en diciembre de 1999, pero empezó a regir a partir del año 2000."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es hoy el presidente del PJ Bonaerense?",
    "Respuesta correcta": "Gustavo Menéndez",
    "Respuesta incorrecta 1": "Pablo Moyano",
    "Respuesta incorrecta 2": "Fernando Gray",
    "Descripción": "Gustavo Menéndez es intendente de Merlo, asumió como presidente del PJ bonaerense en diciembre de 2017 y permanece en el cargo desde entonces."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue el primer ministro de Economía de Néstor Kirchner en 2003?",
    "Respuesta correcta": "Roberto Lavagna",
    "Respuesta incorrecta 1": "Jorge Remes Lenicov",
    "Respuesta incorrecta 2": "Miguel Peirano",
    "Descripción": "Asumió como ministro de Economía y Producción en abril de 2002 durante la Presidencia interina de Duhalde. N. Kirchner lo confirmó en el cargo en 2003."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué vicepresidente renunció en el año 2000?",
    "Respuesta correcta": "Carlos \"Chacho\" Álvarez",
    "Respuesta incorrecta 1": "Graciela Fernández Meijide",
    "Respuesta incorrecta 2": "José Machinea",
    "Descripción": "Carlos Álvarez renunció en forma indeclinable a su cargo el 6 de octubre de 2000, habia sido electo sólo un año antes."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién ocupa el juzgado federal con compentencia en las elecciones?",
    "Respuesta correcta": "Romilda Servini de Cubría",
    "Respuesta incorrecta 1": "Daniel Rafecas",
    "Respuesta incorrecta 2": "Marcelo Martínez de Giorgi",
    "Descripción": "María Servini de Cubría ocupa el Juzgado Federal nro1 desde noviembre de 1990."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Política Nacional",
    "Pregunta": "¿En qué ciudad se organizó el cónclave de la UCR que definió la integración radical a Cambiemos, en 2015?",
    "Respuesta correcta": "Gualeguaychú",
    "Respuesta incorrecta 1": "Paraná",
    "Respuesta incorrecta 2": "Zárate",
    "Descripción": "En la Convención de Gualeguaychú, con el aval de 186 delegados sobre 330, la UCR decidió formar una alianza con el PRO y la Coalición Cívica que llamarían \"Cambiemos\"."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ministro estuvo en su cargo durante la gestión de Mauricio Macri y la de Cristina Kirchner?",
    "Respuesta correcta": "Lino Barañao",
    "Respuesta incorrecta 1": "Alberto Fernández",
    "Respuesta incorrecta 2": "Oscar Aguad",
    "Descripción": "Barañao fue único ministro que tuvo continuidad entre gestiones, ocupó el Ministerio de Ciencia por más de 10 años."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ex-futbolista fue Secretario de Deportes?",
    "Respuesta correcta": "Roberto Perfumo",
    "Respuesta incorrecta 1": "Norberto Alonso",
    "Respuesta incorrecta 2": "Diego Latorre",
    "Descripción": "Perfumo fue Secretario de Deportes durante la presidencia de Néstor Kirchner, fue sucedido por Claudio Morresi, otro ex futbolista."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el gobernador de Misiones?",
    "Respuesta correcta": "Oscar Herrera Ahuad",
    "Respuesta incorrecta 1": "Maurice Closs",
    "Respuesta incorrecta 2": "Hugo Passalacqua",
    "Descripción": "Entre 2015 y 2019 fue vicegobernador, en las elecciones 2019 ganó con más del 72% de los votos."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el gobernador de Chaco?",
    "Respuesta correcta": "Jorge Capitanich",
    "Respuesta incorrecta 1": "Domingo Peppo",
    "Respuesta incorrecta 2": "Gerardo Morales",
    "Descripción": "En 2019, Jorge Capitanich fue electo gobernador con más del 49% de los votos. \"Coqui\" ya había sido electo gobernador en 2007 y en 2015."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue la primera gobernadora electa de Argentina?",
    "Respuesta correcta": "Fabiana Ríos",
    "Respuesta incorrecta 1": "Lucía Corpacci",
    "Respuesta incorrecta 2": "Rosana Bertone",
    "Descripción": "Fabiana Ríos fue la primera mujer electa gobernadora de una provincia, en Tierra del Fuego en 2007."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué candidato ocupó el primer puesto en las elecciones presidenciales de 2003?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Néstor Kirchner",
    "Respuesta incorrecta 2": "Ricardo López Murphy",
    "Descripción": "Menem obtuvo el 24% de los votos, frente al 22% de Kirchner y al 16% de López Murphy"
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántas mujeres fueron electas gobernadoras de alguna provincia en toda la historia?",
    "Respuesta correcta": 6,
    "Respuesta incorrecta 1": 9,
    "Respuesta incorrecta 2": 19,
    "Descripción": "Fabiana Ríos (T. del Fuego), Lucía Corpacci (Catamarca), Claudia Ledesma Abdala (Santiago del Estero), Ma. Eugenia Vidal (Buenos Aires), Alicia Kirchner (Sta Cruz) y Rosana Bertone (T. del Fuego) encabezaron la fórmula para la gobernación y ganaron."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué partido del Conurbano Bonaerense cuenta con el mismo intendente desde hace más de 20 años?",
    "Respuesta correcta": "San Isidro",
    "Respuesta incorrecta 1": "La Matanza",
    "Respuesta incorrecta 2": "Lomas de Zamora",
    "Descripción": "En 1999, Gustavo Posse fue electo Intendente de San Isidro y, desde entonces, ocupa el cargo. Antes de él, el distrito fue gobernado por su padre, Melchor Posse, durante 16 años."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué presidente/a firmó un mayor número de Decretos de Necesidad y Urgencia (DNU)?",
    "Respuesta correcta": "Néstor Kirchner",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Cristina Fernández de Kirchner",
    "Descripción": "Néstor Kirchner firmó 237 decretos en 4 años de presidencia."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Política Nacional",
    "Pregunta": "De las siguientes provincias ¿cuál está gobernada por Cambiemos?",
    "Respuesta correcta": "Jujuy",
    "Respuesta incorrecta 1": "Córdoba",
    "Respuesta incorrecta 2": "Tierra del Fuego",
    "Descripción": "Gerardo Morales es gobernador de Jujuy desde el 10 de diciembre de 2015."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién fue la primera candidata a diputada en Argentina en el año 1919?",
    "Respuesta correcta": "Julieta Lanteri",
    "Respuesta incorrecta 1": "Alicia Moreau de Justo",
    "Respuesta incorrecta 2": "Elvira Rawson",
    "Descripción": "Lanteri es también la fundadora del Partido Feminista Nacional."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ministro de la actual Corte Suprema fue convencional constituyente en la reforma de 1994?",
    "Respuesta correcta": "Juan Carlos Maqueda",
    "Respuesta incorrecta 1": "Carlos Rosenkrantz",
    "Respuesta incorrecta 2": "Ricardo Lorenzetti",
    "Descripción": "En 1994, se reformó la Constitución Nacional. Entre lo integantes de la Convención Constituyentese encontraban los actuales jueces de la Corte Juan Maqueda y Horacio Rosatti."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántos ministerios existen actualmente en la Argentina?",
    "Respuesta correcta": 21,
    "Respuesta incorrecta 1": 16,
    "Respuesta incorrecta 2": 8,
    "Descripción": "Incluyendo a la Jefatura de gabinete, Argentina tiene 21 ministerios nacionales, un número superior al promedio del resto de los países de América Latina."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Política Nacional",
    "Pregunta": "¿Qué ciudadano argentino fue parlamentario, juez de la corte, gobernador, presidente y vicepresidente de la Nación?",
    "Respuesta correcta": "José Figueroa Alcorta",
    "Respuesta incorrecta 1": "Faustino Sarmiento",
    "Respuesta incorrecta 2": "Nadie",
    "Descripción": "Figuero Alcorta fue diputado nacional, senador nacional, gobernador de Córdoba, vicepresidente y presidente de la Nación. También, fue juez de la Corte Suprema."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el actual ministro de Defensa?",
    "Respuesta correcta": "Jorge Taiana",
    "Respuesta incorrecta 1": "Agustín Rossi",
    "Respuesta incorrecta 2": "Matías Kulfas",
    "Descripción": "Jorge Taiana asumió como ministro de Defensa el 10 de agosto de 2021, en reemplazo de Agustín Rossi."
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Política Nacional",
    "Pregunta": "¿Cuántos ministerios están liderados por mujeres actualmente?",
    "Respuesta correcta": 2,
    "Respuesta incorrecta 1": 3,
    "Respuesta incorrecta 2": 4,
    "Descripción": "Carla Vizzotti es la titular del Ministerio de Salud y Elizabeth Gómez Alcorta del Ministerio de Mujeres, Géneros y Diversidad."
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el jefe de gabinente del gobernador Axel Kicillof?",
    "Respuesta correcta": "Martín Insaurralde",
    "Respuesta incorrecta 1": "Mariano Cascallares",
    "Respuesta incorrecta 2": "Fernando Espinoza",
    "Descripción": "Martín Insaurralde asumió como jefe de gabinete de Axel Kicillof el 20 de septiembre de 2021. Hasta ese entonces estaba a cargo de la intendencia de Lomas de Zamora."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el actual ministro de Cultura?",
    "Respuesta correcta": "Tristán Bauer",
    "Respuesta incorrecta 1": "Pablo Avelluto",
    "Respuesta incorrecta 2": "Lino Barañao",
    "Descripción": "Tristán Bauer es el ministro de Cultura desde el 10 de diciembre de 2019."
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién preside la comision de Presupuesto y Hacienda de la Camara de Diputados?",
    "Respuesta correcta": "Carlos Heller",
    "Respuesta incorrecta 1": "Roberto Felleti",
    "Respuesta incorrecta 2": "Gustavo Marconatto",
    "Descripción": "Carlos Heller, diputado nacional por la Ciudad de Buenos Aires, del Frente de Todos preside la comision desde diciembre 2019. Anteriormente la presidió Luciano Laspina (PRO-Santa Fe)."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es el gobernador de la provincia de Santa Fe?",
    "Respuesta correcta": "Omar Perotti",
    "Respuesta incorrecta 1": "Miguel Lifschitz",
    "Respuesta incorrecta 2": "Antonio Bonfatti",
    "Descripción": "Omar Perotti es gobernador de Santa Fe desde el 11 de diciembre de 2019."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quién es la presidenta del PRO?",
    "Respuesta correcta": "Patricia Bullrich",
    "Respuesta incorrecta 1": "Gladys González",
    "Respuesta incorrecta 2": "Elisa Carrió",
    "Descripción": "Patricia Bullrich es presidenta del PRO desde el 5 de febrero de 2020."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Política Nacional",
    "Pregunta": "¿A qué partido pertenece el gobernador de San Juan Sergio Uñac?",
    "Respuesta correcta": "Partido Justicialista",
    "Respuesta incorrecta 1": "Unión Cívica Radical",
    "Respuesta incorrecta 2": "PRO",
    "Descripción": "El Partido Justicialista gobierna la provincia desde 2003, de la mano de José Luis Gioja (2003-2015) y, ahora, con Sergio Uñac (2019-presente)."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Política Nacional",
    "Pregunta": "¿Quien es el/la presidente provisional del Senado actualmente?",
    "Respuesta correcta": "Claudia Ledesma Abdala",
    "Respuesta incorrecta 1": "Cristina Fernández de Kirhner",
    "Respuesta incorrecta 2": "Ines Imelda Blas",
    "Descripción": "Es senadora por la provincia de Santiago del Estero y su mandato es 2019-2025. Anteriormente fue diputada nacional (2017-2019) y gobernadora de la provincia (2013-2017)"
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo “dentro de poco llegaremos de Argentina a Japón en una hora volando en cohete por la estratosfera”?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Néstor Kirchner",
    "Respuesta incorrecta 2": "Mauricio Macri",
    "Descripción": "En 1996, el presidente Carlos Menem anticipó que \"en el corto plazo\" se iba a licitar un sistema de vuelos espaciales para comunicar Argentina con otros destinos, en tiempo récord."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"el peronismo triunfará conmigo o sinmigo”?",
    "Respuesta correcta": "Herminio Iglesias",
    "Respuesta incorrecta 1": "Fernando Iglesias",
    "Respuesta incorrecta 2": "Evaristo Iglesias",
    "Descripción": "La frase corresponde a Herminio Iglesias, candidato a Gobernador bonaerense en la campaña de 1983."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo “que se pierdan cien gobiernos, pero que se salven los principios”?",
    "Respuesta correcta": "Hipólito Yrigoyen",
    "Respuesta incorrecta 1": "Raúl Alfonsín",
    "Respuesta incorrecta 2": "Ricardo Alfonsín",
    "Descripción": "La frase está atribuida a Hipólito Irigoyen, en 1916, año en que ganó la presidencia argentina"
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo  “a vos no te va tan mal, gordito”?",
    "Respuesta correcta": "Raúl Alfonsín",
    "Respuesta incorrecta 1": "Patricia Bullrich",
    "Respuesta incorrecta 2": "Aníbal Fernández",
    "Descripción": "En un acto en Chos Malal, en 1987, en medio del discurso sobre el traslado de la Capital Federal a Viedma, Raúl Alfonsín tuvo un contrapunto con un asistente enojado."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"debo ser la reencarnación de un gran arquitecto egipcio\"?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Guillermo Moreno",
    "Respuesta incorrecta 2": "Axel Kicillof",
    "Descripción": "En 2012, mientras anunciaba las obras del polo audiovisual, en la Isla de Marchi, CFK reveló su entusiasmo por construir y diseñar estructuras."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quièn dijo \"qué lindo es dar buenas noticias\"?",
    "Respuesta correcta": "Fernando de la Rúa",
    "Respuesta incorrecta 1": "Eduardo Duhalde",
    "Respuesta incorrecta 2": "Mauricio Macri",
    "Descripción": "El entonces presidente Fernando de la Rúa, manifestó su felicidad en un spot en el que anunciaba el \"Blindaje 2000\", otorgado por el FMI, en diciembre del año 2000."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"no habrá devaluación brusca, la tendencia de los últimos días se acaba esta semana”?",
    "Respuesta correcta": "Celestino Rodrigo",
    "Respuesta incorrecta 1": "Axel Kicillof",
    "Respuesta incorrecta 2": "Nicolás Dujovne",
    "Descripción": "Celestino Rodrigo, ministro de Economía de Martínez de Perón, es recordado por una brusca devaluación del peso de más del 60%, :el \"Rodrigazo\"."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Qué candidato hizo campaña \"por los niños pobres que tienen hambre y por los niños ricos que tienen tristeza”?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Eduardo Duhalde",
    "Respuesta incorrecta 2": "Fernando De la Rúa",
    "Descripción": "En la campaña presidencial de 1989, Carlos Menem hizo una larga enumeración en la que también recordó a los \"jubilados\", \"desempleados\" y \"personas sin techo\"."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"si el mercado quiere dólares, le vamos a dar con el látigo”?",
    "Respuesta correcta": "José Machinea",
    "Respuesta incorrecta 1": "Guillermo Moreno",
    "Respuesta incorrecta 2": "Nicolás Dujovne",
    "Descripción": "José Luis Machinea, presidente del Banco Central, no pudo frenar a latigazos la corrida bancaria de 1989."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"este viejo adversario despide a un amigo\"?",
    "Respuesta correcta": "Ricardo Balbín",
    "Respuesta incorrecta 1": "Juan Domingo Perón",
    "Respuesta incorrecta 2": "Arturo U. Illia",
    "Descripción": "En julio de 1974, Ricardo Balbín pronunció esta frase en el funeral de Perón, sacandosé el sombrero ante su viejo rival político."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"aquí no hay crisis, ni problemas\" en octubre del 2000?",
    "Respuesta correcta": "Fernando De la Rúa",
    "Respuesta incorrecta 1": "Carlos Álvarez",
    "Respuesta incorrecta 2": "Eduardo Duhalde",
    "Descripción": "Fernando De la Rúa envió este mensaje a la ciudadanía para transmitir tranquilidad."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quíen dijo \"señor Presidente, como Jesús dijo a sus discípulos: lo que haya que hacer, hagámoslo rápido\"?",
    "Respuesta correcta": "Miguel Ángel Pichetto",
    "Respuesta incorrecta 1": "Julio Cobos",
    "Respuesta incorrecta 2": "Ernesto Sanz",
    "Descripción": "En la sesión del Senado en la que se discutió la 125, esquema de retenciones móviles para el agro, Miguel Pichetto tuvo un momento bíblico justo antes del voto \"no positivo\" de Cobos"
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo, en octubre del 2000, \"aquí no hay crisis, ni problemas\"?",
    "Respuesta correcta": "Fernando De la Rúa",
    "Respuesta incorrecta 1": "Carlos Álvarez",
    "Respuesta incorrecta 2": "Eduardo Duhalde",
    "Descripción": "Fernando De la Rúa envió este mensaje a la ciudadanía para transmitir tranquilidad."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"no me gusta el timbreo\"?",
    "Respuesta correcta": "Emilio Monzó",
    "Respuesta incorrecta 1": "Federico Pinedo",
    "Respuesta incorrecta 2": "Felipe Solá",
    "Descripción": "En una sesión de Diputados, los legisladores le pidieron al Presidente de la Cámara que llame al orden tocando la campana y Monzó respondió con una ironía: \"no me gusta el timbreo\"."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"los bancos tendrán que abrir sus puertas y que sea lo que Dios quiera”?",
    "Respuesta correcta": "Eduardo Duhalde",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Alberto Fenández",
    "Descripción": "Luego del \"corralito\" y diciembre de 2001, el entonces presidente Eduardo Duhalde usó esta frase para presionar a un Congreso que no quiso aprobar sus reformas económicas."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"los brasileros salieron de la selva\"?",
    "Respuesta correcta": "Alberto Fenández",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Néstor Kirchner",
    "Descripción": "En una conferencia de prensa, Alberto Fernández dijo \"los mexicanos salieron de los indios, los brasileros salieron de la selva, pero nosotros los argentinos llegamos de los barcos\"."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"en campaña saben hasta la fórmula de la Coca Cola, después no saben hacer ni un mate cocido\"?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Axel Kiciloff",
    "Respuesta incorrecta 2": "María Eugenia Vidal",
    "Descripción": "En 2014,  en un acto en Formosa, Cristina Kirchner se refirió a la diferencia entre la campaña y la gestión."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"llevo en mis oídos la más maravillosa música que, para mí, es la palabra del pueblo argentino\"?",
    "Respuesta correcta": "Juan D. Perón",
    "Respuesta incorrecta 1": "Eva Perón",
    "Respuesta incorrecta 2": "Arturo Frondizi",
    "Descripción": "En 1974, al cierre del que sería su último discurso desde el balcón de la Rosada, Juan Domingo Perón pronunció esta frase, que sonó como un adiós."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"hay que pasar el invierno\"?",
    "Respuesta correcta": "Alvaro Alsogaray",
    "Respuesta incorrecta 1": "Domingo Cavallo",
    "Respuesta incorrecta 2": "Martín Guzmán",
    "Descripción": "En 1959, el Ministro de Economía Álvaro Alsogaray presentó su \"“Plan de Estabilidad y Desarrollo”\" y el frío del invierno congeló los bolsillos."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"tenemos que tratar de no robar, por lo menos, dos años en este país\"?",
    "Respuesta correcta": "Luis Barrionuevo",
    "Respuesta incorrecta 1": "Hugo Moyano",
    "Respuesta incorrecta 2": "Elisa Carrió",
    "Descripción": "En 1990, en horario central de la televisión, el sindicalista Luis Barrionuevo compartió esta idea como una medida para \"sacar al país adelante\"."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"con la democracia se cura, se come y se educa\"?",
    "Respuesta correcta": "Raúl Alfonsín",
    "Respuesta incorrecta 1": "Carlos Menem",
    "Respuesta incorrecta 2": "Fernando de la Rúa",
    "Descripción": "Raúl Alfonsín pronunció estas palabras cuando asumía como Presidente, el 10 de diciembre de 1983."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Frases Memorables",
    "Pregunta": "Quién dijo \"el que depositó dólares, recibirá dólares\"?",
    "Respuesta correcta": "Eduardo Duhalde",
    "Respuesta incorrecta 1": "Adolfo Rodríguez Saá",
    "Respuesta incorrecta 2": "Ramón Puerta",
    "Descripción": "Eduardo Duhalde dijo esta frase en el marco de su asunción como Presidente el 2 de enero de 2002, luego del \"corralito\" y de los eventos de diciembre de 2001."
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"tenemos el mejor equipo de los últimos 50 años\"?",
    "Respuesta correcta": "Mauricio Macri",
    "Respuesta incorrecta 1": "Alberto Fernández",
    "Respuesta incorrecta 2": "Néstor Kirchner",
    "Descripción": "El 2 de diciembre de 2015, ocho días antes de asumir como Presidente de la Nación, Mauricio Macri presentó a su gabinete con esta frase."
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"veníamos bien, pero pasaron cosas\"?",
    "Respuesta correcta": "Mauricio Macri",
    "Respuesta incorrecta 1": "Rogelio Frigerio",
    "Respuesta incorrecta 2": "Patricia Bullrich",
    "Descripción": "En una entrevista con Jorge Lanata en junio de 2018, Mauricio Macri opinò sobre el aumento de la inflación y la devaluación del peso."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \" nadie nos va a robar la Republiquita porque está muy sana\"?",
    "Respuesta correcta": "Elisa Carrió",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Axel Kiciloff",
    "Descripción": "Carrió esbozó esta frase durante una reunión del gabinete ampliado de Mauricio Macri en agosto de 2019."
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo , refiriendosé al Riachuelo, \"vamos a ir allí a pasear en barco, a tomar mate, a bañarnos y a pescar\"?",
    "Respuesta correcta": "Carlos Menem",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Domingo Cavallo",
    "Descripción": "El entonces Presidente Menem exageró la eficacia de la política de saneamiento del Riachuelo que impulsó a principios de los 90s."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"que toda la Argentina se enamore de Christine Lagarde\"?",
    "Respuesta correcta": "Mauricio Macri",
    "Respuesta incorrecta 1": "Alfonso Prat-Gay",
    "Respuesta incorrecta 2": "Nicolás Dujovne",
    "Descripción": "En 2018, Mauricio Macri habló de \"la gran relación\" que tenía con la entonces titular del Fondo Monetario Internacional."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"solo hay que tenerle temor a Dios, y a mí un poquito también?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Mauricio Macri",
    "Respuesta incorrecta 2": "Néstor Kirchner",
    "Descripción": "La entonces presidenta Cristina Kirchner, en un discurso en 2012, le recordó a funcionarios nacionales dónde dirigir sus temores."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Frases Memorables",
    "Pregunta": "Quién dijo \"en el gobierno hay funcionarios que no funcionan\"?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Santiago Cafiero",
    "Respuesta incorrecta 2": "Aníbal Fernández",
    "Descripción": "En una carta publicada en redes sociales en octubre de 2020, la actual vicepresidenta usó esta frase para referirse a parte del gabinete de Alberto Fernández."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Frases Memorables",
    "Pregunta": "¿Quién dijo \"Suiza es más tranquilo, pero más aburrido\"?",
    "Respuesta correcta": "Sabina Frederic",
    "Respuesta incorrecta 1": "Aníbal Fernández",
    "Respuesta incorrecta 2": "Sergio Berni",
    "Descripción": "La ex titular del Ministerio de Seguridad dijo esta frase en agosto de 2021 al hablar sobre la inseguridad en Argentina."
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Legislativas",
    "Pregunta": "¿Quienes forman la Asamblea Legislativa?",
    "Respuesta correcta": "Diputados + Senado",
    "Respuesta incorrecta 1": "Senado + Gabinete",
    "Respuesta incorrecta 2": "sólo el Senado",
    "Descripción": "Asamblea Legislativa es la reunión conjunta y simultánea de la Cámara de Senadores y de la Cámara de Diputados. Se reune los 1ro de marzo de cada año, para dar comienzo a las sesiones."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Legislativas",
    "Pregunta": "¿Quién preside la Cámara de Diputados?",
    "Respuesta correcta": "Sergio Massa",
    "Respuesta incorrecta 1": "Máximo Kirchner",
    "Respuesta incorrecta 2": "Anibal Fernández",
    "Descripción": "Sergio Massa preside la Cámara de Diputados desde el 10 de diciembre de 2019."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué período legislativo comenzó el 1 de marzo de 2021?",
    "Respuesta correcta": 139,
    "Respuesta incorrecta 1": 125,
    "Respuesta incorrecta 2": 143,
    "Descripción": "El primer período de sesiones fue en el año 1862. El mensaje primer mensaje al Congreso fue dirigido en 1863 por el entonces Presindete Bartolomé Mitre."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Legislativas",
    "Pregunta": "¿En qué año el Congreso sancionó más leyes?",
    "Respuesta correcta": 2020,
    "Respuesta incorrecta 1": 2019,
    "Respuesta incorrecta 2": 2021,
    "Descripción": "En 2020, el Congreso sesionó 48 veces y aprobó 65 leyes, un 66% más de leyes que en 2019."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Legislativas",
    "Pregunta": "¿En qué año se inauguró el edificio del Palacio del Congreso?",
    "Respuesta correcta": "En 1906",
    "Respuesta incorrecta 1": "En 1896",
    "Respuesta incorrecta 2": "En 1946",
    "Descripción": "La obra se inició en 1897, pero el Palacio fue ianugurado el 12 de mayo de 1906, en la apertura del 45º Período Legislativo. La obra fue concluida en 1946."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Legislativas",
    "Pregunta": "Además de legisladores y funcionarios autorizados ¿Quiénes pueden participar de una sesión secreta en el Congreso?",
    "Respuesta correcta": "Taquígrafos",
    "Respuesta incorrecta 1": "Prensa autorizada por la cámara",
    "Respuesta incorrecta 2": "Nadie más puede participar",
    "Descripción": "Taquígrafas y taquígrafos. Tienen que jurar guardar el secreto."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántas veces se puede renovar una banca en el Congreso?",
    "Respuesta correcta": "No tiene límites",
    "Respuesta incorrecta 1": "Solo dos",
    "Respuesta incorrecta 2": "Solo dos consecutivas",
    "Descripción": "Como en muchos otros países, las bancas en el Congreso pueden ser renovadas indefinidamente."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Legislativas",
    "Pregunta": "Según la Constitución, ¿Qué renta anual es necesaria para aspirar a una banca en el Senado?",
    "Respuesta correcta": "2 mil pesos fuertes",
    "Respuesta incorrecta 1": "2 mil dólares",
    "Respuesta incorrecta 2": "100 litros de combustible",
    "Descripción": "Según el artículo 55 de la Constitución, para integrar el Senado es necesario \"disfrutar de una renta anual de dos mil pesos fuertes o de una entrada equivalente\"."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de los siguientes no pertenece al Poder Legislativo?",
    "Respuesta correcta": "Sindicatura Genral de la Nación (SIGEN)",
    "Respuesta incorrecta 1": "Auditoría General de la Nación (AGN)",
    "Respuesta incorrecta 2": "Biblioteca del Congreso",
    "Descripción": "La Sindicatura General de la Nación (SIGEN) es el órgano rector del sistema de control interno de la gestión del sector público y es parte del Poder Ejecutivo ."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué cámara ingresan las iniciativas populares?",
    "Respuesta correcta": "Diputados",
    "Respuesta incorrecta 1": "Senado",
    "Respuesta incorrecta 2": "Se sortea",
    "Descripción": "Las iniciativas populares deben ingresar por la Cámara de Diputados. La cámara tiene la obligación de tratar el proyecto, para aprobarlo o rechazarlo."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Legislativas",
    "Pregunta": "¿Según la Constitución, cada cuántos años debería reverse la conformación de la Cámara de Diputados?",
    "Respuesta correcta": "Después de cada censo",
    "Respuesta incorrecta 1": "Cada 10 años",
    "Respuesta incorrecta 2": "Cuando se sanciona una ley al respecto",
    "Descripción": "Después de cada censo nacional se actualiza la cantidad de bancas en la Cámara de Diputados, con el criterio de que a ningún distrito se le puede disminuir la cantidad de bancas."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué porcentaje del total de la Cámara de Diputados son mujeres?",
    "Respuesta correcta": "42%",
    "Respuesta incorrecta 1": "38%",
    "Respuesta incorrecta 2": "55%",
    "Descripción": "De acuerdo al Directorio Legislativo 2020-2021, 109 de 257 bancas están ocupadas por mujeres."
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál es la carrera universitaria más elegida por los actuales senadores del Congreso?",
    "Respuesta correcta": "Abogacía",
    "Respuesta incorrecta 1": "Ciencias Políticas",
    "Respuesta incorrecta 2": "Ingeniería",
    "Descripción": "De acuerdo al Directorio Legislativo 2020-2021, de un total de 72 senadoras, 38 estudiaron abogacía. Es la carrera universitaria más elegida en el Senado."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué porcentaje de los actuales diputados declaró haber tenido una actividad privada previa a asumir su banca?",
    "Respuesta correcta": "53%",
    "Respuesta incorrecta 1": "37%",
    "Respuesta incorrecta 2": "70%",
    "Descripción": "Este dato surge de la información recabada en el Directorio Legislativo 2020-2021."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos años tenía Carlos Menem cuando asumió como senador en 2017?",
    "Respuesta correcta": 87,
    "Respuesta incorrecta 1": 84,
    "Respuesta incorrecta 2": 81,
    "Descripción": "Carlos Menem fue el senador de mayor edad en la historia del Congreso al asumir su cargo en 2017."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Legislativas",
    "Pregunta": "De las cuatro autoridades de la Cámara de Diputados, ¿cuántas son mujeres?",
    "Respuesta correcta": 0,
    "Respuesta incorrecta 1": 1,
    "Respuesta incorrecta 2": 2,
    "Descripción": "La última mujer que ocupó un cargo de autoridad de cámara fue la mendocina Patrica Gimenez que ocupó la vicepresidencia segunda, cargo que dejó en 2017."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Legislativas",
    "Pregunta": "De las cinco autoridades de la Cámara de Senadores, ¿cuántas son mujeres?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 2,
    "Respuesta incorrecta 2": 0,
    "Descripción": "La presidenta es Cristina Kirchner,  Claudia Ledesma Abdala de Sgo del Estero es la presidenta provisional y Laura Rodríguez Machado de Córdoba es vicepresidenta segunda."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos mandatos como diputada ha tenido Graciela Camaño?",
    "Respuesta correcta": 8,
    "Respuesta incorrecta 1": 7,
    "Respuesta incorrecta 2": 6,
    "Descripción": "8 mandatos (1987-91; 1997-2001; 2001-02; 2003-07; 2007-11; 2011-15; 2015-19; 2019-2023)."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos legisladores han sido desaforados desde el retorno de la democracia?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 6,
    "Respuesta incorrecta 2": 1,
    "Descripción": "Formalmente fueron desaforadas tres personas en la Cámara de Diputados: Angeloz, Patti y De Vido. Patti fue desaforado antes de jurar como diputado."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué Jefe de Gabinete asistió más veces a dar su informe de gestión al Congreso?",
    "Respuesta correcta": "Marcos Peña",
    "Respuesta incorrecta 1": "Jorge Capitanich",
    "Respuesta incorrecta 2": "Santiago Cafiero",
    "Descripción": "Entre 2016 y 2019, Marcos Peña asistió 20 veces al Congreso, 11 veces a la Cámara de Diputados y 9 veces al Senado. Es el jefe de Gabinete que más veces asistió al Congreso."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de las siguientes no es más senadora?",
    "Respuesta correcta": "Cristina Kirchner",
    "Respuesta incorrecta 1": "Juliana Di Tullio",
    "Respuesta incorrecta 2": "Gladys González",
    "Descripción": "Cristina Kirchner es la presidenta del Senado por su cargo en funciones como vicepresidenta de la Nación. Desde 2019, no es más senadora."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántos períodos legislativos tiene vigencia un pedido de juicio político?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 2,
    "Respuesta incorrecta 2": "No caducan",
    "Descripción": "Los pedidos de juicio político son proyectos de resolución con la particularidad de que tienen 3 años de vigencia."
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Legislativas",
    "Pregunta": "¿Qué legislador actual fue medallista olímpico?",
    "Respuesta correcta": "Carlos Espínola",
    "Respuesta incorrecta 1": "Daniel Scioli",
    "Respuesta incorrecta 2": "Carlos Castagneto",
    "Descripción": "En Atlanta, Sídney, Atenas y Pekín, \"Camau\" Espínola ganó cuatro medallas olímpicas, dos de plata y dos de bronce."
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito es senador Mariano Recalde?",
    "Respuesta correcta": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "En diciembre de 2019, Recalde asumió como senador nacional por la Ciudad de Buenos Aires. Previamente, fue Presidente de Aerolíneas Argentinas y Legislador Porteño."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito es senadora Gladys González?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "En diciembre de 2017 asumió como senador nacional por la Provincia de Buenos Aires. Previamente, fue diputada por el mismo distrito."
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál de las siguientes provincias tiene más bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Entre Ríos",
    "Respuesta incorrecta 1": "Santiago del Estero",
    "Respuesta incorrecta 2": "Jujuy",
    "Descripción": "A la provincia de Entre Ríos le corresponden 9 bancas, mientras que a Santiago del Estero tiene 7 bancas y Jujuy 6."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Legislativas",
    "Pregunta": "¿Por qué distrito fue senadora Cristina Kirchner entre 2001 y 2005?",
    "Respuesta correcta": "Santa Cruz",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Ciudad de Buenos Aires",
    "Descripción": "En el período anterior, entre 1997 y 2001, fue diputada nacional por el mismo distrito."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuántas veces fue elegido Carlos Menem como senador por La Rioja?",
    "Respuesta correcta": "Tres",
    "Respuesta incorrecta 1": "Cinco",
    "Respuesta incorrecta 2": "Dos",
    "Descripción": "Carlos Menem ingresó al Senado el 10 de diciembre de 2005. Renovó su banca en 2011 y en 2017."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Legislativas",
    "Pregunta": "¿Cuál fue el último presidente no bonaerense de la Cámara de Diputados?",
    "Respuesta correcta": "Eduardo Fellner",
    "Respuesta incorrecta 1": "Julián Domínguez",
    "Respuesta incorrecta 2": "Eduardo Camaño",
    "Descripción": "El útlmo presidente no bonaerense de la Cámara fue Eduardo Fellner de Jujuy. Luego lo sucedieron los bonaerenses Julián Dominguez, Emilio Monzó y, ahora, Sergio Massa."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Legislativas",
    "Pregunta": "¿Quién presidió la Cámara de Diputados entre 2015 y 2019?",
    "Respuesta correcta": "Emilio Monzó",
    "Respuesta incorrecta 1": "Sergio Massa",
    "Respuesta incorrecta 2": "Cristina Kirchner",
    "Descripción": "Emilio Monzó fue el presidente de la Cámara de Diputados desde diciembre de 2015 al 2019. Fue sucedido por Sergio Massa, que ocupa la presidencia hoy."
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Perú?",
    "Respuesta correcta": "Pedro Castillo",
    "Respuesta incorrecta 1": "Martín Vizcarra",
    "Respuesta incorrecta 2": "Jair Bolsonaro",
    "Descripción": "Pedro Castillo es el presidente de la República del Perú desde julio de 2021, luego de ganar por balotaje con el 50.13% de los votos."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Ecuador?",
    "Respuesta correcta": "Guillermo Lasso",
    "Respuesta incorrecta 1": "Lenín Moreno",
    "Respuesta incorrecta 2": "Rafael Correa",
    "Descripción": "Guillermo Lasso es el presidente de la República del Ecuador desde julio de 2021, luego de ganar por balotaje con el 52,36% de votos"
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes países tienen un poder legislativo unicameral?",
    "Respuesta correcta": "Perú",
    "Respuesta incorrecta 1": "Bolivia",
    "Respuesta incorrecta 2": "Paraguay",
    "Descripción": "Desde el año 1995, Perú tiene un Congreso unicameral. La eliminación de una cámara se estableció con la reforma constitucional del 93."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Latinoamérica",
    "Pregunta": "¿A partir de qué año podrán ser reelectos los senadores mexicanos?",
    "Respuesta correcta": "Desde 2024",
    "Respuesta incorrecta 1": "No pueden",
    "Respuesta incorrecta 2": "Desde 1917",
    "Descripción": "En 2014 el Congreso mexicano aprobó una reforma política que habilita la reelección de senadores, a partir de los comicios de 2024."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Latinoamérica",
    "Pregunta": "En México los proyectos de ley se distinguen por:",
    "Respuesta correcta": "Título",
    "Respuesta incorrecta 1": "Número",
    "Respuesta incorrecta 2": "Color",
    "Descripción": "Los proyectos de ley en México no tienen número. Se identifican según su nombre."
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes países no publica los proyectos de ley del Congreso?",
    "Respuesta correcta": "Honduras",
    "Respuesta incorrecta 1": "Guatemala",
    "Respuesta incorrecta 2": "Venezuela",
    "Descripción": "Los proyectos de ley en Honduras son accesibles solo mediante un pedido de acceso a la información pública."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuanto dura en su cargo el presidente del Mercosur?",
    "Respuesta correcta": "6 meses",
    "Respuesta incorrecta 1": "4 años",
    "Respuesta incorrecta 2": "1 año",
    "Descripción": "La presidencia del Mercosur es un cargo rotativo, es ocupada por un jefe de Estado de uno de los países miembros durante seis meses."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En cuál de los siguientes países los proyectos de ley no caducan?",
    "Respuesta correcta": "Brasil",
    "Respuesta incorrecta 1": "Chile",
    "Respuesta incorrecta 2": "Paraguay",
    "Descripción": "En Brasil los proyectos de ley no sólo no pierden vigencia, sino que tiene mecanismos para permitir que las iniciativas sobre temáticas similares confluyan."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes ex-presidentes de América Latina presentó su renuncia?",
    "Respuesta correcta": "Horacio Cartés",
    "Respuesta incorrecta 1": "Michel Temer",
    "Respuesta incorrecta 2": "Dilma Russef",
    "Descripción": "En 2018, el ex-presidente de Paraguay, Horacio Cartés presentó su renuncia. Al no ser aceptada por el Congreso: Cartés la retiró y terminó su mandato como presidente."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuántos Congresos en Sudamérica tienen sólo una Cámara?",
    "Respuesta correcta": 3,
    "Respuesta incorrecta 1": 5,
    "Respuesta incorrecta 2": 1,
    "Descripción": "Perú, Venezuela y Ecuador son los 3 países de Sudamérica con parlamentos unicamerales."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes Congresos está compuesto por más legisladores?",
    "Respuesta correcta": "Argentina",
    "Respuesta incorrecta 1": "Chile",
    "Respuesta incorrecta 2": "Colombia",
    "Descripción": "Argentina tiene 329 legisladores a nivel nacional. Colombia tiene 279 y Chile 198."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Qué significan las letras de AMLO, nombre con el que es conocido el presidente electo de México?",
    "Respuesta correcta": "Andrés Manuel López Obrador",
    "Respuesta incorrecta 1": "Antonio Marcos López Obrador",
    "Respuesta incorrecta 2": "Armando Manuel López Obrador",
    "Descripción": "Andrés Manuel López Obrador, AMLO, fue electo presidente de México en 2018 con el 53.19% de los votos, 30 puntos más que quien salió segundo."
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país no existe la segunda vuelta electoral?",
    "Respuesta correcta": "México",
    "Respuesta incorrecta 1": "Colombia",
    "Respuesta incorrecta 2": "Argentina",
    "Descripción": "En México las elecciones presidenciales se definen por cantidad de votos, la presidencia es de quien que supera en más de 1 voto a sus adversarios."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Uruguay?",
    "Respuesta correcta": "Luis Lacalle Pou",
    "Respuesta incorrecta 1": "Pepe Mujica",
    "Respuesta incorrecta 2": "Tabaré Vázquez",
    "Descripción": "Luis Lacalle Pou es el presidente de la República Oriental del Uruguay, desde marzo de 2020, luego de ganar por balotaje con el 50.79% de votos"
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En cuál de los siguientes países los legisladores no pueden renunciar a sus bancas?",
    "Respuesta correcta": "Perú",
    "Respuesta incorrecta 1": "Argentina",
    "Respuesta incorrecta 2": "Brasil",
    "Descripción": "Según la Constitución peruana, los cargos legislativos son irrenunciables."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Latinoamérica",
    "Pregunta": "¿De qué país es la funcionaria que llamó a los países del Grupo de Lima \"cachorros del imperio\"?",
    "Respuesta correcta": "Venezuela",
    "Respuesta incorrecta 1": "Ecuador",
    "Respuesta incorrecta 2": "Nicaragua",
    "Descripción": "La actual Vicepresidenta de Venezuela, Delcy Rodriguez, insultó a los países integrantes del Grupo de Lima calificandolos de “cachorros del imperio”, entre otras cosas."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país un candidato presidencial reveló a un grupo de niños que Santa Claus no existe?",
    "Respuesta correcta": "México",
    "Respuesta incorrecta 1": "Nicaragua",
    "Respuesta incorrecta 2": "Venezuela",
    "Descripción": "Jaime Rodriguez Calderón (El Bronco) les reveló a un grupo de niños y niñas que \"el Papá de ustedes es Santa Claus, ¿ya sabían eso?\" y fue muy criticado en redes sociales."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Chile?",
    "Respuesta correcta": "Sebastián Piñera",
    "Respuesta incorrecta 1": "Michelle Bachelet",
    "Respuesta incorrecta 2": "Mario Abdo Benítez",
    "Descripción": "Sebastián Piñera es el presidente de la República de Chile, desde 2018, luego de ganar por balotaje con el 54.58 % de los votos. En marzo de 2022 dejará su cargo."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Latinoamérica",
    "Pregunta": "¿En qué país de América Latina el segundo candidato a presidente más votado obtiene como compensación una banca en el Senado?",
    "Respuesta correcta": "Colombia",
    "Respuesta incorrecta 1": "El Salvador",
    "Respuesta incorrecta 2": "México",
    "Descripción": "En el 2015 Colombia aprobó la Reforma de Equilibrio de Poderes según la cual la segunda pareja con más votos en las elecciones presidenciales obtiene dos bancas en el Senado."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Qué presidente de la región se autodenomina \"el Dictador más cool del mundo mundial\" en Twitter?",
    "Respuesta correcta": "Nayib Bukele (El Salvador)",
    "Respuesta incorrecta 1": "Alejandro Giammattei (Guatemala)",
    "Respuesta incorrecta 2": "Daniel Ortega (Nicaragua)",
    "Descripción": "Luego de una serie de manifestaciones en 2021, y ante quienes lo tildaron de \"dictador\", Nayib Bukele cambio su descripción en twitter."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Latinoamérica",
    "Pregunta": "¿El poder legislativo de que país se llama \"Asamblea Nacional del Poder Popular\"?",
    "Respuesta correcta": "Cuba",
    "Respuesta incorrecta 1": "Venezuela",
    "Respuesta incorrecta 2": "Nicaragua",
    "Descripción": "Según la Constitución cubana, la Asamblea Nacional del Poder Popular es el único poder del cual emana la soberanía en el país."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el presidente de Cuba?",
    "Respuesta correcta": "Miguel Díaz-Canel",
    "Respuesta incorrecta 1": "Fidel Castro",
    "Respuesta incorrecta 2": "Laurentino Cortizo",
    "Descripción": "Miguel Mario Díaz-Canel Bermúdez es presidente de Cuba desde octubre de 2019 y primer secretario del Partido Comunista de Cuba, ​ elegido por la Asamblea en sustitución de Raúl Castro"
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuantos candidatos opositores encarceló el gobierno de Daniel Ortega en 2021 para impedir su participación en las elecciones presidenciales de 2021?",
    "Respuesta correcta": 37,
    "Respuesta incorrecta 1": 8,
    "Respuesta incorrecta 2": 55,
    "Descripción": "Entre los detenidos figuran 7 precandidatos presidenciales, acusados de “traicionar a la patria”. También fueron detenidos históricos miembros del sandinismo, activistas, empresarios y periodistas."
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Qué presidente latinoamericano interrumpió su discurso y se sacó una selfie durante su discurso en la Asamblea General de las Naciones Unidas en 2019?",
    "Respuesta correcta": "Nayib Bukele",
    "Respuesta incorrecta 1": "Andrés Manuel López Obrador",
    "Respuesta incorrecta 2": "Nicolás Maduro",
    "Descripción": "Durante la la Asamblea General 74º de la ONU, en 2019, el presidente de El Salvador, Nayib Bukele, se tomó una selfie antes de su discurso para marcar la \"desactualización\" del formato de la Asamblea."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál fue el Jefe de Estado que ingresó al Congreso, interrumpiendo la sesión en la que se trataba un proyecto de su interés?",
    "Respuesta correcta": "Nayib Bukele",
    "Respuesta incorrecta 1": "Nicolás Maduro",
    "Respuesta incorrecta 2": "Daniel Ortega",
    "Descripción": "En 2020,  Nayib Bukele ingresó a la Asamblea Nacional de El Salvador con tropas del Ejército Nacional para presionar a la oposición por la aprobación de un crédito para financiar su plan contra la delincuencia,"
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de los siguientes presidentes no dio positivo por COVID-19 a lo largo de la pandemia?",
    "Respuesta correcta": "Iván Duque",
    "Respuesta incorrecta 1": "Jair Bolsonaro",
    "Respuesta incorrecta 2": "Andres Manuel López Obrador",
    "Descripción": "El presidente de Colombia no se ha contagiado de COVID-19 hasta el momento. En contrapartida, Jair Bolsonaro y Andrés Manuel López Obrador sufrieron sintomas leves por la enfermedad."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Qué mandatario declaró recientemente el comienzo de la Navidad en su país?",
    "Respuesta correcta": "Nicolás Maduro",
    "Respuesta incorrecta 1": "Iván Duque",
    "Respuesta incorrecta 2": "Daniel Ortega",
    "Descripción": "El 5 de octubre de 2021. el Presidente Nicolás Maduro anunció la llegada de la Navidad a Venezuela. \"Llegó la Navidad, empezando octubre\", dijo el mandatario."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Quién es el Presidente de Costa Rica?",
    "Respuesta correcta": "Carlos Alvarado",
    "Respuesta incorrecta 1": "Alejandro Giammattei",
    "Respuesta incorrecta 2": "Laurentino Cortizo",
    "Descripción": "Carlos Alvarado es presidente de Costa Rica desde el 8 de mayo de 2018. Su mandato de 4 años finaliza en 2022."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de estos países no forma parte de la Comunidad Andina?",
    "Respuesta correcta": "Chile",
    "Respuesta incorrecta 1": "Perú",
    "Respuesta incorrecta 2": "Ecuador",
    "Descripción": "Los integrantes de la Comunidad Andina son Colombia, Bolivia, Ecuador y Perú."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Latinoamérica",
    "Pregunta": "¿Cuál de estos países no forma parte de la Alianza del Pacífico?",
    "Respuesta correcta": "Ecuador",
    "Respuesta incorrecta 1": "Colombia",
    "Respuesta incorrecta 2": "Chile",
    "Descripción": "Los integrantes de la Alianza del Pacífico son Chile, Colombia, Perú y México."
  },
  {
    "Pregunta Nº": "",
    "Tema": "",
    "Pregunta": "",
    "Respuesta correcta": "",
    "Respuesta incorrecta 1": "",
    "Respuesta incorrecta 2": "",
    "Descripción": ""
  },
  {
    "Pregunta Nº": 1,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Diego Santilli?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Diego Santilli encabeza la lista de Diputados de Juntos por el Cambio. En 2019 fue electo vicejefe de la Ciudad de Buenos Aires."
  },
  {
    "Pregunta Nº": 2,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Roberto Mirabella?",
    "Respuesta correcta": "Santa Fe",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Córdoba",
    "Descripción": "Roberto Mirabella es candidato a diputado por la Provincia de Santa Fe. Actualemente es Senador del bloque del Frente de Todos."
  },
  {
    "Pregunta Nº": 3,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Quién es presidente del Bloque del Frente de Todos en la Cámara de Diputados?",
    "Respuesta correcta": "Máximo Kirchner",
    "Respuesta incorrecta 1": "Mayra Mendoza",
    "Respuesta incorrecta 2": "Oscar Romero",
    "Descripción": "Máximo Kirchner es el prsidente del Bloque, desde diciembre de 2019."
  },
  {
    "Pregunta Nº": 4,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito fue senadora Cristina Fernández entre 2001 y 2005?",
    "Respuesta correcta": "Santa Cruz",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Ciudad de Buenos Aires",
    "Descripción": "En el período anterior, entre 1997 y 2001, fue diputada nacional por el mismo distrito."
  },
  {
    "Pregunta Nº": 5,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuántas bancas pertenecen a la provincia de Buenos Aires en la Cámara de Diputados?",
    "Respuesta correcta": 70,
    "Respuesta incorrecta 1": 60,
    "Respuesta incorrecta 2": 50,
    "Descripción": "El número de diputados por distrito es proporcional a su población. Se eligen mediante el sistema proporcional D'Hont"
  },
  {
    "Pregunta Nº": 6,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuál de las siguientes provincias tiene más bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Entre Ríos",
    "Respuesta incorrecta 1": "Santiago del Estero",
    "Respuesta incorrecta 2": "Jujuy",
    "Descripción": "A la provincia de Entre Ríos le corresponden 9 bancas, mientras que a Santiago del Estero tiene 7 bancas y a Jujuy 6."
  },
  {
    "Pregunta Nº": 7,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidata Victoria Tolosa Paz?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Victoria Tolosa Paz encabeza la lista como candidata a diputada del Frente de Todos. Actualmente, es Secretaria Ejecutiva​ del Consejo Nacional de Coordinación de Políticas Sociales."
  },
  {
    "Pregunta Nº": 8,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidata María Eugenia Vidal?",
    "Respuesta correcta": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 1": "Buenos Aires",
    "Respuesta incorrecta 2": "Córdoba",
    "Descripción": "María Eugenia Vidal encabeza la lista como candidata a diputada de Juntos por el Cambio en la Ciudad de Buenos Aires. Anteriormente, fue Gobernadora de la Provincia."
  },
  {
    "Pregunta Nº": 9,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se renuevan las bancas en el Senado?",
    "Respuesta correcta": "Por Tercios",
    "Respuesta incorrecta 1": "Por mitades",
    "Respuesta incorrecta 2": "Se renueva por completo",
    "Descripción": "El senado se renueva por tercios: 24 bancas cada 2 años."
  },
  {
    "Pregunta Nº": 10,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se renuevan las bancas en la Cámara de Diputados?",
    "Respuesta correcta": "Por mitades",
    "Respuesta incorrecta 1": "Por Tercios",
    "Respuesta incorrecta 2": "Se renueva por completo",
    "Descripción": "La Cámara de Diputados se renueva por mitades: 127 (o 130) bancas cada 2 años."
  },
  {
    "Pregunta Nº": 11,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Quiénes de los siguientes grupos sociales no tienen la obligación de votar?",
    "Respuesta correcta": "Mayores de 70 años",
    "Respuesta incorrecta 1": "Médicos de guardia",
    "Respuesta incorrecta 2": "Fuerzas de seguridad",
    "Descripción": "Las personas mayores de 70 no reciben sanciones si no se presentan a votar."
  },
  {
    "Pregunta Nº": 12,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuál de estos documentos puedo presentar para votar?",
    "Respuesta correcta": "DNI",
    "Respuesta incorrecta 1": "Pasaporte",
    "Respuesta incorrecta 2": "Partida de nacimiento",
    "Descripción": "Para votar se puede presentar el DNI que figura en el padrón o una versión posterior. También se aceptan la Libreta de Enrolamiento o la Libreta Cívica, si son los que figuran en el Padrón."
  },
  {
    "Pregunta Nº": 13,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se financian las campañas electorales?",
    "Respuesta correcta": "Aportes públicos y privados",
    "Respuesta incorrecta 1": "Aportes públicos",
    "Respuesta incorrecta 2": "Aportes privados",
    "Descripción": "En Argentina, las campañas electorales de los partidos políticos se financian con un modelo mixto por el cual los partidos obtienen financiamiento público y del sector privado."
  },
  {
    "Pregunta Nº": 14,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuál es la multa por no votar en las Primarias (PASO)?",
    "Respuesta correcta": "50 pesos",
    "Respuesta incorrecta 1": "500 pesos",
    "Respuesta incorrecta 2": "5000 pesos",
    "Descripción": "La multa por no votar en un acto electoral es de cincuenta pesos ($50). Si no se registra tu voto ni en las primarias ni en las elecciones generales, la multa total es de ciento cincuenta pesos ($150)."
  },
  {
    "Pregunta Nº": 15,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuál es la pena si siendo autoridad de mesa no te presentás?",
    "Respuesta correcta": "Prisión de 6 meses a 2 años",
    "Respuesta incorrecta 1": "Nada, no hay",
    "Respuesta incorrecta 2": "Pagar una multa",
    "Descripción": "Si fuiste desgnada-o autoridad de mesa, presentarse es una obligación cívica.  No presentarse es un delito electoral que tiene una pena de prisión de seis meses a dos años."
  },
  {
    "Pregunta Nº": 16,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cómo se llaman las personas designadas por los partidos políticos que están en las Mesas Electorales?",
    "Respuesta correcta": "Fiscales",
    "Respuesta incorrecta 1": "Suplentes",
    "Respuesta incorrecta 2": "Partidistas",
    "Descripción": "Las-os fiscales de mesa son designadas-os por los partidos políticos para controlar la elección. Su función es vigilar que se respete la Ley Electoral y cuidar las boletas de su partido."
  },
  {
    "Pregunta Nº": 17,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Las donaciones privadas a una campaña política tienen tope?",
    "Respuesta correcta": "Sí",
    "Respuesta incorrecta 1": "No",
    "Respuesta incorrecta 2": "Depende de la provincia",
    "Descripción": "Los partidos no pueden recibir de una misma persona (humana o jurídica) un monto superior al dos por ciento (2%) de los gastos permitidos para la campaña."
  },
  {
    "Pregunta Nº": 18,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Todos los partidos reciben el mismo dinero por parte del Estado?",
    "Respuesta correcta": "No",
    "Respuesta incorrecta 1": "Sí",
    "Respuesta incorrecta 2": "Depende de la provincia",
    "Descripción": "La Ley establece el reparto de los fondos públicos: el 50% de los fondos se distribuyen de forma igualitaria, y el otro 50% se distribuye en forma proporcional de acuerdo al resultado de la elección anterior."
  },
  {
    "Pregunta Nº": 19,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Facundo Manes?",
    "Respuesta correcta": "Buenos Aires",
    "Respuesta incorrecta 1": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 2": "Santa Fe",
    "Descripción": "Facundo Manes integra la lista de Diputados de Juntos por el Cambio. Nunca antes ha ocupado un cargo público."
  },
  {
    "Pregunta Nº": 20,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Por qué distrito es candidato Leandro Santoro?",
    "Respuesta correcta": "Ciudad de Buenos Aires",
    "Respuesta incorrecta 1": "Santa Fe",
    "Respuesta incorrecta 2": "Córdoba",
    "Descripción": "Leandro Santoro encabeza la lista del Frente de Todos en la Ciudad de Buenos Aires. Actualemente, es Legislador Porteño."
  },
  {
    "Pregunta Nº": 21,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Qué día asumen su mandato los legisladores electos el 14 de noviembre de 2021?",
    "Respuesta correcta": "El 10 de diciembre",
    "Respuesta incorrecta 1": "El 15 de noviembre",
    "Respuesta incorrecta 2": "El 31 de diciembre",
    "Descripción": "Legisladores y legisladoras electas asumirán sus bancas el 10 de diciembre de 2021."
  },
  {
    "Pregunta Nº": 22,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuánto dura el mandato de un/a diputado/a de la Nación?",
    "Respuesta correcta": "4 años",
    "Respuesta incorrecta 1": "6 años",
    "Respuesta incorrecta 2": "5 años",
    "Descripción": "Las y los diputados tienen un mandato de 4 años"
  },
  {
    "Pregunta Nº": 23,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuánto dura el mandato de un/a senador/a de la Nación?",
    "Respuesta correcta": "6 años",
    "Respuesta incorrecta 1": "4 años",
    "Respuesta incorrecta 2": "Vitalicio",
    "Descripción": "Las y los senadores tienen un mandato de 6 años"
  },
  {
    "Pregunta Nº": 24,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Las personas electas para el Congreso pueden ser reelectas?",
    "Respuesta correcta": "Sí",
    "Respuesta incorrecta 1": "No",
    "Respuesta incorrecta 2": "Solo en Diputados",
    "Descripción": "Las bancas en el Congreso Nacional pueden renovarse indefinidamente en ambas cámaras."
  },
  {
    "Pregunta Nº": 25,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Quién elige al presidente de la Cámara de Diputados?",
    "Respuesta correcta": "la Cámara de Diputados",
    "Respuesta incorrecta 1": "El presidente",
    "Respuesta incorrecta 2": "El presidente con acuerdo de la Corte",
    "Descripción": "La Presidencia de la Cámara de Diputados se vota entre las y los legisladores que integran el cuerpo. El presidente debe ser una persona con mandato vigente en la Cámara."
  },
  {
    "Pregunta Nº": 26,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuánto tiempo dura el mandato del diputado que es electo presidente de la Cámara de Diputados?",
    "Respuesta correcta": "1 año",
    "Respuesta incorrecta 1": "4 años",
    "Respuesta incorrecta 2": "6 años",
    "Descripción": "La Presidencia de la Cámara de Diputados debe renovarse todos los años, con reelección indefinida."
  },
  {
    "Pregunta Nº": 27,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cúantos bancas en la Cámara de Diputados renueva la provincia de Buenos Aires?",
    "Respuesta correcta": 35,
    "Respuesta incorrecta 1": 70,
    "Respuesta incorrecta 2": 40,
    "Descripción": "Si bien la provincia de Buenos Aires tiene 70 bancas, cada dos años se renueva por mitades. Así, en 2021 se elegirán 35 bancas en la Cámara."
  },
  {
    "Pregunta Nº": 28,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuántos Diputados renueva la Ciudad Autónoma de Buenos Aires?",
    "Respuesta correcta": 13,
    "Respuesta incorrecta 1": 15,
    "Respuesta incorrecta 2": 25,
    "Descripción": "Si bien la Ciudad de Buenos Aires tiene 25 bancas, cada dos años se renueva por mitades. Así, en 2021 se elegirán 13 bancas en la Cámara."
  },
  {
    "Pregunta Nº": 29,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuántas provincias eligen Diputados?",
    "Respuesta correcta": 23,
    "Respuesta incorrecta 1": 24,
    "Respuesta incorrecta 2": 8,
    "Descripción": "Hay elecciones en 24  distritos electorales, pero solo 23 de ellos son provincias. Si bien coloquialmente se menciona a la Ciudad Autónoma de Buenos Aires como una provinca, estrictamente no lo es."
  },
  {
    "Pregunta Nº": 30,
    "Tema": "Elecciones 2021",
    "Pregunta": "¿Cuántos senadores se eligen por la Ciudad Autónoma de Buenos Aires en 2021?",
    "Respuesta correcta": 0,
    "Respuesta incorrecta 1": 3,
    "Respuesta incorrecta 2": 2,
    "Descripción": "Ninguno. La Ciudad Autónoma de Buenos Aires no elige senadores nacionales en 2021, sino en 2025."
  }
];

const formattedQuestion = ({ "Tema": topic, "Pregunta": text, "Respuesta correcta": answer,
    "Respuesta incorrecta 1": firstIncorrect, "Respuesta incorrecta 2": secondIncorrect, "Descripción": description }) => {

  const toAnswer = _.toString;
  return {
    topic,
    text,
    description,
    answer: toAnswer(answer),
    incorrectAnswers: _.map([ firstIncorrect, secondIncorrect ], toAnswer)
  }
};

const isValid = ({ text, answer, incorrectAnswers }) => {
  const hasIncorrectAnswers = !_(incorrectAnswers).compact().isEmpty();
  console.log({ text, answer, hasIncorrectAnswers })
  return text && answer && hasIncorrectAnswers;
};

const formattedQuestions = _(questions).map(formattedQuestion).filter(isValid).value();

console.log(JSON.stringify(formattedQuestions));