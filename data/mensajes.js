
const mensajes = [
    {
        tipo: "normal",
        fecha: null,
        titulo: "No sé que me hiciste 💙",
        texto: "Pero muchas veces pienso en lo linda que eres, en lo increíble y maravilloso de tí, me dejaste loco por tí y me encanta jaja."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Por si no te lo había dicho...",
        texto: "Me hace muy muy feliz tenerte en mi vida. Incluso en los días aburridos, de alguna manera haces que todo se sienta increíble y perfecto."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te amoo 👀",
        texto: "Y quiero que sepas que todo de tí me encanta, aunque sea algo muy raro, para mí es increíble y hermoso."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Xd te amo rarita",
        texto: "A veces si pieno en lo extraño que sería hacerlo contigo, porque no veremos nada con lujuria, a mí al menos me daría risa no sé por qué jajajajaja."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "El raro soy yo",
        texto: "Me hiciste ver cosas de maneras distintas, tú me hiciste sentir cosas que jamás había sentido y hasta me hiciste ser migajero jajaja."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "💙💙💙",
        texto: "Eres perfecta porque eres imperfecta."
    },

{
        tipo: "normal",
        fecha: null,
        titulo: "Amo la Geometría",
        texto: "Bájate la tangente que ando bien trigonométrico, y te voy a meter la hipotenusa por el cateto opuesto hasta dejarte bien adyacente."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Amo que seas así",
        texto: "Toda cachetoncita y tierna, con tu naris hecha por dioses y tus labios tan lindos, me encantas amoor."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "TE AMO",
        texto: "Te amoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Por si no te has dado cuenta",
        texto: "Siempre estoy pendiente de tí, tal vez no nos veamos en persona, pero si me preocupo por tí, piendo en tí y esa es una de las razones por las que te escribo mucho mientras desapareces jeje, te amo mucho amoo."
    },

{
        tipo: "normal",
        fecha: null,
        titulo: "Juguemos jeje",
        texto: "Me encanta jugar Roblox o Clash contigo, aunque jamás ganes en clash xd, pero me encanta y sé que puedes mejorar mucho mi amoor."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Eres increíble Gabyyyyyyyy",
        texto: "Estoy muyyy orgulloso de la increíble persona que eres, eres mi inspiración y motivación de cada día, te amooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Eres muy única",
        texto: "No hay nadie pero enserio, NADIE, que me haga sentir lo que siento por tí, es un Amor muy muy especial y diferente, es único como tú."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Xd",
        texto: "No sé que me hiciste, porque estoy loco por tí, eres tú y tus hermosos cachetes y tu narisita tan lindaaaaaaaaaaaaaaaaaaaaaaaaa."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "No puedo esperar",
        texto: "A verte en persona, ver lo chiquita y tierna que eres, lo preciosa y enojona, lo complicada y calenturienta muy de vez en cuando jajaja, te amo cachetona."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Tan increíble como raro",
        texto: "Ni siquiera nos hemos visto en persona y ya me diste el susto de mi vida xd, te amooooooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te extrañooooooooooooooooooooooo",
        texto: "Si estás leyendo esto es porque estamos dormidos y seguramente esto soñando contigo y me desperté extrañándote amoor."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te ver bien",
        texto: "No sé por qué a veces dices que te ves mal y que no eres linda y ajá, la verdad si eres bastante hermosa, estás preciosa y tierna Gabyyyyy."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Amo tu nombre",
        texto: "Me dí cuenta de que si borro la B de Gaby literl es Gay xd."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Por si lo pensaste",
        texto: "Es infinitamente más probable que me vuelva un Super Saiyajin a que te sea infiel."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Eres muy especial para mí",
        texto: "Por lo que pasó hace días, me dí cuenta de que me da Terror perderte, lloré y me sentí tan mal, me alegro de que todo esté bien ahora, enserio te has vuelto la persona más importante de mi vida y jamás de los jamases te cambiaría xd."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Rarita hermosa",
        texto: "Eres rara, hermosa y rara, algo complicada también, pero me encantas así jajaja, me enamoré de tantas cosas y una de esas es lo extraña que eres, te amooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te quiero abrazar",
        texto: "A veces pienso que abrazarte sería lindo y complicado como tú xd, por nuestra altura sería diferente pero ya pensé en cómo abrazarte y que mi altura no moleste jajaja."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te quiero besar",
        texto: "Siempre pienso en que tus labios sabrán a chocolate, aunque no sé realmente, pero tocará probar y darte unos 1000000000000000 besos para confirmarlo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Me costó hacer esto",
        texto: "No lo digo por los mensajes de amor xd, esos salen de mi corazón, lo digo por la página, me esforcé demasiado y me pasé en algunas cosas jaja pero ahora es lindo, te gusta y es una forma de hablar contigo si estar ahí."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Te lo tengo que confesar",
        texto: "Estás en el mejor lugar de mi corazón, ni mi mascota llega a ese punto, estás justo a la par, o un poco encima, de mi hermano menor, TE amoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "No sé que pensar de esto",
        texto: "La verdad no sé por qué un tiempo pasamos de enviar ropa para tí, a mandarnos puras lencerias xd, no es que sea malo pues porque no somos locos calenturientos, solo es raro jajajajaja, me encantas Gabyyyyyyyyy."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Por qué el 💙??????????",
        texto: "El 💙 es porque me encanta el azul a un nivel donde ni siquiera yo comprendo ¿por qué? es algo que desde siempre tengo jajaja, siempre me encantó el azul en niveles exagerados, y si existe algo que signifique Te amo y que además de eso tenga algo especial y único para mí, obvio lo usaré xd, por eso te mando el 💙 en lugar de uno normal, es mucho MUCHO más especial y demuestra el amor que siento por tí."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Easter-Egg",
        texto: "Sabías que cuando llegaste tú habían otras chicas que te hacían competencia???? jajaja, yo les gustaba y a mí no, porque a pesar de que me mandaba a la mrd, yo había visto algo muy MUY especial y hermoso en una chica toda seca, cortante y complicada. Al final eres mi novia y nunca me voy a arrepentir de mi decisión, eres perfecta Gabyyyyyyyyyy."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Tú eres...",
        texto: "Maravillosa, increíble, fantástica, perfecta, ideal, rara, complicada, algo enojona xd, hermosa, preciosa, linda, cachetona, tierna, adorable, guapa, extraña, inigualable, interesante, lo mejor de lo mejor, 1000000000000000000000000000/10 xd, top global, algo misteriosa, seca, poquito celosa xd, inteligente, brillante, genial xd, dormilona, tranquila, relajada, seria a veces jaja, Tú, crítica, piernona, qlona xd, analizadora. Pero al final me encantas tal y como eres Gabyyy y si no escribí más es porque no me dejaba la página jajajaja."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "No sé por qué pasa pero...",
        texto: "Me encanta que contigo puedo hablar de lo que sea, literal hemos hablado de cómo vamos a hacerlo xd o de qué lencerias usarías o nada más de ropa linda para tí, hemos hablado de nosotros, de nuestra vida y pues historia xd, de nuestros futuros hijos y de muchas más cosas, me encantas por muchas cosas amoor y ésta es una de las millones de cosas."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Un número no puede representarlo",
        texto: "Hay un número llamado Googolplex, 10 elevado a la 10 elevado a la 100, qué si escribieramos sus 0 en las páginas de un libro con 400 páginas más o menos, necesitaríamos 10 elevado a la 94 libros, y, según Wikipedia xd, la masa de todos esos libros necesarios para escribir un googolplex sería mucho mayor que la masa del universo observable por un factor aproximado de 5 por 10 elevado a 40. Pero ni siquiera eso se compara con el número de cosas que me gustan de tí amoor, Te amooooooooo Gabyyyyyyyyyy."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Más que las cosas que me gustan de tí",
        texto: "Mi amor por tí no cabría en un multiverso entero, mi amor por tí es tan perfecto que ocupa talvez menos que la Longitud del Planck, y es tan inmenso que no habría espacio sufieciente en la realidad para representar todo ese amor, así qué te amoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo."
    },

    {
        tipo: "normal",
        fecha: null,
        titulo: "Solo porque sí 💙",
        texto: "No necesitas hacer algo muy exagerado para que me gustes, literalmente tu existencia es perfecta y nada ni nadie logrará ser tan importante en mi vida como lo eres tú."
    }
];

export default mensajes;