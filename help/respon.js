// Función de respuesta

//-- 
const wait = () => { 
return '*⏰┋Espere un momento ≧▽≦*'
}

//--
const fdiama = (prefix) => {
  return `❎ Lo siento, sus diamantes 💎 se agotaron, *repita la compra.* con el comando *${prefix}buy*`
}

//--
const gCoinF = (prefix) => {
  return `❎ Lo siento, sus GameCoins 🎰 se agotaron, *repita la compra.* con el comando *${prefix}buygcoin*`
}

//--
const ppterror = (prefix) => {
	return `*✳️Debe escribir así ejemplo:*

▪︎${prefix}ppt papel
▪︎${prefix}ppt piedra
▪︎${prefix}ppt tijera`
}

//--
const stick = () => {
  return '❎ Los siento ocurrió Error, repita después de este mensaje'
}

//--
const errorfg = (prefix) => {
  return `❎ Error! 
🔍 Intentalo de nuevo mas tarde`
}

//-- 
const group = () => {
  return '❎  Este comando es solo para grupos'
}

//-- 
const banf = () => {
  return '❎ Estás en la lista de baneados, Lo siento no puedes usar ningun comando'
}

//--
const ownerB = () => {
  return '❎ Esta función es solo para *Para el dueño del Bot*'
}
//--
const modsB = () => {
  return `❎ Este comando es solo para el *Dueño y Moderadores del Bot*`
}


//--
const premi = (prefix) => {
  return '❎ Esta función es específicamente para usuarios Premium'
}

//--
const userB = (prefix) => {
  return `「 *SIN VERIFICACIÓN* 」
╭──────────────────✾
│ Verifiquese escribiendo
│ el comando *${prefix}verify*
╰──────────────────✾`
}

//--
const admin = () => {
  return '❎ Esta función es solo para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ ¡Para usar este comando debo ser *Administradora!*'
}

//--
const leveloff = () => {
  return '❎ La nivelación no está habilitado en el grupo'
}
const lvlnul = () => {
  return '❎ Tu nivel aun está vacio'
}
const fgnsfw = () => {
  return '❎ Lo siento este grupo no permite contenido +18'
}

module.exports =  { wait, stick, errorfg, group, banf, ownerB, premi, userB, modsB, admin, Badmin, leveloff, lvlnul, fdiama, fgnsfw, gCoinF } 