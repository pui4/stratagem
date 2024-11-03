function createbtns(id) {
  var btns = document.getElementById("btns")
  var title = document.getElementById("title")
  var text = ""
  var htmls = "";
  switch (id) {
  case 0:
  code = [90,180,90,-90,-90,90];
  text = 'SUPPLY PACK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 1:
  code = [90,180,90,90,-90,180];
  text = 'BALLISTIC SHIELD BACKPACK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 2:
  code = [90,-90,180,0,180,0];
  text = 'SHIELD GENERATOR PACK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 3:
  code = [90,-90,-90,90,-90];
  text = 'JUMP PACK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 4:
  code = [90,-90,180,-90,0,90];
  text = '"GUARD DOG"';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 5:
  code = [90,-90,180,-90,0,0];
  text = '"GUARD DOG" ROVER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 6:
  code = [90,-90,180,-90,0,-90];
  text = '"GUARD DOG" DOG BREATH';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 7:
  code = [90,90,-90,0];
  text = 'RESUPPLY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 8:
  code = [180,90,-90,180];
  text = 'MEDICAL SUPPLIES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 9:
  code = [-90,0,0];
  text = 'EAGLE STRAFING RUN';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 10:
  code = [-90,0,90,90,90];
  text = 'EAGLE 500KG BOMB';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 11:
  code = [-90,0,-90,180];
  text = 'EAGLE 110MM ROCKET PODS';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 12:
  code = [-90,0,90,0];
  text = 'EAGLE AIRSTRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 13:
  code = [-90,0,90,-90];
  text = 'EAGLE NAPALM AIRSTRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 14:
  code = [-90,0,-90,90];
  text = 'EAGLE SMOKE STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 15:
  code = [-90,0,90,90,0];
  text = 'EAGLE CLUSTER BOMB';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 16:
  code = [-90,-90,180,-90,0];
  text = 'EAGLE REARM';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 17:
  code = [-90,0,-90,-90];
  text = 'EAGLE AIR-TO-AIR MISSILES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 18:
  code = [90,90,180,0,180,0];
  text = 'FX-12 SHIELD GENERATOR RELAY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 19:
  code = [90,-90,180,0,0,180];
  text = 'E/MG-101 HMG EMPLACEMENT';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 20:
  code = [90,180,-90,0];
  text = 'MD-6 ANTI-PERSONNEL MINEFIELD';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 21:
  code = [90,180,180,90];
  text = 'MD-I4 INCENDIARY MINES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 22:
  code = [90,180,-90,-90];
  text = 'MD-17 ANTI-TANK MINES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 23:
  code = [90,180,180,0];
  text = 'MD-8 GAS MINES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 24:
  code = [90,-90,0,-90,180,0];
  text = 'A/ARC-3 TESLA TOWER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 25:
  code = [90,90,90,90,90,-90,-90];
  text = 'SSSD DELIVERY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 26:
  code = [90,90,90,-90,-90];
  text = 'SSSD DELIVERY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 27:
  code = [90,-90,-90,-90];
  text = 'DRILLING CHARGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 28:
  code = [180,-90,-90,90,180,90];
  text = 'EXTRACTION BEACON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 29:
  code = [90,-90,180,90,-90,0,90,-90];
  text = 'HELLBOMB';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 30:
  code = [180,-90,90,0,90,90];
  text = ' HIVE BREAKER DRILL';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 31:
  code = [90,90,90,180,0,180,0];
  text = 'SPIRE STERILIZER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 32:
  code = [90,-90,90,-90];
  text = 'SUPER EARTH FLAG';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 33:
  code = [90,-90,180,0,-90,90];
  text = 'THUMPER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 34:
  code = [90,90,180,0,90,90];
  text = 'PROSPECTING DRILL';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 35:
  code = [-90,-90,180,0,90,90];
  text = 'SEISMIC PROBE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 36:
  code = [90,-90,90,0,180,90,-90,90];
  text = 'HIVE SCANNER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 37:
  code = [90,-90,-90,0,90,90,180,0,180];
  text = 'SCRAMBLER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 38:
  code = [-90,0,180,-90,0,180,-90];
  text = 'EXTRACTION';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 39:
  code = [-90,0,180,-90,0,180,-90];
  text = 'EXTRACTION';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 40:
  code = [-90,90,0,180,-90];
  text = 'REINFORCE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 41:
  code = [0,0,180,180];
  text = 'ORBITAL ILLUMINATION FLARE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 42:
  code = [-90,90,0,-90];
  text = 'SOS BEACON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 43:
  code = [180,0,-90,-90,-90];
  text = 'UPLOAD DATA';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 44:
  code = [-90,0,-90,0,-90,0];
  text = 'CARPET BOMB';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 45:
  code = [-90,90,-90,-90];
  text = 'JAMMED PI�ATA';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 46:
  code = [0,-90,-90,90];
  text = 'SEAF ARTILLERY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 47:
  code = [0,0,-90];
  text = 'ORBITAL PRECISION STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 48:
  code = [0,0,0];
  text = 'ORBITAL AIRBURST STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 49:
  code = [0,0,180,90];
  text = 'ORBITAL EMS STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 50:
  code = [0,0,90,180,0,90];
  text = 'ORBITAL 120MM HE BARRAGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 51:
  code = [0,0,90,0];
  text = 'ORBITAL GAS STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 52:
  code = [0,90,-90,-90,180,90,90];
  text = 'ORBITAL 380MM HE BARRAGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 53:
  code = [0,90,-90,0,90];
  text = 'ORBITAL LASER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 54:
  code = [0,-90,90,90,0];
  text = 'ORBITAL RAILCANNON STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 55:
  code = [0,90,0,90,0,90];
  text = 'ORBITAL WALKING BARRAGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 56:
  code = [0,90,180,-90,-90];
  text = 'ORBITAL GATLING BARRAGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 57:
  code = [0,0,90,-90];
  text = 'ORBITAL SMOKE STRIKE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 58:
  code = [0,0,90,180,0,-90];
  text = 'ORBITAL NAPALM BARRAGE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 59:
  code = [90,90,-90,0];
  text = 'RESUPPLY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 60:
  code = [90,90,-90,180];
  text = 'MEDICAL SUPPLIES';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 61:
  code = [180,90,0,-90,180,90,90];
  text = 'EXO-45 PATRIOT EXOSUIT';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 62:
  code = [90,-90,-90,90,-90];
  text = 'JUMP PACK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 63:
  code = [90,0,-90,0,180];
  text = 'A/MLS-4X ROCKET SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 64:
  code = [90,180,90,-90,0];
  text = 'MACHINE GUN';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 65:
  code = [90,180,90,-90,-90,0];
  text = 'AUTOCANNON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 66:
  code = [90,180,-90,180,90];
  text = 'GRENADE LAUNCHER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 67:
  code = [90,180,90,-90,0];
  text = 'MACHINE GUN';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 68:
  code = [90,180,90,-90,-90,180];
  text = 'STALWART';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 69:
  code = [90,0,90,-90,180,0];
  text = 'RAILGUN';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 70:
  code = [90,180,0,0,180];
  text = 'RECOILLESS RIFLE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 71:
  code = [90,180,90,-90,180];
  text = 'LASER CANNON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 72:
  code = [90,90,-90,180,0];
  text = 'QUASAR CANNON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 73:
  code = [90,180,0,-90,90];
  text = 'ANTI-MATERIEL RIFLE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 74:
  code = [90,90,180,-90,0];
  text = 'EXPENDABLE ANTI-TANK';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 75:
  code = [90,180,-90,90,0];
  text = 'COMMANDO';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 76:
  code = [90,180,-90,90,-90];
  text = 'FLAMETHROWER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 77:
  code = [90,180,-90,90,90];
  text = 'HEAVY MACHINE GUN';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 78:
  code = [90,-90,-90,180,0];
  text = 'AIRBURST ROCKET LAUNCHER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 79:
  code = [90,-90,0,90,90];
  text = 'MISSILE SILO';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 80:
  code = [90,90,-90,90,90];
  text = 'SPEAR';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 81:
  code = [90,0,90,-90,180,180];
  text = 'ARC THROWER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 82:
  code = [90,180,-90,90,180];
  text = 'STERILIZER';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 83:
  code = [90,-90,0,180];
  text = 'A/G-16 GATLING SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 84:
  code = [90,-90,0,0,-90];
  text = 'A/MG-43 MACHINE GUN SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 85:
  code = [90,-90,0,0,90];
  text = 'A/M-12 MORTAR SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 86:
  code = [90,-90,0,90,0];
  text = 'A/M-23 EMS MORTAR SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 87:
  code = [90,-90,0,0,180];
  text = 'A/MLS-4X ROCKET SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 88:
  code = [90,-90,0,-90,180,-90];
  text = 'A/AC-8 AUTOCANNON SENTRY';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 89:
  code = [-90,90,0,180,-90];
  text = 'REINFORCE';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 90:
  code = [180,-90,-90,90,180,90];
  text = 'EXTRACTION BEACON';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 91:
  code = [180,90,0,-90,180,90,90];
  text = 'EXO-45 PATRIOT EXOSUIT';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  case 92:
  code = [180,90,0,-90,180,90,-90];
  text = 'EXO-49 EMANCIPATOR EXOSUIT';
  for (var i in code) {htmls += `<img id="btn" class="btn" style="transform: rotate(${code[i]}deg); width: ${(20 / 100) * size}vh" src="img/arrow.png">`;
  }
  break;
  }
  btns.innerHTML = htmls;
  title.innerHTML = text;
  }