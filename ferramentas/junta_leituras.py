# Junta os arquivos de _leituras/*.html em leituras.js (window.LEITURAS = {id: html}).
import json, os, glob
base = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
L = {os.path.basename(f)[:-5]: open(f, encoding='utf-8').read() for f in sorted(glob.glob(os.path.join(base, '_leituras', '*.html')))}
open(os.path.join(base, 'leituras.js'), 'w', encoding='utf-8').write('/* Teoria de cada módulo. Edite os arquivos em _leituras/ e rode ferramentas/junta_leituras.py */\nwindow.LEITURAS = ' + json.dumps(L, ensure_ascii=False) + ';\n')
print({k: len(v.split()) for k, v in L.items()})
