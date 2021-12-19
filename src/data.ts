interface randomPlace {
  id: number;
  name: string;
}
export interface activities {
  id: number;
  name: string;
  description: string;
  isHouseActivity: boolean;
}

export const places: randomPlace[] = [
  {id: 1, name: "hero's burguer"},
  {id: 2, name: "Villa Lobos"},
  {id: 3, name: "Cinema"},
  {id: 4, name: "Andar de Bike"},
  {id: 5, name: "Pedalinho"},
  {id: 6, name: "Hopi Hari"},
  {id: 7, name: "Wet'n Wild"},
  {id: 8, name: "Jogar"},
  {id: 9, name: "Cineminha em casa (anula filme)"},
]

export const activitiesList: activities[] = [
    {
      "id":1,
      "name": "Caça ao tesouro sensorial",
      "description": "Primeiro, escolha algumas texturas diferentes, como liso, áspero, aveludado, macio, mole ou rígido. Depois, peça ao pequeno ou pequena que corra pela casa e encontre os objetos com aquelas características.",
      "isHouseActivity": true
    },
    {
      "id":2,
      "name": "Contação de histórias",
      "description": "Uma dica para aproveitar os momentos em família é a contação de histórias. Para isso, você pode escolher o livro preferido do seu pequeno ou pequena, por exemplo. Outra sugestão é inventarem juntos a sua própria história!",
      "isHouseActivity": true
    },
    {
      "id":3,
      "name": "Stop",
      "description": "Para isso, você precisa de folhas em branco, lápis ou canetas. E para a brincadeira ser bem legal, são necessárias ao menos três pessoas. Se a turma for animada, várias horas de diversão e aprendizado estão garantidas!",
      "isHouseActivity": true
    },
    {
      "id":4,
      "name": "Massinha caseira",
      "description": "Brincar de massinha é sempre muito gostoso para as crianças, não é mesmo? E fazer a sua própria massinha em casa torna a brincadeira ainda melhor!",
      "isHouseActivity": true
    },
    {
      "id":5,
      "name": "Strike!",
      "description": "Que tal criar sua própria pista de boliche? Se você gostou da ideia, irá precisar de seis a dez garrafas de plástico, rolos de cartolina ou mesmo papelão. Para acertar os pinos, você pode utilizar uma bola de meia, de tênis ou a bolinha do seu animal de estimação.",
      "isHouseActivity": true
    },
    {
      "id":6,
      "name": "Cabo de guerra em almofadas",
      "description": "Para brincar de cabo de guerra em casa, use alguma base arredondada e macia, como travesseiros ou almofadas. Depois, é só usar uma corda. A ideia é simples, quem sair da base primeiro, perde!",
      "isHouseActivity": true
    },
    {
      "id":7,
      "name": "Faça atividades ao ar livre",
      "description": "Caminhe ou corra, respeitando medidas de prevenção do município, para tomar um pouco de sol. Você também pode jogar bola, brincar com seu bichinho de estimação ou forrar uma toalha na grama e ler um livro no quintal.",
      "isHouseActivity": false
    },
    {
      "id":8,
      "name": "Baladinha",
      "description": "Vai pra balada com seus amigos curtir, beber e farrear por aí",
      "isHouseActivity": false
    },
    {
      "id":9,
      "name": "Rolê no parque",
      "description": "Junta seus amigos e vão dar um rolê num parque legal",
      "isHouseActivity": false
    },
    {
      "id":10,
      "name": "Andar de Bicicleleta",
      "description": "Anda de bicicleta por aí, é bom e emagrece",
      "isHouseActivity": false
    }
  
]