function calculateMagicItem(rarity, name, value) { // Realiza o calculo 
  let po = 0;
  let time = 0;
  
  if (value.indexOf('pp') !== -1) { // Verifica se o valor esta em PO ou PP e realiza a conversao para o calculo
    po = parseFloat(value) * 0.1;
  } else {
    po = parseFloat(value);
  }

  switch (rarity) { // Raridade selecionada que altera o multiplicador de tempo para criação do item de acorod com a raridade
    case "Common":
      value = 48;
      break;
    case "Uncomon":
      value = 24;
      break;
    case "Rare":
      value = 12;
      break;
    case "Very rare":
      value = 3;
      break;
    case "Legendary":
      value = 12;
      break;
    default:
      value = 0;
      break;
  }
  let multiplier = value;
  
time = po * multiplier * 60;
//converte o valor para semanas, dias, horas ou minutos
const days = Math.floor(time / (8 * 60 * 60)); // 8 horas por dia
const hours = Math.floor((time % (8 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((time % (60 * 60)) / 60);
const weeks = Math.floor(days / 5);
const daysRemaining = days % 5;

let formattedTime = '';
if(weeks > 0) { // Monta a string com os valores ignorando os valores iguais a 0
  formattedTime += weeks + ' semana(s), ';
}
if(daysRemaining > 0) {
  formattedTime += daysRemaining + ' dia(s), ';
}
if(hours > 0) {
  formattedTime += hours + ' hora(s), ';
}
if(minutes > 0) {
  formattedTime += minutes + ' minuto(s), ';
}

const result = `O item ${name} levara ${formattedTime} para ser criado.`;

return result;
}
