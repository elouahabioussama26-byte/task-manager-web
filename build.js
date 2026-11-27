// Script de build de Task Manager Web.
// Il fabrique la version livrable de l'application dans le dossier dist/.
const fs = require('node:fs');
const path = require('node:path');

// Les fichiers qui composent l'application livrée
const SOURCE_FILES = ['index.html', 'style.css', 'tasks.js', 'script.js'];
const OUTPUT = 'dist';
const version = require('./package.json').version;

// Arrête le build et signale l'échec
function fail(message) {
  console.error('BUILD FAILED ✗');
  console.error('  ' + message);
  process.exit(1);
}

console.log('Build de Task Manager Web v' + version);

// 1. Vérifier que tout est prêt
for (const file of SOURCE_FILES) {
  if (!fs.existsSync(file)) {
    fail('Fichier introuvable : ' + file);
  }
}

const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('{{VERSION}}')) {
  fail('Marqueur {{VERSION}} introuvable dans index.html');
}

console.log('  vérifications : OK');

// 2. Repartir d'un dossier dist/ vide
fs.rmSync(OUTPUT, { recursive: true, force: true });
fs.mkdirSync(OUTPUT);

// 3. Copier les fichiers de l'application
for (const file of SOURCE_FILES) {
  fs.copyFileSync(file, path.join(OUTPUT, file));
  console.log('  copié : ' + file);
}

// 4. Inscrire le numéro de version dans la page livrée
const page = path.join(OUTPUT, 'index.html');
fs.writeFileSync(page, html.replace('{{VERSION}}', version));
console.log('  version inscrite : ' + version);

console.log('BUILD SUCCESS ✓ - ' + OUTPUT + '/');